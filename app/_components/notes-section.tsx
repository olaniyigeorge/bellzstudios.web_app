"use client";

import Image from "next/image"
import Link from "next/link";


export default function NotesSection() {

    return (
        <section 
            id="notes"
            className="w-full borde flex flex-col gap-2"
        >
        <section className="w-full flex flex-col justify-center items-center gap-3">
            <div className="w-full flex flex-col md:flex-row gap-6 justify-center items-center">
                <section className="w-full flex flex-col  gap-4">
                    <span className="text-xl text- md:text-2xl text-slate-200 text-center md:text-start font-medium w-full my-3 ">
                        This is a journal for me where I think out loud. Write about my thought 
                        process when I'm brainstorming, leave notes about what I would build next 
                        and how I would go about it.

                    </span>
                    <section className="w-full flex justify-center md:justify-start">
                        <Link href="/notes" className="hover:scale-[102%] border-purple-500 transition-all duration-800 ease-in-out shadow shadow-purple-500 p-3 md:p-4 dark:text-slate-200 border rounded-full">
                            Read Notes
                        </Link>
                    </section>
                </section>

                <div className="w-full flex justify-center transform duration-900">
                    <Image
                        src={`/assets/images/notes.png`}
                        alt={`Dev Stories`} 
                        className="w-auto h-[500px] rounded-xl"
                        height={200}
                        width={200}
                        priority={true}
                    />
                </div>                
            </div>
        </section>
                
    </section>
    )
}