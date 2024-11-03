import HabitTask from "@/models/lockedin.habit-task";
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

        if (id) {
            console.log("Getting this habit task")
            await connectToDB();
            const habit_task = await HabitTask.findById(id); // Use the extracted ID
            // const my_life_domains = await LifeDomain.find({ owner: id }); // Use the extracted ID
            // const my_life_domains = lfs // Use the extracted ID
            return new Response(JSON.stringify(habit_task), { status: 200 })
            //return new Response("Owner ID is required", { status: 400 });
        }

        // const my_life_domains = await LifeDomain.find({ owner: id }); // Use the extracted ID
        // const my_life_domains = lfs // Use the extracted ID
        return new Response("No filter param", { status: 400})

        
       
    } catch (error) {
        console.error(error);
        return new Response("Failed to fetch life domains created by user", { status: 500 });
    }
}
