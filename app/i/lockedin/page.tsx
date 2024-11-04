import Link from "next/link";



export default function LockedInLanding() {


    return (
        <section className="flex-col font-200 w-full flex items-center gap-4 ">
            <h1 className="w-full text-center tracking-wide py-3  text-3xl md:text-5xl lg:text-[60px] ">
                <h1 className="inline w-full">Build Better Habits!</h1> <br/>
               <span className="text-purple-500 ">Track Habit Forming Tasks 
                </span> {" "} and Celebrate Your Progress
            </h1> 

            <span className="w-full flex justify-center">
                <Link 
                    className="p-2 w-fit rounded-full  hover:bg-purple-500 hover:text-white flex justify-center border backdrop-blur-md bg-opacity-50" 
                    href="/dev-stories/lockedin"
                > 
                    Join the conversation on how to build better habits
                </Link>
            </span>
            
        </section>
    )
}