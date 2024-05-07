import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const people = await prisma.person.findMany();

  if (!people) {
    return res.status(400).json({ message: "Doesnt have any player yet" });
  }

  return res.json(people);
}
