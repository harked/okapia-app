import { prisma } from "@/lib/prisma";
import { getEmbedding } from "@/lib/openai";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { text, tags } = req.body;
    const embedding = await getEmbedding(text);
    const problem = await prisma.problem.create({
      data: { text, tags, embedding }
    });
    res.json(problem);
  } else if (req.method === "GET") {
    const problems = await prisma.problem.findMany({ orderBy: { createdAt: "desc" }});
    res.json(problems);
  }
}
