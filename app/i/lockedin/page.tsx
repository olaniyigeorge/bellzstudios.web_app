import Link from "next/link";



export default function LockedInLanding() {


    return (
        <section className="flex-col  w-full flex items-center gap-4 ">
            <h1 className="w-full mt-8 md:mt-0 font-medium text-center tracking-wide py-3  text-5xl md:text-5xl lg:text-[60px] ">
                <h1 className="inline w-full">Build Better Habits!</h1> <br/>
               <span className="orange_gradient font-semibold ">Track Habit Forming Tasks 
                </span> {" "} and Celebrate Your Progress
            </h1> 

            <span className="w-full flex gap-1 justify-center ">
                <Link 
                    className="underline" 
                    href="/dev-stories/lockedin"
                > 
                    Join the conversation {" "}
                </Link> {" "}
                on how to build better habits
            </span>
            
        </section>
    )
}