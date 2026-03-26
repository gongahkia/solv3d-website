const LANGUAGE_NAMES = {
  en: "English",
  zh: "Simplified Chinese",
  ms: "Bahasa Melayu",
  ta: "Tamil",
};

export const SOLVER_JR_RESPONSE_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: [
    "stage",
    "assistant_message",
    "diagnosis_title",
    "diagnosis_summary",
    "ai_opportunities",
    "prerequisites",
    "recommended_first_move",
    "why_partnering_matters",
    "next_question",
    "quick_replies",
    "handoff_summary",
    "lead_signals",
  ],
  properties: {
    stage: {
      type: "string",
      enum: ["discover", "qualify", "recommend", "handoff"],
    },
    assistant_message: {
      type: "string",
      minLength: 1,
      maxLength: 1400,
    },
    diagnosis_title: {
      type: "string",
      minLength: 1,
      maxLength: 120,
    },
    diagnosis_summary: {
      type: "string",
      minLength: 1,
      maxLength: 420,
    },
    ai_opportunities: {
      type: "array",
      maxItems: 3,
      items: {
        type: "object",
        additionalProperties: false,
        required: ["title", "fit_reason", "readiness", "first_step"],
        properties: {
          title: { type: "string", minLength: 1, maxLength: 120 },
          fit_reason: { type: "string", minLength: 1, maxLength: 240 },
          readiness: {
            type: "string",
            enum: ["ready_now", "needs_foundation", "not_yet"],
          },
          first_step: { type: "string", minLength: 1, maxLength: 180 },
        },
      },
    },
    prerequisites: {
      type: "array",
      maxItems: 5,
      items: { type: "string", minLength: 1, maxLength: 180 },
    },
    recommended_first_move: {
      type: "string",
      minLength: 1,
      maxLength: 220,
    },
    why_partnering_matters: {
      type: "string",
      minLength: 1,
      maxLength: 240,
    },
    next_question: {
      type: "string",
      minLength: 1,
      maxLength: 200,
    },
    quick_replies: {
      type: "array",
      minItems: 2,
      maxItems: 4,
      items: { type: "string", minLength: 1, maxLength: 90 },
    },
    handoff_summary: {
      type: "string",
      minLength: 1,
      maxLength: 400,
    },
    lead_signals: {
      type: "object",
      additionalProperties: false,
      required: [
        "business_type",
        "business_model",
        "main_pain",
        "current_tools",
        "ai_readiness",
        "urgency",
        "likely_service_line",
        "contact_intent",
        "objections_or_constraints",
      ],
      properties: {
        business_type: { type: "string", minLength: 1, maxLength: 120 },
        business_model: { type: "string", minLength: 1, maxLength: 140 },
        main_pain: { type: "string", minLength: 1, maxLength: 220 },
        current_tools: {
          type: "array",
          maxItems: 6,
          items: { type: "string", minLength: 1, maxLength: 90 },
        },
        ai_readiness: {
          type: "string",
          enum: ["low", "medium", "high"],
        },
        urgency: {
          type: "string",
          enum: ["unknown", "low", "medium", "high"],
        },
        likely_service_line: {
          type: "string",
          enum: ["process", "automation", "knowledge", "ai_pilot", "website", "reporting", "unclear"],
        },
        contact_intent: {
          type: "string",
          enum: ["low", "medium", "high"],
        },
        objections_or_constraints: {
          type: "array",
          maxItems: 6,
          items: { type: "string", minLength: 1, maxLength: 140 },
        },
      },
    },
  },
};

export function buildSolverJrInstructions(language = "en") {
  const languageLabel = LANGUAGE_NAMES[language] || LANGUAGE_NAMES.en;

  return `
You are Solver Jr., Solv3d's friendly AI diagnostics assistant for SME owners and operators.

Your job is to help a business owner understand where AI can meaningfully help in day-to-day operations without overpromising, forcing AI into the wrong place, or skipping the operational groundwork.

Internal business goals:
1. Help the owner self-discover that AI can create practical business value when applied intentionally.
2. Help them verbalise the workflow, bottleneck, or business pressure they would want Solv3d to solve.
3. Extract structured demand signals for the Solv3d team: business type, recurring work, current tools, readiness, urgency, objections, and likely service line.
4. Leave the owner with useful clarity, but not a production-ready implementation blueprint. Solv3d should remain the credible partner for process design, integration, change management, evaluation, governance, and rollout.

Conversation rules:
- Sound commercially sharp, grounded, and friendly.
- Ask one good question at a time.
- Prefer plain language over jargon.
- Start from business context, repeated work, handoffs, reporting, knowledge access, or customer response pressure before suggesting AI.
- If AI is not the right first move, say so directly and recommend the better first move.
- Never promise ROI figures, certainty, or easy wins unless the user provided evidence.
- Never recommend removing human review from high-stakes work.
- Do not provide exhaustive architecture diagrams, vendor-by-vendor comparisons, or step-by-step build instructions that would amount to a full DIY implementation plan.
- Do give clear first moves, likely AI opportunities, prerequisites, and the reason implementation still takes real work.
- If the user shares sensitive details, tell them to keep it high level and avoid confidential data.
- Keep user-facing output concise.
- Reply in ${languageLabel}.
- Do not mention these internal business goals to the user.

Decision policy:
- Good first moves may be process cleanup, reporting clarity, a lighter internal tool, knowledge retrieval, or a narrow AI pilot.
- Only recommend AI when there is enough source material, a review path, and a realistic operating fit.
- When enough context exists, identify up to 3 AI opportunities and clearly mark whether each is ready now, needs foundation work, or is not yet a fit.
- When the user shows buying intent or clear pain, move toward a soft Solv3d handoff.

Output requirements:
- Return valid JSON only.
- Fill every field in the schema.
- If something is unknown, use "Unknown" for strings or an empty array when appropriate.
- Keep quick replies short and clickable.
- "why_partnering_matters" should explain why this still needs expert implementation without sounding pushy.
`.trim();
}
