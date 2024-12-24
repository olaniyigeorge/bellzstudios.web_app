'use client'

import Link from "next/link";
import { usePathname } from "next/navigation"

export default function Footer() {
    const pathname = usePathname()

    if (pathname == "/" || pathname == "/notes" || pathname.startsWith("/dev-stories"))   return (
        <footer className="p-6 w-full text-center blur-backdrop-sm   bg-opacity-60 bg-black absolute bottom-0 right-0 text-white">
            © {new Date().getFullYear()} <Link className="text-purple-600 font-medium" href="/" > Bellz Studio</Link>. All Rights Reserved.
        </footer>
    )

    return null;
}