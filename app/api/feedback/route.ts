import Feedback from "@/models/feedback";
import { connectToDB } from "@/services/mongo_db";
import { NextResponse } from "next/server";





export async function POST(req: Request) {
    const { name, email, message } = await req.json();

    try {
        await connectToDB();
        const feedback = new Feedback({ name, email, message });
        await feedback.save();


        return NextResponse.json(
            { message: "Feedback sent" },
            { status: 201}
        )

    } catch(error) {
        console.error(error);
        return NextResponse.json({
            status: 500,
            json: { error: "An error occurred while sending feedback" }
        })
    }

}