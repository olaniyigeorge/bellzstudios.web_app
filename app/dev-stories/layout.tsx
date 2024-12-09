import React from "react"
import Link from "next/link"
import Image from "next/image"



export default function DevStorysLayout({children}: {children: React.ReactNode}) {

    return (
        <div className="w-full h-full gap-2 min-h-screen flex flex-col items-center text-slate-200 py-2"> 

            {children} 
        </div>
    )
}