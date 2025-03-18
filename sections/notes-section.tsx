"use client";

import Image from "next/image"
import Link from "next/link";


export default function NotesSection() {

    return (
        <section 
            id="notes"
            className="page-section tbbstd_orange-gradient-bg  w-full flex  flex-col gap-2 p-10 lg:p-16 justify-center"
        >
        <section className="w-full flex flex-col font-irishgrover justify-center items-center gap-3">
            <section className="w-full flex text-center justify-center items-center flex-col  gap-4">
                    <span className="text-xl text-center leading-loose w-full md:w-2/3  md:text-2xl text-white font-normal font-kanit ">
                    This is my personal journal — a space where I think out loud, document my 
                    thought process while brainstorming, and leave notes on what I plan to build
                     next and how I intend to approach it.
                    </span>
                    <Link href="/notes" className="flex items-center bg-white bg-opacity-10 text-white mt-8 gap-2 hover:scale-[110%] hover:animate-swivvleH transition-all duration-800 ease-in-out shadow shadow-orange-900 p-3 md:p-4  rounded-full">
                        <Image 
                            src="/assets/images/b91e1131ca20f6369aa68d21cb3a8960.gif" 
                            className="object-contain rounded-full w-10 h-10" 
                            unoptimized
                            height={50}
                            width={50}
                            priority
                            alt="note"
                        /> 
                        <>
                            Read Notes
                        </>
                    </Link>
            </section>
        </section>
                
    </section>
    )
}