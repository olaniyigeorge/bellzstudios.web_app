"use client";

import Image from "next/image"
import Link from "next/link";


export default function DevStoriesSection() {

    return (
        <section 
            id="dev-stories"
            className="w-full borde flex flex-col gap-2"
        >
        <section className="w-full flex flex-col justify-center items-center gap-3">
            <div className="flex flex-col md:flex-row justify-center items-center">
                <section className="flex flex-col gap-4">
                    <span className="text-lg md:text-xl text-slate-200 text-center md:text-start font-medium w-full my-3 ">
                        Dev Stories is a series where I walk you through my thought process as I 
                        develop a solution to a common problem and try to validate my approach by 
                        putting it out there(blogging about it) and accepting feedback from you.
                    </span>
                    <section className="w-full">
                        <Link href="w-fit" className="border-purple-500 transition-all duration-800 ease-in-out shadow hover:shadow-purple-500 p-4 dark:text-slate-200 border rounded-full">
                            Expore Stories
                        </Link>
                    </section>
                </section>

                <div className="w-full flex justify-center transform duration-900">
                    <Image
                        src={`/assets/images/vision.png`}
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