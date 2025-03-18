"use client";

import SmoothScrollButton from "@/components/smoothscroll";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image"
import Link from "next/link";


export default function DevStoriesSection() {

    return (
        <section 
            id="dev-stories"
            className="page-section w-full flex flex-col gap-2 bg-black "
        >
        <section className="w-full flex flex-col md:flex-row items-center gap-6">
            <section className="w-full flex flex-col  gap-4 font-irishgrover">
                <span className="text-xl md:text-2xl text-white font-kanit text-center md:text-start font-normal w-full my-3 ">
                Dev Stories is a series where I share my thought process as I develop 
                products to tackle well-documented problems. I invite feedback and aim 
                to validate both my approach and yours by openly discussing and blogging 
                about the journey.
                </span>
                <section className="w-full flex gap-2 text-white justify-center md:justify-start md:gap-8">
                <Link href="/dev-stories" className="hover:scale-[102%] ease-in-out border-[#F9890A] shadow shadow-[#F9890A]  transition-all duration-800 p-3 md:p-4 text-white border rounded-full">
                    Explore Stories
                </Link>
                
                <SmoothScrollButton pixels={400} className="rounded-full orange-gradient w-fit flex gap-2 items-center px-4 py-2">
                   
                        <>Notes</>
                        <ArrowDownIcon className="w-4 h-8 hover:animate-swivvleV text-[#F9890A]  font-medium" />
                
                </SmoothScrollButton>


                </section>
            </section>

            <div className="w-full flex justify-center ">
            <Image
                src={`/assets/images/81178b47a8598f0c81c4799f2cdd4057.gif`}
                alt={`Dev Stories`}
                unoptimized 
                className="w-auto min-h-[500px] z-0 rounded-xl"
                height={450}
                width={450}
                priority={true}
                />
            </div>                
            
        </section>
                
    </section>
    )
}