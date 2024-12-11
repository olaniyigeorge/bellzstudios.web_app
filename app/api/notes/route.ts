import NoteEntry from "@/models/notes.note-entry";
import { connectToDB } from "@/utils/database";

export const GET = async (req: Request) => {
  console.log("Request: ", req.url)
  try {
    // Connect to the database
    await connectToDB();

    // Fetch all note entries
    const noteEntries = await NoteEntry.find({}).populate("author");

    // Return the data with a 200 status
    return new Response(JSON.stringify(noteEntries), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching note entries:", error);

    // Return an error response with a 500 status
    return new Response("Failed to fetch all note entries", {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
