'use client'

import { usePathname } from "next/navigation"

export default function Footer() {
    const pathname = usePathname()

    if (pathname == "/" || pathname == "/notes")  return (
        <footer className="p-6 w-full text-center blur-backdrop-sm   bg-opacity-80 bg-black absolute bottom-0 right-0 text-white">
            © {new Date().getFullYear()} Bellz Studio. All Rights Reserved.
        </footer>
    )

    return null;
}