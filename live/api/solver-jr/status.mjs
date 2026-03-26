const model = process.env.OPENAI_MODEL || "gpt-5-mini";

export default function handler(_req, res) {
  res.json({
    enabled: Boolean(process.env.OPENAI_API_KEY),
    model,
    loggingEnabled: false,
  });
}
