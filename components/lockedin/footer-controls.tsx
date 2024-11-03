"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function FooterControls() {
    const pathname = usePathname();

    // Function to determine if the current pathname starts with the link
    const isActive = (link: string) => pathname.startsWith(link);

    return (
        <section className="w-full grid grid-cols-4 items-center gap-3 justify-between sticky bottom-0 right-0 p-3 md:px-40">
            <Link
                href="/i/lockedin/life-domains"
                className={`${isActive('/i/lockedin/life-domains') ? 'active-footer-controls-btn' : 'footer-controls-btn'}`}
            >
                Life Domains
            </Link>
            <Link
                href="/i/lockedin/habit-tasks"
                className={`${isActive('/i/lockedin/habit-tasks') ? 'active-footer-controls-btn' : 'footer-controls-btn'}`}
            >
                Habit Tasks
            </Link>
            <Link
                href="/i/lockedin/scoreboard"
                className={`${isActive('/i/lockedin/scoreboard') ? 'active-footer-controls-btn' : 'footer-controls-btn'}`}
            >
                Scoreboard
            </Link>
            <Link
                href="/i/lockedin/profile"
                className={`${isActive('/i/lockedin/profile') ? 'active-footer-controls-btn' : 'footer-controls-btn'}`}
            >
                Profile
            </Link>
        </section>
    );
}
