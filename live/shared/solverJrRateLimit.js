export const SOLVER_JR_RATE_LIMIT = Object.freeze({
  cooldownSeconds: 30,
  cooldownMs: 30 * 1000,
  maxTurnsPer24h: 3,
  windowMs: 24 * 60 * 60 * 1000,
  storageKey: "solv3d-solver-jr-rate-limit",
  errorCode: "solver_jr_rate_limited",
});

export function createEmptySolverJrRateLimitState() {
  return {
    timestamps: [],
    nextAllowedAt: 0,
  };
}

export function normalizeSolverJrRateLimitState(state, now = Date.now()) {
  const rawTimestamps = Array.isArray(state?.timestamps) ? state.timestamps : [];
  const timestamps = rawTimestamps
    .filter((value) => Number.isFinite(value))
    .filter((value) => value > now - SOLVER_JR_RATE_LIMIT.windowMs && value <= now + SOLVER_JR_RATE_LIMIT.windowMs)
    .sort((left, right) => left - right);

  const nextAllowedAt = Number.isFinite(state?.nextAllowedAt) && state.nextAllowedAt > now
    ? state.nextAllowedAt
    : 0;

  return {
    timestamps,
    nextAllowedAt,
  };
}

export function evaluateSolverJrRateLimitState(state, now = Date.now()) {
  const normalized = normalizeSolverJrRateLimitState(state, now);
  const remainingTurns = Math.max(0, SOLVER_JR_RATE_LIMIT.maxTurnsPer24h - normalized.timestamps.length);

  if (remainingTurns === 0) {
    const resetsAt = normalized.timestamps[0] + SOLVER_JR_RATE_LIMIT.windowMs;
    return {
      allowed: false,
      scope: "daily_cap",
      retryAfterSeconds: Math.max(1, Math.ceil((resetsAt - now) / 1000)),
      remainingTurns: 0,
      resetsAt,
      state: normalized,
    };
  }

  if (normalized.nextAllowedAt > now) {
    return {
      allowed: false,
      scope: "cooldown",
      retryAfterSeconds: Math.max(1, Math.ceil((normalized.nextAllowedAt - now) / 1000)),
      remainingTurns,
      resetsAt: normalized.nextAllowedAt,
      state: normalized,
    };
  }

  return {
    allowed: true,
    scope: null,
    retryAfterSeconds: 0,
    remainingTurns,
    resetsAt: normalized.timestamps[0] ? normalized.timestamps[0] + SOLVER_JR_RATE_LIMIT.windowMs : null,
    state: normalized,
  };
}

export function consumeSolverJrRateLimitState(state, now = Date.now()) {
  const normalized = normalizeSolverJrRateLimitState(state, now);

  return {
    timestamps: [...normalized.timestamps, now],
    nextAllowedAt: now + SOLVER_JR_RATE_LIMIT.cooldownMs,
  };
}

export function buildSolverJrRateLimitPayload(result) {
  return {
    code: SOLVER_JR_RATE_LIMIT.errorCode,
    scope: result.scope,
    retryAfterSeconds: result.retryAfterSeconds,
    remainingTurns: result.remainingTurns,
    resetsAt: result.resetsAt ? new Date(result.resetsAt).toISOString() : null,
  };
}
