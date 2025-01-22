import ProductTester from "@/models/waitlist";
import { connectToDB } from "@/services/mongo_db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();
    const { email, product, discovery_location } = body;

    if (!email) {
        return NextResponse.json(
            { error: "Add email to request", body: null },
            { status: 400 }
        );
    }

    console.log({ email, product, discovery_location })
    try {
        await connectToDB();

        const newTester = new ProductTester({
            email,
            telegram_id: null,
            product,
            discovery_location,
        });

        await newTester.save();

        return NextResponse.json(
            { body: newTester },
            { status: 201 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}