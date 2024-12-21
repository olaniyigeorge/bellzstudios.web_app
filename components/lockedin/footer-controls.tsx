"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChartBarSquareIcon, CheckCircleIcon, HomeIcon, UserIcon } from "@heroicons/react/24/outline";

export default function FooterControls() {
    const pathname = usePathname();

    // Function to determine if the current pathname starts with the link
    const isActive = (link: string) => pathname.startsWith(link);

    return (
        <section className="w-full z-10 grid grid-cols-4 items-center gap-3 justify-between sticky bottom-0 bg-opacity-30 right-0 p-3 md:px-40 bg-white shadow-md">
            <Link
                href="/i/lockedin/life-domains"
                className={`${
                    isActive('/i/lockedin/life-domains') 
                        ? 'text-green-600 hover:bg-green-100' 
                        : 'text-gray-600 hover:text-green-600'
                } flex items-center justify-center p-2 rounded-md transition-colors duration-300`}
            >
                <HomeIcon className="h-6 w-6 mr-2" /> {/* Add Home Icon */}
                Life Domains
            </Link>
            <Link
                href="/i/lockedin/habit-tasks"
                className={`${
                    isActive('/i/lockedin/habit-tasks') 
                        ? 'text-green-600 hover:bg-green-100' 
                        : 'text-gray-600 hover:text-green-600'
                } flex items-center justify-center p-2 rounded-md transition-colors duration-300`}
            >
                <CheckCircleIcon className="h-6 w-6 mr-2" /> {/* Add CheckCircle Icon */}
                Habit Tasks
            </Link>
            <Link
                href="/i/lockedin/scoreboard"
                className={`${
                    isActive('/i/lockedin/scoreboard') 
                        ? 'text-orange-500 hover:bg-orange-100' 
                        : 'text-gray-600 hover:text-orange-500'
                } flex items-center justify-center p-2 rounded-md transition-colors duration-300`}
            >
                <ChartBarSquareIcon className="h-6 w-6 mr-2" /> {/* Add ChartSquareBar Icon */}
                Scoreboard
            </Link>
            <Link
                href="/i/lockedin/profile"
                className={`${
                    isActive('/i/lockedin/profile') 
                        ? 'text-orange-500 hover:bg-orange-100' 
                        : 'text-gray-600 hover:text-orange-500'
                } flex items-center justify-center p-2 rounded-md transition-colors duration-300`}
            >
                <UserIcon className="h-6 w-6 mr-2" /> {/* Add User Icon */}
                Profile
            </Link>
        </section>
    );
}
