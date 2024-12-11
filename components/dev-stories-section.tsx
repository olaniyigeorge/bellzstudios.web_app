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
            <div className="w-full flex flex-col-reverse md:flex-row gap-4 justify-center items-center">
                <section className="w-full flex flex-col  gap-4">
                    <span className="text-xl md:text-2xl text-slate-200 text-center md:text-start font-medium w-full my-3 ">
                        Dev Stories is a series where I walk you through my thought process as I 
                        develop a solution to a common problem and try to validate my approach by 
                        putting it out there(blogging about it) and accepting feedback from you.
                    </span>
                    <section className="w-full flex justify-center md:justify-start">
                        <Link href="/dev-stories" className="hover:scale-[102%] ease-in-out border-purple-500 transition-all duration-800 shadow shadow-purple-500 p-3 md:p-4 dark:text-slate-200 border rounded-full">
                            Explore Stories
                        </Link>
                    </section>
                </section>

                <div className="w-full flex justify-center transform duration-900">
                    <Image
                        src={`/assets/images/81178b47a8598f0c81c4799f2cdd4057.gif`}
                        alt={`Dev Stories`}
                        unoptimized 
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