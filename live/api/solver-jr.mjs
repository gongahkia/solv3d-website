import OpenAI from "openai";
import { buildSolverJrInstructions, SOLVER_JR_RESPONSE_SCHEMA } from "../server/solverJrPrompt.mjs";

const model = process.env.OPENAI_MODEL || "gpt-5-mini";
const client = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
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
      input: messages.map((m) => ({ role: m.role, content: m.text })),
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
    if (!response.output_text) throw new Error("Model returned no structured text output.");
    const payload = parseStructuredOutput(response.output_text);
    return res.json(payload);
  } catch (error) {
    console.error("Solver Jr. request failed", error);
    return res.status(500).json({ error: "Solver Jr. could not complete the diagnosis just now." });
  }
}

function resolveLanguage(language) {
  return ["en", "zh", "ms", "ta"].includes(language) ? language : "en";
}

function sanitizeMessages(messages) {
  if (!Array.isArray(messages)) return [];
  return messages.slice(-10).flatMap((message) => {
    if (!message || (message.role !== "user" && message.role !== "assistant")) return [];
    const text = typeof message.text === "string" ? message.text.trim() : "";
    if (!text) return [];
    return [{ role: message.role, text: text.slice(0, 3000) }];
  });
}

function parseStructuredOutput(rawOutput) {
  try {
    return JSON.parse(rawOutput);
  } catch (_error) {
    const match = rawOutput.match(/\{[\s\S]*\}$/);
    if (!match) throw new Error("No JSON object found in model output.");
    return JSON.parse(match[0]);
  }
}
