
import NoteEntryCardList from "@/components/notes-feed";
import Typer from "@/components/typer";

export default function Note() {
  const titles = [
    "Raw Thoughts. Real Learnings. Ongoing Growth.",
    "Unfiltered Notes on What I’m Learning, Building, and Becoming.",
    "Ideas, Lessons, and Mental Downloads — As I Grow in Tech and Life.",
    "Notes From the Journey — Code, Clarity, and Everything Between.",
    "Work-in-Progress Thoughts From a Work-in-Progress Mind.",
    "Thinking Out Loud — Notes on Craft, Code, and Clarity.",
    "Where My Thoughts Meet the Page — Lessons, Ideas, and Reflections."
  ]
  
  return (
    <div className="max-w-[1440px] bg-black h-full flex flex-col justify-center items-center text-white font-">
      <h1 className="hero_title">
        Look into my mind and <span className="orange_gradient">read my thoughts...</span>
      </h1>

      <Typer 
        id='hero' 
        delay={10}
        loop={true}
        className="font-kanit text-[12px] md:text-[18px] text-white  " 
        words={titles}
      /> 

      <NoteEntryCardList />

    </div>
  );
}
