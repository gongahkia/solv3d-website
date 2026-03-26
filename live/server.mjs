import "dotenv/config";
import { existsSync } from "node:fs";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import OpenAI from "openai";
import { buildSolverJrInstructions, SOLVER_JR_RESPONSE_SCHEMA } from "./server/solverJrPrompt.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = Number(process.env.PORT || 8787);
const model = process.env.OPENAI_MODEL || "gpt-5-mini";
const logPath = process.env.SOLVER_JR_LOG_PATH?.trim();
const client = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

app.use(express.json({ limit: "512kb" }));

app.get("/api/solver-jr/status", (_req, res) => {
  res.json({
    enabled: Boolean(client),
    model,
    loggingEnabled: Boolean(logPath),
  });
});

app.post("/api/solver-jr", async (req, res) => {
  try {
    if (!client) {
      return res.status(503).json({
        error: "Solver Jr. is disabled because OPENAI_API_KEY is missing on the server.",
      });
    }

    const language = resolveLanguage(req.body?.language);
    const messages = sanitizeMessages(req.body?.messages);

    if (!messages.length || messages[messages.length - 1].role !== "user") {
      return res.status(400).json({
        error: "Expected a non-empty message history ending with a user message.",
      });
    }

    const response = await client.responses.create({
      model,
      store: false,
      instructions: buildSolverJrInstructions(language),
      input: messages.map((message) => ({
        role: message.role,
        content: message.text,
      })),
      text: {
        format: {
          type: "json_schema",
          name: "solver_jr_response",
          strict: true,
          schema: SOLVER_JR_RESPONSE_SCHEMA,
        },
      },
      max_output_tokens: 3200,
    });

    if (!response.output_text) {
      throw new Error("Model returned no structured text output.");
    }

    const payload = parseStructuredOutput(response.output_text);
    await maybeLogSignal({
      language,
      latestUserMessage: messages[messages.length - 1].text,
      payload,
    });

    return res.json(payload);
  } catch (error) {
    console.error("Solver Jr. request failed", error);
    return res.status(500).json({
      error: "Solver Jr. could not complete the diagnosis just now.",
    });
  }
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

function resolveLanguage(language) {
  return ["en", "zh", "ms", "ta"].includes(language) ? language : "en";
}

function sanitizeMessages(messages) {
  if (!Array.isArray(messages)) return [];

  return messages
    .slice(-10)
    .flatMap((message) => {
      if (!message || (message.role !== "user" && message.role !== "assistant")) {
        return [];
      }

      const text = typeof message.text === "string" ? message.text.trim() : "";
      if (!text) return [];

      return [
        {
          role: message.role,
          text: text.slice(0, 3000),
        },
      ];
    });
}

function parseStructuredOutput(rawOutput) {
  try {
    return JSON.parse(rawOutput);
  } catch (_error) {
    const match = rawOutput.match(/\{[\s\S]*\}$/);
    if (!match) {
      throw new Error("No JSON object found in model output.");
    }

    return JSON.parse(match[0]);
  }
}

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
