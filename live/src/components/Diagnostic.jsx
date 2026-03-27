import { createEffect, createMemo, createSignal, For, onCleanup, onMount, Show } from "solid-js";
import {
  SOLVER_JR_RATE_LIMIT,
  consumeSolverJrRateLimitState,
  createEmptySolverJrRateLimitState,
  evaluateSolverJrRateLimitState,
  normalizeSolverJrRateLimitState,
} from "../../shared/solverJrRateLimit.js";
import { CONTACT_EMAIL, t } from "../data/content";
import { lang } from "../data/lang";
import "./Diagnostic.css";

function initialAssistantMessage() {
  return { role: "assistant", text: t().diagnostic.promptLabel };
}

function formatReadiness(readiness) {
  if (readiness === "ready_now") return t().diagnostic.readinessReady;
  if (readiness === "needs_foundation") return t().diagnostic.readinessFoundation;
  return t().diagnostic.readinessNotYet;
}

function normalizeText(text) {
  return typeof text === "string" ? text.replace(/\s+/g, " ").trim() : "";
}

function shortenText(text, maxLength = 150) {
  const normalized = normalizeText(text);
  if (normalized.length <= maxLength) return normalized;

  const cropped = normalized.slice(0, maxLength);
  const breakAt = cropped.lastIndexOf(" ");
  const safeCrop = breakAt > maxLength * 0.6 ? cropped.slice(0, breakAt) : cropped;
  return `${safeCrop.trimEnd()}…`;
}

function buildSummaryBullets(text) {
  const normalized = normalizeText(text);
  if (!normalized) return [];

  const bullets = normalized
    .split(/(?<=[.!?])\s+|(?<=[。！？])\s*/u)
    .map((item) => item.trim())
    .filter(Boolean);

  if (bullets.length > 1) return bullets.slice(0, 3).map((item) => shortenText(item, 115));
  return [shortenText(normalized, 180)];
}

