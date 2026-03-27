import { processSolverJrRequest, resolveClientIp } from "../server/solverJrCore.mjs";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const result = await processSolverJrRequest({
    body: req.body,
    clientIp: resolveClientIp(req),
  });

  return res.status(result.status).json(result.payload);
}
