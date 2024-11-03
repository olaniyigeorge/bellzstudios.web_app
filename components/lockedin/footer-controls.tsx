"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function FooterControls() {
    const pathname = usePathname()
    console.log(pathname)
    


    return (
    <section className="w-full grid grid-cols-4 tems-center gap-3  justify-between sticky bottom-0 right-0 p-3 md:px-40">
            <Link  href="/i/lockedin/life-domains" className="footer-controls-btn ">
                LifeDomains
            </Link>
            <Link href="/i/lockedin/habit-tasks"className="footer-controls-btn ">
                Habit Tasks
            </Link>
            <Link href="/i/lockedin/scoreboard"className="footer-controls-btn ">
                Scoreboard
            </Link>
            <Link href="/i/lockedin/profile"className="footer-controls-btn ">
                Profile
            </Link>
    </section>
    )
}