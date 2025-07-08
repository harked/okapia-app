import { prisma } from "@/lib/prisma";
import { getEmbedding } from "@/lib/openai";

export default async function handler(req, res) {
  const { text } = req.body;
  const embedding = await getEmbedding(text);
  const similar = await prisma.$queryRaw`
    SELECT *, (embedding <=> ${embedding}) AS distance
    FROM "Problem"
    ORDER BY distance ASC
    LIMIT 5;
  `;
  res.json(similar);
}
