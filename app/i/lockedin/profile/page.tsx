import { iLifeDomain } from "@/components/lockedin/forms/life-domain-form"
import { iHabitTask } from "@/components/lockedin/habit-task-card"
import { auth, signIn } from "@/services/auth"

export default async function ProfilePage() {
    const session = await auth()
    if (!session?.user) {
        return (
        <div className="flex justify-center items-center h-screen">
            <form
                action={async () => {
                    "use server"
                    await signIn("google")
                }}
                className="text-center"
            >
                <button className="px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300">
                    Sign In with Google
                </button>
            </form>
        </div>)
    }
    
    let habitTasks: iHabitTask[] = []
    try {
        const response = await fetch(`${process.env.DOMAIN}/api/lockedin/habit-tasks?owner=${session.user.id}`, {
            method: "GET",
        });
        habitTasks = await response.json();
    } catch (error) {
        console.log(error)
        habitTasks = []
    }

    let lifeDomains: iLifeDomain[] = []
    try {
        const response = await fetch(`${process.env.DOMAIN}/api/lockedin/life-domains?owner=${session.user.id}`, {
            method: "GET",
        });
        lifeDomains = await response.json();
    } catch (error) {
        console.log(error)
        lifeDomains = []
    }

    return (
        <div className="w-full flex flex-col p-6 md:p-10 max-w-md mx-auto border rounded-xl shadow-md bg-white bg-opacity-60">
            {/* Profile Picture */}
            <div className="flex justify-center mb-4">
                <img 
                    src={session.user.image || '/default-profile-pic.png'} 
                    alt="Profile Picture"
                    className="w-24 h-24 rounded-full border-2 border-green-600"
                />
            </div>

            <h1 className="text-3xl font-semibold text-center">
                Hi, <span className="text-green-600">{session.user.name}</span>
            </h1>
            <span className="block text-sm text-gray-600 text-center mt-2">{session.user.email}</span>
            
            <p className="mt-4 text-center text-gray-700">
                Welcome to your profile!
            </p>

            <div className="mt-6 text-center text-gray-800">
                <p>You are currently tracking {habitTasks.length} habit {habitTasks.length > 1 ? "tasks" : "task"}</p>
                <p>You are currently working to improve {lifeDomains.length} {lifeDomains.length > 1 ? "aspects" : "aspect"} of your life</p>
            </div>
        </div>
    )
}
