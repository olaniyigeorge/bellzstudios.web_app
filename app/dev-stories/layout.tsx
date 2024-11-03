import React from "react"
import Link from "next/link"
import Image from "next/image"



export default function DevStorysLayout({children}: {children: React.ReactNode}) {

    return (
        <div className="w-full h-full gap-2 min-h-screen flex flex-col items-center dark:bg-slate-950 text-slate-200"> 
            <nav className="flex justify-between items-center px-3 md:px-5 py-3 container mx-auto">
                <h1 className="font-extrabold flex gap-2 items-center text-purple-600 shadow-lg text-3xl">
                     <Image
                        src="/assets/images/memoji.png"
                        className="object-contain rounded-full"
                        height={40}
                        width={40}
                        priority={true}
                        alt="product-link"
                    /> 
                    <Link href="/#dev-stories">BellzStudios</Link>
                </h1>
                <h1 className="font-medium">
                    <Link href="/dev-stories">...dev stories</Link>
                </h1>
            </nav>

            {children} 
        </div>
    )
}