import { prisma } from "../lib/prisma";

async function main() {
  await prisma.problem.createMany({
    data: [
      { text: "I always forget to water my plants.", tags: ["home", "automation"], embedding: [] },
      { text: "I need help tracking my fitness goals.", tags: ["health", "fitness"], embedding: [] },
      { text: "Hard to manage remote teams effectively.", tags: ["business", "management"], embedding: [] }
    ]
  });
  console.log("Seed data inserted");
}

main().catch(e => console.error(e)).finally(() => prisma.$disconnect());