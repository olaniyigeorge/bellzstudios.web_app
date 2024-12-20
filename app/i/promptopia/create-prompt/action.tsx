"use server";
import { auth } from "@/services/auth"




export async function getUser() {
    const session = await auth()
    const user = session?.user
    return user
}
