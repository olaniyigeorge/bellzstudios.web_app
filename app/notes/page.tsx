import NoteEntryCardList from "@/components/notes-feed";
import Typer from "@/components/typer";
import Link from "next/link";

export default function Note() {
  const titles = [
    "Raw Thoughts. Real Learnings. Ongoing Growth.",
    "Unfiltered Notes on What I’m Learning, Building, and Becoming.",
    "Ideas, Lessons, and Mental Downloads — As I Grow in Tech and Life.",
    "Notes From the Journey — Code, Clarity, and Everything Between.",
    "Work-in-Progress Thoughts From a Work-in-Progress Mind.",
    "Thinking Out Loud — Notes on Craft, Code, and Clarity.",
    "Where My Thoughts Meet the Page — Lessons, Ideas, and Reflections."
  ];

  return (
    <div className="max-w-[1440px] bg-black min-h-screen flex flex-col justify-center items-center text-white font-poppins px-4 py-10">
      <h1 className="hero_title ">
        Look into my mind and{' '}
        <Link href="/notes/new" className="orange_gradient underline hover:opacity-90 transition duration-300">
          read my thoughts...
        </Link>
      </h1>

      <Typer
        id="hero"
        delay={10}
        loop={true}
        className="text-[11px] md:text-[18px] text-orange-100 text-center mt-2"
        words={titles}
      />

      <div id="note-entries" className="w-full mt-8">
        <NoteEntryCardList />
      </div>
    </div>
  );
}
