"use client";

import { ArrowDownIcon } from "@heroicons/react/24/outline";
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
                <section className="w-full flex flex-col  gap-4 font-irishgrover">
                    <span className="text-xl md:text-2xl text-slate-200 font-irishgrover text-center md:text-start font-medium w-full my-3 ">
                    Dev Stories is a series where I share my thought process as I develop 
                    products to tackle well-documented problems. I invite feedback and aim 
                    to validate both my approach and yours by openly discussing and blogging 
                    about the journey.
                    </span>
                    <section className="w-full flex gap-2  justify-center md:justify-start md:gap-8">
                        <Link href="/dev-stories" className="hover:scale-[102%] ease-in-out border-orange-500 shadow shadow-orange-500  transition-all duration-800 shadow shadow-orange-500 p-3 md:p-4 dark:text-slate-200 border rounded-full">
                            Explore Stories
                        </Link>
                        <Link href={"#notes"} className="rounded-full text-white w-fit flex gap-2 items-center px-4 py-2 ">
                            <>Notes</>
                            <ArrowDownIcon className="w-4 h-8 hover:animate-swivvleV text-white font-medium" />
                        </Link>
                        
        
                    </section>
                </section>

                <div className="w-full flex justify-center transform duration-900">
                    <Image
                        src={`/assets/images/81178b47a8598f0c81c4799f2cdd4057.gif`}
                        alt={`Dev Stories`}
                        unoptimized 
                        className="w-auto h-[500px] z-0 rounded-xl"
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