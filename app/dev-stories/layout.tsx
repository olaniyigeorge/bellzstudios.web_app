import React from "react"
import Link from "next/link"




export default function DevStorysLayout({children}: {children: React.ReactNode}) {

    return (
        <div className="w-full h-full gap-2 min-h-screen flex flex-col items-center dark:bg-slate-950 text-slate-200"> 
            <nav className="flex justify-between items-center px-3 md:px-5 py-3 container mx-auto">
                <h1 className="font-extrabold text-purple-600 shadow-lg text-4xl">
                    <Link href="/">BellzStudios</Link>
                </h1>
                <h1 className="font-medium">
                    <Link href="/dev-stories">...dev stories</Link>
                </h1>
            </nav>

            {children} 
        </div>
    )
}