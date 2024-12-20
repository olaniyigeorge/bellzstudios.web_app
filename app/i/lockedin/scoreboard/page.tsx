import HabitTaskChartCard, { eHabitTask } from "@/components/lockedin/habit-task-chart-card";
import { auth, signIn } from "@/services/auth";

export default async function ScoreboardPage() {
    const session = await auth()
    if (!session?.user) {
        return (
        <div className="p-10 w-full justify-center flex rounded-xl font-extrabold text-3xl">
            <form action={async () => {
                "use server"
                await signIn("google")
                }}
                className=""
            >
                <button className="rounded-full p-2 text-white border" 
                type="submit">Sign In </button>
            </form>
        </div>)
    }

    let habitTasks: eHabitTask[] = []
    try {
        const response = await fetch(`${process.env.DOMAIN}/api/lockedin/habit-tasks?owner=${session.user.id}`, {
            method: "GET",
        });
        habitTasks = await response.json();
    } catch(error){
        console.log(error)
        habitTasks = []
    }


    return ( <div className="w-full justify-start overflow-auto">
        <h1 className=" font-extrabold text-3xl"> Scoreboard</h1>
        <section className="w-full my-4 gap-2 grid grid-cols-1">
               {habitTasks.map((lfd: eHabitTask) => (
                <div key={lfd._id} className="w-full flex flex-col  ">
                   <HabitTaskChartCard {...lfd}/>
                </div>
               ))}
        </section>
    </div>)
}