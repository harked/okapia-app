import OpenAI from "openai";

export const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function getEmbedding(text: string) {
  const embedding = await openai.embeddings.create({
    model: "text-embedding-3-large",
    input: text
  });
  return embedding.data[0].embedding;
}

export async function generateSuggestions(problem: string) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      { role: "system", content: "You're an expert product innovation assistant." },
      { role: "user", content: `Suggest solution ideas for this problem: ${problem}` }
    ]
  });
  return response.choices[0].message.content;
}
