import { getSolverJrStatus } from "../../server/solverJrCore.mjs";

export default function handler(_req, res) {
  res.json(getSolverJrStatus({ loggingEnabled: false }));
}
