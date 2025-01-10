import { auth } from "@/services/auth";



export async function getSession() {
    console.log("authenticating...")
    const session = await auth()

    return session

}