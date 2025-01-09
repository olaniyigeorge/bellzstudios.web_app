import { auth } from "@/services/auth";



export async function getSession() {
    const session = await auth()

    return session

}