function buildMailtoHref(insight) {
  if (!insight) return `mailto:${CONTACT_EMAIL}`;

  const body = [
    "Hi Solv3d,",
    "",
    "I used Solver Jr. and want to continue the conversation.",
    "",
    insight.handoff_summary,
    "",
    `${t().diagnostic.firstMoveLabel}: ${insight.recommended_first_move}`,
    ...insight.ai_opportunities.map((item, index) => `${index + 1}. ${item.title} (${formatReadiness(item.readiness)})`),
    "",
    "Thanks,",
  ].join("\n");

  const subject = `${t().diagnostic.emailSubjectPrefix}: ${insight.diagnosis_title}`;
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function buildGeneralContactHref() {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t().diagnostic.limitContactSubject)}`;
}

function formatWaitTime(totalSeconds) {
  const safeSeconds = Math.max(0, Number.isFinite(totalSeconds) ? Math.ceil(totalSeconds) : 0);
  const hours = Math.floor(safeSeconds / 3600);
  const minutes = Math.floor((safeSeconds % 3600) / 60);
  const seconds = safeSeconds % 60;

  if (hours > 0) return `${hours}h ${String(minutes).padStart(2, "0")}m`;
  if (minutes > 0) return `${minutes}m ${String(seconds).padStart(2, "0")}s`;
  return `${seconds}s`;
}

function readClientRateLimitState() {
  if (typeof localStorage === "undefined") {
    return createEmptySolverJrRateLimitState();
  }

  try {
    const raw = localStorage.getItem(SOLVER_JR_RATE_LIMIT.storageKey);
    if (!raw) return createEmptySolverJrRateLimitState();

    return normalizeSolverJrRateLimitState(JSON.parse(raw));
  } catch (_error) {
    return createEmptySolverJrRateLimitState();
  }
}

function persistClientRateLimitState(state) {
  if (typeof localStorage === "undefined") return;

  try {
    localStorage.setItem(
      SOLVER_JR_RATE_LIMIT.storageKey,
      JSON.stringify(normalizeSolverJrRateLimitState(state))
    );
  } catch (_error) {
    // Ignore storage failures and fall back to backend enforcement.
  }
}

function isRateLimitPayload(payload) {
  return payload?.code === SOLVER_JR_RATE_LIMIT.errorCode
    && (payload.scope === "cooldown" || payload.scope === "daily_cap");
}

function buildClientStateFromRateLimitPayload(payload, fallbackState) {
  const now = Date.now();
  const currentState = normalizeSolverJrRateLimitState(fallbackState, now);

  if (payload?.scope === "cooldown") {
    const retryAfterSeconds = Math.max(1, Number(payload.retryAfterSeconds) || SOLVER_JR_RATE_LIMIT.cooldownSeconds);
    return {
      timestamps: currentState.timestamps,
      nextAllowedAt: now + retryAfterSeconds * 1000,
    };
  }

  if (payload?.scope === "daily_cap") {
    const resetsAt = Date.parse(payload.resetsAt || "");
    const windowStart = Number.isFinite(resetsAt)
      ? resetsAt - SOLVER_JR_RATE_LIMIT.windowMs
      : now;

    return normalizeSolverJrRateLimitState({
      timestamps: Array.from(
        { length: SOLVER_JR_RATE_LIMIT.maxTurnsPer24h },
        (_value, index) => windowStart + index
      ),
      nextAllowedAt: 0,
    }, now);
  }

  return currentState;
}

export default function Diagnostic() {
  const [messages, setMessages] = createSignal([initialAssistantMessage()]);
  const [input, setInput] = createSignal("");
  const [loading, setLoading] = createSignal(false);
  const [errorToast, setErrorToast] = createSignal("");
  const [insight, setInsight] = createSignal(null);
  const [clientRateLimitState, setClientRateLimitState] = createSignal(readClientRateLimitState());
  const [nowTick, setNowTick] = createSignal(Date.now());
  let activeRequest = 0;
  let lastLanguage = lang();
  let rateLimitTimer;

  const mailtoHref = createMemo(() => buildMailtoHref(insight()));
  const limitContactHref = createMemo(() => (insight() ? mailtoHref() : buildGeneralContactHref()));
  const hasUserMessages = createMemo(() => messages().some((message) => message.role === "user"));
  const summaryBullets = createMemo(() => buildSummaryBullets(insight()?.diagnosis_summary));
  const clientRateLimit = createMemo(() => {
    nowTick();
    return evaluateSolverJrRateLimitState(clientRateLimitState(), Date.now());
  });
  const isClientRateLimited = createMemo(() => !clientRateLimit().allowed);
  const rateLimitNotice = createMemo(() => {
    const limit = clientRateLimit();
    if (limit.allowed) return null;

    return {
      title: limit.scope === "daily_cap"
        ? t().diagnostic.limitDailyTitle
        : t().diagnostic.limitCooldownTitle,
      body: limit.scope === "daily_cap"
        ? t().diagnostic.limitDailyBody
        : t().diagnostic.limitCooldownBody,
      waitLabel: limit.scope === "daily_cap"
        ? t().diagnostic.limitResetLabel
        : t().diagnostic.limitRetryLabel,
      waitValue: formatWaitTime(limit.retryAfterSeconds),
    };
  });

  onMount(() => {
    rateLimitTimer = window.setInterval(() => setNowTick(Date.now()), 1000);
  });

  onCleanup(() => {
    window.clearInterval(rateLimitTimer);
  });

  createEffect(() => {
    const currentLanguage = lang();
    if (currentLanguage === lastLanguage) return;
    lastLanguage = currentLanguage;
    resetConversation();
  });

  function applyClientRateLimitState(nextState) {
    const normalized = normalizeSolverJrRateLimitState(nextState);
    setClientRateLimitState(normalized);
    persistClientRateLimitState(normalized);
    setNowTick(Date.now());
  }

  function resetConversation() {
    activeRequest += 1;
    setMessages([initialAssistantMessage()]);
    setInput("");
    setLoading(false);
    setErrorToast("");
    setInsight(null);
  }

  async function submitMessage(rawText) {
    const text = rawText.trim();
    if (!text || loading()) return;

    const currentRateLimit = evaluateSolverJrRateLimitState(clientRateLimitState(), Date.now());
    if (!currentRateLimit.allowed) {
      setErrorToast("");
      setNowTick(Date.now());
      return;
    }

    const history = [...messages(), { role: "user", text }].slice(-10);
    const requestId = ++activeRequest;
    const previousRateLimitState = clientRateLimitState();
    let shouldRestoreClientRateLimit = true;

    setMessages(history);
    setInput("");
    setLoading(true);
    setErrorToast("");
    applyClientRateLimitState(consumeSolverJrRateLimitState(previousRateLimitState, Date.now()));

    try {
      const response = await fetch("/api/solver-jr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language: lang(),
          messages: history,
        }),
      });

      let payload = {};
      try {
        payload = await response.json();
      } catch (_error) {
        payload = {};
      }

      if (!response.ok) {
        if (response.status === 429 && isRateLimitPayload(payload)) {
          applyClientRateLimitState(buildClientStateFromRateLimitPayload(payload, previousRateLimitState));
          shouldRestoreClientRateLimit = false;
          return;
        }

        throw new Error(payload.error || t().diagnostic.error);
      }

      shouldRestoreClientRateLimit = false;

      if (requestId !== activeRequest) return;

      const assistantText = [payload.assistant_message, payload.next_question]
        .filter(Boolean)
        .join("\n\n");

      setMessages([...history, { role: "assistant", text: assistantText }]);
      setInsight(payload);
    } catch (requestError) {
      if (shouldRestoreClientRateLimit) {
        applyClientRateLimitState(previousRateLimitState);
      }

      if (requestId !== activeRequest) return;
      const message = requestError.message || t().diagnostic.error;
      setErrorToast(message);
    } finally {
      if (requestId === activeRequest) {
        setLoading(false);
      }
    }
  }

  return (
    <section class="section diagnostic-section" id="ask">
      <div class="shell diagnostic-shell">
        <div class="diagnostic-header">
          <h2>{t().nav.ask}</h2>
        </div>
        <div class="diagnostic-grid">
          <div class="diagnostic-chat">
            <div class="diagnostic-chat-top">
              <span class="diagnostic-badge">Solver Jr.</span>
            </div>

            <div class="diagnostic-thread" aria-live="polite">
              <For each={messages()}>
                {(message) => (
                  <div class="diagnostic-message" classList={{ "is-user": message.role === "user" }}>
                    <span class="diagnostic-role">
                      {message.role === "user" ? t().diagnostic.userLabel : "Solver Jr."}
                    </span>
                    <p>{message.text}</p>
                  </div>
                )}
              </For>

              <Show when={loading()}>
                <div class="diagnostic-message">
                  <span class="diagnostic-role">Solver Jr.</span>
                  <p class="diagnostic-thinking">...</p>
                </div>
              </Show>

              <Show when={!hasUserMessages()}>
                <div class="diagnostic-starters">
                  <span>{t().diagnostic.starterTitle}</span>
                  <div class="diagnostic-chip-row">
                    <For each={t().diagnostic.starters}>
                      {(starter) => (
                        <button
                          type="button"
                          class="diagnostic-chip"
                          onClick={() => submitMessage(starter)}
                          disabled={loading() || isClientRateLimited()}
                        >
                          {starter}
                        </button>
                      )}
                    </For>
                  </div>
                </div>
              </Show>
            </div>

            <form
              class="diagnostic-form"
              onSubmit={(event) => {
                event.preventDefault();
                void submitMessage(input());
              }}
            >
              <textarea
                value={input()}
                onInput={(event) => setInput(event.currentTarget.value)}
                placeholder={t().diagnostic.inputPlaceholder}
                rows="4"
                disabled={loading()}
              />
              <button type="submit" disabled={loading() || !input().trim() || isClientRateLimited()}>
                {loading() ? t().diagnostic.sending : t().diagnostic.send}
              </button>

              <Show when={rateLimitNotice()}>
                {(notice) => (
                  <aside class="diagnostic-limit" aria-live="polite">
                    <div class="diagnostic-limit-copy">
                      <span class="diagnostic-limit-title">{notice().title}</span>
                      <p>{notice().body}</p>
                      <span class="diagnostic-limit-meta">{`${notice().waitLabel} ${notice().waitValue}`}</span>
                      <p class="diagnostic-limit-contact">{t().diagnostic.limitContactBody}</p>
                    </div>
                    <a href={limitContactHref()} class="diagnostic-limit-link">
                      {t().diagnostic.limitContactCta}
                    </a>
                  </aside>
                )}
              </Show>
            </form>
          </div>

          <aside class="diagnostic-insight">
            <div class="diagnostic-insight-top">
              <p>{t().diagnostic.insightTitle}</p>
              <Show
                when={insight()}
                fallback={<span class="diagnostic-email is-disabled">{t().diagnostic.emailCta}</span>}
              >
                <a href={mailtoHref()} class="diagnostic-email">
                  {t().diagnostic.emailCta}
                </a>
              </Show>
            </div>

            <Show
              when={insight()}
              fallback={
                <div class="diagnostic-empty-state">
                  <div class="diagnostic-empty-orbit" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <p class="diagnostic-empty">{t().diagnostic.insightEmpty}</p>
                </div>
              }
            >
              <div class="diagnostic-summary">
                <span class="diagnostic-stage">{insight().diagnosis_title}</span>
                <ul class="diagnostic-summary-list">
                  <For each={summaryBullets()}>
                    {(item) => <li>{item}</li>}
                  </For>
                </ul>
              </div>

              <div class="diagnostic-panel">
                <span>{t().diagnostic.firstMoveLabel}</span>
                <p>{shortenText(insight().recommended_first_move, 135)}</p>
              </div>

              <Show when={insight().ai_opportunities.length}>
                <div class="diagnostic-opps">
                  <span class="diagnostic-stack-label">{t().diagnostic.opportunitiesLabel}</span>
                  <For each={insight().ai_opportunities}>
                    {(item) => (
                      <div class="diagnostic-opp-row">
                        <div class="diagnostic-opp-copy">
                          <span class="diagnostic-opp-title">{shortenText(item.title, 78)}</span>
                        </div>
                        <span
                          class="diagnostic-opp-badge"
                          classList={{
                            "is-ready": item.readiness === "ready_now",
                            "is-foundation": item.readiness === "needs_foundation",
                          }}
                        >
                          {formatReadiness(item.readiness)}
                        </span>
                      </div>
                    )}
                  </For>
                </div>
              </Show>
            </Show>
          </aside>
        </div>

        <Show when={errorToast()}>
          <aside class="diagnostic-error-toast" aria-live="polite">
            <p>{errorToast()}</p>
            <button type="button" onClick={() => setErrorToast("")} aria-label={t().diagnostic.dismiss}>
              <span>&times;</span>
            </button>
          </aside>
        </Show>
      </div>
    </section>
  );
}
