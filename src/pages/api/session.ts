import { auth } from "src/utils/lucia";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") return res.status(404).json({ error: "Not found" });

  const authReq = auth.handleRequest(req, res);
  const session = await authReq.validateUser();

  return res.json(session);
}
