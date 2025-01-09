'use client'

import Link from "next/link";
import { usePathname } from "next/navigation"

export default function Footer() {
    const pathname = usePathname()

    if (pathname == "/" || pathname == "/notes" || pathname.startsWith("/dev-stories"))   return (
        <footer className="p-6 w-full text-center blur-backdrop-sm  bg-black  text-white">
            © {new Date().getFullYear()} <Link className="orange-gradient font-medium" href="/" > Bellz Studio</Link>. All Rights Reserved.
        </footer>
    )

    return null;
}