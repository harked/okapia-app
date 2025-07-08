# AI-Powered Problem Discovery Platform

> 🌐 A full-stack web app where users post real-world problems, get AI-detected similar problems, and receive solution ideas. Built with Next.js, Node.js, PostgreSQL, OpenAI embeddings, and Tailwind CSS.

---

## 🚀 Features

✅ **Post real-world problems** — Users can submit problems they face (personal, business, etc.).  
✅ **AI-powered similarity detection** — Uses OpenAI embeddings to find similar existing problems.  
✅ **GPT-generated suggestions** — Provides related solution ideas or innovations.  
✅ **Tags & categorization** — Automatically tags problems by domain (home, health, business, etc.).  
✅ **Authentication** — Email sign up (NextAuth) + optional wallet login (wagmi).  
✅ **Responsive UI** — Built with Tailwind CSS and clean UX patterns.

---

## 🛠️ Tech Stack

| Layer         | Tech                                       |
|---------------|--------------------------------------------|
| Frontend      | Next.js 14, Tailwind CSS                   |
| Backend       | Next.js API Routes, Node.js                |
| Database      | PostgreSQL with Prisma ORM (pgvector for embeddings) |
| AI            | OpenAI embeddings + GPT-4                  |
| Auth          | NextAuth (email + OAuth)                  |
| Bonus         | Wagmi + RainbowKit (optional Web3 login)  |
| Caching       | Redis (future roadmap)                    |

---

## ⚙️ Local Setup

1️⃣ **Clone repo & install dependencies**
```bash
git clone https://github.com/your-username/ai-problem-discovery.git
cd ai-problem-discovery
npm install
```

2️⃣ Set up environment
```bash
cp .env.example .env
```

Fill in:
```
DATABASE_URL=postgresql://user:pass@localhost:5432/ai_problem_db
OPENAI_API_KEY=sk-...
NEXTAUTH_SECRET=your-random-secret
```

3️⃣ Run migrations & seed
```
npx prisma migrate dev --name init
npx prisma db seed
```

4️⃣ Run app
```
npm run dev
```

Visit: http://localhost:3000