import { useState } from "react";
import { useRouter } from "next/router";

export default function Submit() {
  const [text, setText] = useState("");
  const [tags, setTags] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    await fetch("/api/problems", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, tags: tags.split(",").map(s => s.trim()) })
    });
    router.push("/");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Submit a Problem</h1>
      <textarea
        className="border p-2 w-full mb-4"
        placeholder="Describe the problem..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        className="border p-2 w-full mb-4"
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
    </div>
  );
}
