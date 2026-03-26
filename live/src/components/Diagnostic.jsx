import { createEffect, createMemo, createSignal, For, Show } from "solid-js";
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

export default function Diagnostic() {
  const [messages, setMessages] = createSignal([initialAssistantMessage()]);
  const [input, setInput] = createSignal("");
  const [loading, setLoading] = createSignal(false);
  const [errorToast, setErrorToast] = createSignal("");
  const [insight, setInsight] = createSignal(null);
  let activeRequest = 0;
  let lastLanguage = lang();

  const mailtoHref = createMemo(() => buildMailtoHref(insight()));
  const hasUserMessages = createMemo(() => messages().some((message) => message.role === "user"));

  createEffect(() => {
    const currentLanguage = lang();
    if (currentLanguage === lastLanguage) return;
    lastLanguage = currentLanguage;
    resetConversation();
  });

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

    const history = [...messages(), { role: "user", text }].slice(-10);
    const requestId = ++activeRequest;

    setMessages(history);
    setInput("");
    setLoading(true);
    setErrorToast("");

    try {
      const response = await fetch("/api/solver-jr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language: lang(),
          messages: history,
        }),
      });

      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.error || t().diagnostic.error);
      }

      if (requestId !== activeRequest) return;

      const assistantText = [payload.assistant_message, payload.next_question]
        .filter(Boolean)
        .join("\n\n");

      setMessages([...history, { role: "assistant", text: assistantText }]);
      setInsight(payload);
    } catch (requestError) {
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
                  <p>{t().diagnostic.sending}</p>
                </div>
              </Show>
            </div>

            <Show when={!hasUserMessages()}>
              <div class="diagnostic-starters">
                <span>{t().diagnostic.starterTitle}</span>
                <div class="diagnostic-chip-row">
                  <For each={t().diagnostic.starters}>
                    {(starter) => (
                      <button type="button" class="diagnostic-chip" onClick={() => submitMessage(starter)} disabled={loading()}>
                        {starter}
                      </button>
                    )}
                  </For>
                </div>
              </div>
            </Show>

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
              <button type="submit" disabled={loading() || !input().trim()}>
                {loading() ? t().diagnostic.sending : t().diagnostic.send}
              </button>
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
                  <div class="diagnostic-empty-list">
                    <span>{t().diagnostic.firstMoveLabel}</span>
                    <span>{t().diagnostic.opportunitiesLabel}</span>
                    <span>{t().diagnostic.prerequisitesLabel}</span>
                  </div>
                </div>
              }
            >
              <div class="diagnostic-summary">
                <span class="diagnostic-stage">{insight().diagnosis_title}</span>
                <p>{insight().diagnosis_summary}</p>
              </div>

              <div class="diagnostic-panel">
                <span>{t().diagnostic.firstMoveLabel}</span>
                <p>{insight().recommended_first_move}</p>
              </div>

              <Show when={insight().ai_opportunities.length}>
                <div class="diagnostic-stack">
                  <span class="diagnostic-stack-label">{t().diagnostic.opportunitiesLabel}</span>
                  <For each={insight().ai_opportunities}>
                    {(item) => (
                      <article class="diagnostic-opportunity">
                        <div class="diagnostic-opportunity-top">
                          <h3>{item.title}</h3>
                          <span>{formatReadiness(item.readiness)}</span>
                        </div>
                        <p>{item.fit_reason}</p>
                        <strong>{item.first_step}</strong>
                      </article>
                    )}
                  </For>
                </div>
              </Show>

              <Show when={insight().prerequisites.length}>
                <div class="diagnostic-panel">
                  <span>{t().diagnostic.prerequisitesLabel}</span>
                  <ul>
                    <For each={insight().prerequisites}>{(item) => <li>{item}</li>}</For>
                  </ul>
                </div>
              </Show>

              <div class="diagnostic-panel">
                <span>{t().diagnostic.whyPartnerLabel}</span>
                <p>{insight().why_partnering_matters}</p>
              </div>

              <div class="diagnostic-panel">
                <span>{t().diagnostic.nextQuestionLabel}</span>
                <p>{insight().next_question}</p>
              </div>
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
