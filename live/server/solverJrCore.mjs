import "dotenv/config";
import OpenAI from "openai";
import {
  SOLVER_JR_RATE_LIMIT,
  buildSolverJrRateLimitPayload,
  consumeSolverJrRateLimitState,
  createEmptySolverJrRateLimitState,
  evaluateSolverJrRateLimitState,
  normalizeSolverJrRateLimitState,
} from "../shared/solverJrRateLimit.js";
import { buildSolverJrInstructions, SOLVER_JR_RESPONSE_SCHEMA } from "./solverJrPrompt.mjs";

const model = process.env.OPENAI_MODEL || "gpt-5-mini";
const client = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

const rateLimitBuckets = new Map();
let lastPruneAt = 0;
const PRUNE_INTERVAL_MS = 5 * 60 * 1000;

export function getSolverJrStatus({ loggingEnabled = false } = {}) {
  return {
    enabled: Boolean(client),
    model,
    loggingEnabled,
    rateLimit: {
      cooldownSeconds: SOLVER_JR_RATE_LIMIT.cooldownSeconds,
      maxTurnsPer24h: SOLVER_JR_RATE_LIMIT.maxTurnsPer24h,
      windowHours: 24,
    },
  };
}

export function resolveClientIp(req) {
  const forwardedFor = getHeaderValue(req?.headers, "x-forwarded-for");
  if (typeof forwardedFor === "string") {
    const firstForwardedIp = forwardedFor
      .split(",")
      .map((value) => value.trim())
      .find(Boolean);

    if (firstForwardedIp) return firstForwardedIp;
  }

  return req?.socket?.remoteAddress || req?.connection?.remoteAddress || req?.ip || "unknown";
}

export async function processSolverJrRequest({ body, clientIp, onSuccess } = {}) {
  try {
    if (!client) {
      return {
        status: 503,
        payload: {
          error: "Solver Jr. is disabled because OPENAI_API_KEY is missing on the server.",
        },
      };
    }

    const language = resolveLanguage(body?.language);
    const messages = sanitizeMessages(body?.messages);

    if (!messages.length || messages[messages.length - 1].role !== "user") {
      return {
        status: 400,
        payload: {
          error: "Expected a non-empty message history ending with a user message.",
        },
      };
    }

    const rateLimitResult = checkAndConsumeSolverJrRateLimit(clientIp);
    if (!rateLimitResult.allowed) {
      return {
        status: 429,
        payload: {
          error: buildRateLimitError(rateLimitResult.scope),
          ...buildSolverJrRateLimitPayload(rateLimitResult),
        },
      };
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

    if (typeof onSuccess === "function") {
      try {
        await onSuccess({
          language,
          messages,
          payload,
        });
      } catch (loggingError) {
        console.error("Solver Jr. logging failed", loggingError);
      }
    }

    return {
      status: 200,
      payload,
    };
  } catch (error) {
    console.error("Solver Jr. request failed", error);
    return {
      status: 500,
      payload: {
        error: "Solver Jr. could not complete the diagnosis just now.",
      },
    };
  }
}

function getHeaderValue(headers, key) {
  const value = headers?.[key] ?? headers?.[key.toLowerCase()];
  if (Array.isArray(value)) return value.join(",");
  return value;
}

function checkAndConsumeSolverJrRateLimit(clientIp, now = Date.now()) {
  pruneRateLimitBuckets(now);

  const key = typeof clientIp === "string" && clientIp.trim() ? clientIp.trim() : "unknown";
  const currentState = normalizeSolverJrRateLimitState(
    rateLimitBuckets.get(key) || createEmptySolverJrRateLimitState(),
    now
  );
  const evaluation = evaluateSolverJrRateLimitState(currentState, now);

  if (!evaluation.allowed) {
    if (currentState.timestamps.length || currentState.nextAllowedAt) {
      rateLimitBuckets.set(key, currentState);
    } else {
      rateLimitBuckets.delete(key);
    }

    return evaluation;
  }

  const nextState = consumeSolverJrRateLimitState(currentState, now);
  rateLimitBuckets.set(key, nextState);
  return {
    allowed: true,
    state: nextState,
  };
}

function pruneRateLimitBuckets(now) {
  if (now - lastPruneAt < PRUNE_INTERVAL_MS) return;
  lastPruneAt = now;

  for (const [key, state] of rateLimitBuckets.entries()) {
    const normalized = normalizeSolverJrRateLimitState(state, now);
    if (!normalized.timestamps.length && !normalized.nextAllowedAt) {
      rateLimitBuckets.delete(key);
      continue;
    }

    rateLimitBuckets.set(key, normalized);
  }
}

function buildRateLimitError(scope) {
  if (scope === "daily_cap") {
    return "Solver Jr. has reached its chat limit for now. Please contact Solv3d to continue.";
  }

  return "Solver Jr. needs a short pause before the next message.";
}

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
