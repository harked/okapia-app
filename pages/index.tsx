import useSWR from "swr";
import Link from "next/link";

export default function Home() {
  const { data: problems, error } = useSWR("/api/problems", (url) => fetch(url).then(r => r.json()));
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">🌐 Problem Discovery Platform</h1>
      <Link href="/submit" className="text-blue-600 underline">Post a new problem →</Link>
      <div className="mt-6">
        {problems?.map(p => (
          <div key={p.id} className="mb-4 p-4 border rounded">
            <div>{p.text}</div>
            <div className="text-xs text-gray-500">Tags: {p.tags.join(", ")}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
