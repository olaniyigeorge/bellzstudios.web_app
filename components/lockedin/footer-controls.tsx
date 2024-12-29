"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChartBarSquareIcon, CheckCircleIcon, HomeIcon, UserIcon } from "@heroicons/react/24/outline";

const buttons = [
    {
        href: "/i/lockedin/life-domains",
        icon: HomeIcon,
        label: "Life Domains",
        activeClass: "text-green-600 hover:bg-green-100",
        inactiveClass: "text-gray-600 hover:text-green-600"
    },
    {
        href: "/i/lockedin/habit-tasks",
        icon: CheckCircleIcon,
        label: "Habit Tasks",
        activeClass: "text-green-600 hover:bg-green-100",
        inactiveClass: "text-gray-600 hover:text-green-600"
    },
    {
        href: "/i/lockedin/scoreboard",
        icon: ChartBarSquareIcon,
        label: "Scoreboard",
        activeClass: "text-orange-500 hover:bg-orange-100",
        inactiveClass: "text-gray-600 hover:text-orange-500"
    },
    {
        href: "/i/lockedin/profile",
        icon: UserIcon,
        label: "Profile",
        activeClass: "text-orange-500 hover:bg-orange-100",
        inactiveClass: "text-gray-600 hover:text-orange-500"
    }
];

export default function FooterControls() {
    const pathname = usePathname();

    // Function to determine if the current pathname starts with the link
    const isActive = (link: string) => pathname.startsWith(link);

    return (
        <section className="w-full z-10 grid grid-cols-4 items-center gap-3 justify-between sticky bottom-0 bg-transparent right-0 p-3 md:px-40  shadow-md">
            {buttons.map((button) => (
                <Link
                    key={button.href}
                    href={button.href}
                    className={`${
                        isActive(button.href) 
                            ? button.activeClass 
                            : button.inactiveClass
                    } flex items-center justify-center p-2 rounded-md transition-colors duration-300`}
                >
                    <button.icon className="h-6 w-6 font-medium" />
                    <span className="hidden md:flex">{button.label}</span>
                </Link>
            ))}
        </section>
    );
}
