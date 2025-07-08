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
| Database      | PostgreSQL with Prisma ORM (pgvector)      |
| AI            | OpenAI embeddings + GPT-4                  |
| Auth          | NextAuth (email + OAuth)                   |
| Web3 Login    | Wagmi + RainbowKit (optional)              |
| Caching       | Redis (future roadmap)                     |

---

## 🗺️ Project Architecture
```
├── pages/
│   ├── index.tsx         # Home feed
│   ├── submit.tsx        # Form to submit problem
│   └── api/
│       ├── problems.ts   # Create + fetch problems
│       └── similarity.ts # Embedding + similarity logic
├── prisma/
│   ├── schema.prisma     # DB schema (includes vector type)
│   └── seed.ts           # Seed data
├── lib/
│   └── openai.ts         # OpenAI client
└── tailwind.config.js
```

---

## ⚙️ Local Setup

1️⃣ **Clone repo & install dependencies**
```bash
git clone https://github.com/harked/okapia-app.git
cd okapia-app
npm install
```

2️⃣ Set up environment
```bash
cp .env.example .env
```

Fill in:
```
DATABASE_URL=postgresql://user:pass@localhost:5432/okapia_db
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