import Prompt from "@/models/prompt";
import { connectToDB } from "@/services/mongo_db";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const prompts = await Prompt.find({ creator: params.id }).populate("creator")

        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        console.log(error)
        return new Response("Failed to fetch prompts created by user", { status: 500 })
    }
} 