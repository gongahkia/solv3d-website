import "dotenv/config";
import { existsSync } from "node:fs";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import { getSolverJrStatus, processSolverJrRequest, resolveClientIp } from "./server/solverJrCore.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = Number(process.env.PORT || 8787);
const logPath = process.env.SOLVER_JR_LOG_PATH?.trim();

app.use(express.json({ limit: "512kb" }));

app.get("/api/solver-jr/status", (_req, res) => {
  res.json(getSolverJrStatus({ loggingEnabled: Boolean(logPath) }));
});

app.post("/api/solver-jr", async (req, res) => {
  const result = await processSolverJrRequest({
    body: req.body,
    clientIp: resolveClientIp(req),
    onSuccess: ({ language, messages, payload }) => maybeLogSignal({
      language,
      latestUserMessage: messages[messages.length - 1]?.text || "",
      payload,
    }),
  });

  return res.status(result.status).json(result.payload);
});

const distDir = path.join(__dirname, "dist");
if (process.env.NODE_ENV !== "development" && existsSync(path.join(distDir, "index.html"))) {
  app.use(express.static(distDir));
  app.get(/^(?!\/api).*/, (_req, res) => {
    res.sendFile(path.join(distDir, "index.html"));
  });
}

const server = app.listen(port, "127.0.0.1");
server.on("listening", () => console.log(`Solver Jr. API listening on http://127.0.0.1:${port}`));
server.on("error", (err) => {
  console.error(`Failed to start server: ${err.message}`);
  process.exit(1);
});

async function maybeLogSignal({ language, latestUserMessage, payload }) {
  if (!logPath) return;

  const record = {
    timestamp: new Date().toISOString(),
    language,
    latestUserMessage,
    stage: payload.stage,
    diagnosisTitle: payload.diagnosis_title,
    recommendedFirstMove: payload.recommended_first_move,
    handoffSummary: payload.handoff_summary,
    leadSignals: payload.lead_signals,
  };

  await fs.mkdir(path.dirname(logPath), { recursive: true });
  await fs.appendFile(logPath, `${JSON.stringify(record)}\n`, "utf8");
}
