import { iNoteEntry } from "@/components/note-entry-card";

export default function Note() {
  const note: iNoteEntry = {
    _id: "hellworld",
    author: {
      _id: "fff2g3v5",
      username: "Olaniyi George",
      email: "laniyigeorge@gmail.com",
      image: "https://x.com",
    },
    body: "Hello World!",
    tags: ["software"],
    title: "datetime",
    privacy_level: "public",
    written_at: new Date("2023-12-09"), // Valid Date object
    updated_at: new Date("2023-12-10"), // Valid Date object
  };

  // Example list of notes
  const notes: iNoteEntry[] = [
    note, // Using the note defined above
    {
      _id: "anotherworld",
      author: {
        _id: "fff2g3v6",
        username: "Jane Doe",
        email: "janedoe@example.com",
        image: "https://example.com",
      },
      body: "This is another note!",
      tags: ["example", "typescript"],
      title: "Example Note",
      privacy_level: "public",
      written_at: new Date("2023-12-08"),
      updated_at: new Date("2023-12-09"),
    },
  ];

  return (
    <div className="max-w-[1440px] h-full flex flex-col justify-center items-center text-slate-200">
      <h1 className="w-1/2 p-2 md:p-4 text-5xl md:text-7xl tracking-tight font-extrabold items-center text-center">
        Look into my mind and <span className="orange_gradient">read my thoughts...</span>
      </h1>

      <section className="w-full justify-center  border-y h-full border-purple-800 grid gap-3 md:gap-4 grid-cols-2 p-2 md:p-4 md:w-2/3">
        {notes.map((letter) => (
          <div key={letter._id} className="border p-2 rounded-xl">
            <p className="font-medium">{letter.body}</p>
            <span className="w-full text-sm flex justify-end">
              {letter.written_at.toDateString()}
            </span>
          </div>
        ))}
      </section>
    </div>
  );
}
