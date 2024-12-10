"use client";

import Image from "next/image"
import Link from "next/link";


export default function NotesSection() {

    return (
        <section 
            id="notes"
            className="w-full flex pb-10 md:pb-0  flex-col gap-2 my-5 md:my-10 lg:my-16"
        >
        <section className="w-full flex flex-col justify-center items-center gap-3">
            <section className="w-full flex text-center justify-center items-center flex-col  gap-4">
                    <span className="text-xl text-center w-full md:w-2/3  md:text-2xl text-slate-200 text-center font-medium w-full ">
                        This is a journal for me where I think out loud. Write about my thought 
                        process when I&apos;m brainstorming, leave notes about what I would build next 
                        and how I would go about it.

                    </span>
                    <Link href="/notes" className="flex items-center gap-2 hover:shadow-purple-600 hover:border-purple-400 border-white transition-all duration-800 ease-in-out shadow shadow-white p-3 md:p-4 dark:text-slate-200 border rounded-full">
                            <Image 
                                src="/assets/images/b91e1131ca20f6369aa68d21cb3a8960.gif" 
                                className="object-full rounded-full w-10 h-10" 
                                height={200}
                                width={200}
                                priority
                                alt="olaniyigeorge_linkedin"
                            /> 
                            <>Read Notes</>
                    </Link>
            </section>
        </section>
                
    </section>
    )
}