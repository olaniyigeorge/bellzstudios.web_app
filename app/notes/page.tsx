
import NoteEntryCardList from "@/components/notes-feed";

export default function Note() {

  return (
    <div className="max-w-[1440px] h-full flex flex-col justify-center items-center text-white font-irishgrover">
      <h1 className="w-3/4 md:w-1/2 p-2 md:p-4 text-[45px] md:text-7xl tracking-tighter font-extrabold items-center text-center">
        Look into my mind and <span className="orange_gradient">read my thoughts...</span>
      </h1>

      <NoteEntryCardList />

    </div>
  );
}
