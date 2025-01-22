
import NoteEntryCardList from "@/components/notes-feed";

export default function Note() {

  return (
    <div className="max-w-[1440px] h-full flex flex-col justify-center items-center text-white font-">
      <h1 className="hero_title">
        Look into my mind and <span className="orange_gradient">read my thoughts...</span>
      </h1>

      <NoteEntryCardList />

    </div>
  );
}
