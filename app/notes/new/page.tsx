"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getUser } from "@/app/i/promptopia/create-prompt/action";
import { User } from "next-auth";
import { toast } from "react-toastify";
import Link from "next/link";

export default function CreateNewNotePage() {
  const router = useRouter();
  const [user, setUser] = useState<User>();
  const [submitting, setSubmitting] = useState(false);
  const [note, setNote] = useState({
    title: "",
    body: "",
    image: "",
    tags: "",
    description: "",
    privacy_level: "public" as "public" | "private" | "restricted",
  });

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      if (user) {
        setUser(user);
      } else {
        toast.error("You must be signed in to create a note.");
        router.push("/login");
      }
    };
    fetchUser();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      console.log(`Submitting for ${user?.id}`)
      const res = await fetch("/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...note,
          author: user?.id,
          tags: note.tags
            .split(",")
            .map((tag) => tag.trim())
            .filter((tag) => tag.length > 0),
           // Attach author (your user ID)
        }),
      });

      if (res.ok) {
        toast.success("Note created successfully!");
        router.push("/notes");
      } else {
        toast.error(`Error ${res.status}: Failed to create note`);
      }
    } catch (err) {
      toast.error("An unexpected error occurred.");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-white font-poppins min-h-screen bg-black">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 orange_gradient">
        Create a New Note
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <input
          type="text"
          name="title"
          value={note.title}
          onChange={(e) => setNote({ ...note, title: e.target.value })}
          required
          placeholder="Note Title"
          className="bg-transparent border border-orange-500 rounded-md px-4 py-2 outline-none shadow-md"
        />

        <textarea
          name="body"
          value={note.body}
          onChange={(e) => setNote({ ...note, body: e.target.value })}
          required
          placeholder="Your thoughts here..."
          rows={6}
          className="bg-transparent border border-orange-500 rounded-md px-4 py-2 outline-none shadow-md"
        />

        <input
          type="text"
          name="image"
          value={note.image}
          onChange={(e) => setNote({ ...note, image: e.target.value })}
          placeholder="Optional image URL"
          className="bg-transparent border border-orange-500 rounded-md px-4 py-2 outline-none shadow-md"
        />

        <input
          type="text"
          name="tags"
          value={note.tags}
          onChange={(e) => setNote({ ...note, tags: e.target.value })}
          placeholder="Tags (comma-separated)"
          className="bg-transparent border border-orange-500 rounded-md px-4 py-2 outline-none shadow-md"
        />

        <textarea
          name="description"
          value={note.description}
          onChange={(e) => setNote({ ...note, description: e.target.value })}
          placeholder="Short description (optional)"
          rows={2}
          className="bg-transparent border border-orange-500 rounded-md px-4 py-2 outline-none shadow-md"
        />

        <select
          value={note.privacy_level}
          onChange={(e) =>
            setNote({ ...note, privacy_level: e.target.value as any })
          }
          className="bg-black border border-orange-500 text-white rounded-md px-4 py-2 outline-none shadow-md"
        >
          <option value="public">Public</option>
          <option value="private">Private</option>
          <option value="restricted">Restricted</option>
        </select>

        <button
          type="submit"
          disabled={submitting}
          className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 self-center"
        >
          {submitting ? "Saving..." : "Save Note"}
        </button>
      </form>

      <div className="text-center text-sm mt-6">
        <Link href="/notes" className="underline hover:text-orange-500">
          ← Back to Notes
        </Link>
      </div>
    </div>
  );
}
