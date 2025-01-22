import NoteEntry from "@/models/notes.note-entry";
import { connectToDB } from "@/services/mongo_db";

export const GET = async (req: Request) => {
  console.log("Request: ", req.url)
  try {
    await connectToDB();
    const noteEntries = await NoteEntry.find({}).populate("author");

    return new Response(JSON.stringify(noteEntries), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching note entries:", error);
    return new Response("Failed to fetch all note entries", {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
export const POST = async (req: Request) => {
  try {
    await connectToDB();
    const data = await req.json();
    const newNoteEntry = new NoteEntry(data);
    await newNoteEntry.save();

    return new Response(JSON.stringify(newNoteEntry), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating note entry:", error);

    return new Response("Failed to create note entry", {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};