import HabitTask from "@/models/lockedin.habit-task";
import HabitTaskEntry from "@/models/lockedin.task-entry";
import { connectToDB } from "@/utils/database";

export async function GET(request: Request) {

    try {
       // Parse the URL to get query parameters
        const url = new URL(request.url);
        const filter : 'owner' | 'id' | null = null
        const owner = url.searchParams.get("owner"); // Extract the owner from query parameters
        const id = url.searchParams.get("id"); // Extract the owner from query parameters

        if (owner) {
            console.log("Getting habit tasks from this user")
            await connectToDB();
            const my_habit_tasks = await HabitTask.find({ filter}); // Use the extracted ID

            // const my_life_domains = await LifeDomain.find({ owner: id }); // Use the extracted ID
            // const my_life_domains = lfs // Use the extracted ID
            return new Response(JSON.stringify(my_habit_tasks), { status: 200 })
        //     return new Response("Owner ID is required", { status: 400 });
        }
        // 

        if (id) {
            console.log("Getting this habit task");
            const habit_task = await HabitTask.findById(id); // Get the habit task by ID

            if (!habit_task) {
                return new Response("Habit task not found", { status: 404 });
            }

            // Fetch entries for the habit task
            const entries = await HabitTaskEntry.find({ habit: id }); // Fetch entries for the habit task
            
            // Create a plain object with the habit task details and entries
            const habitTaskWithEntries = {
                ...habit_task.toObject(), // Convert Mongoose document to plain object
                entries, // Add the entries array
            };

            console.log("Entries: ", habitTaskWithEntries)
            return new Response(JSON.stringify(habitTaskWithEntries), { status: 200 });
        }

        // const my_life_domains = await LifeDomain.find({ owner: id }); // Use the extracted ID
        // const my_life_domains = lfs // Use the extracted ID
        return new Response("No filter param", { status: 400})

        
       
    } catch (error) {
        console.error(error);
        return new Response("Failed to fetch life domains created by user", { status: 500 });
    }
}
