import { connectToDB } from "@/utils/database"
import Prompt from "@/models/prompt"


export const POST = async(req: Request, res: Response) => {
    const { userId, prompt, tag} = await req.json()
    try {
        await connectToDB()
        const newPrompt = new Prompt({
            creator: userId,
            tag: tag,
            prompt: prompt
        })
        await newPrompt.save()

        return new Response(JSON.stringify(newPrompt), {status: 201})
    } catch(error) {
        console.log(error)
        return new Response("Failed to create prompt", {status: 500})
    }
}