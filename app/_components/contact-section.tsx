"use client";

import { useState } from "react";
import Image from "next/image"

type iSocial ={
    name: string;
    url: string;
    social_logo: string;
}
export default function ContactSection() {
    const contacts: iSocial[] = [
        {
            "name": "Twitter",
            "url": "https://x.com/imoctborn",
            'social_logo': "my-twitter.png"
        },
        {
            "name": "Email",
            "url": "olaniyigeorge77@gmail",
            'social_logo': "memoji.png"
        },
        {
            "name": "LinkedIn",
            "url": "https://linkedin.com/abelejolaniyi",
            'social_logo': "linkedin_pfp.jpeg"
        },
    ]
    const [aci, setAci] = useState<number>(0)
    const [activeSocial, setActiveSocial] = useState<iSocial>(contacts[0])
    return (
        <section 
            id="contact"
            className="w-full borde flex flex-col gap-2"
        >
        <section className="w-full flex flex-col justify-center items-center gap-3">
            <div className="flex flex-col gap-3  md:flex-row-reverse justify-center items-center">
                <h1 className="text-3xl md:text-7xl text-slate-200 text-center md:text-start font-bold w-full my-3 ">
                    {
                        activeSocial.name == 'Email' ? <>
                        Send me an <a href={activeSocial.url} target="_blank"  className="light:text-black dark:text-purple-500 underline">{ activeSocial.name }</a>
                        </>
                        :
                        <>
                        Reach out to me on <a href={activeSocial.url} target="_blank"  className="light:text-black dark:text-purple-500 underline">{ activeSocial.name }</a>
                        </>

                    }
                </h1>

                <div className="w-full flex justify-center transform  duration-900">
                    <a href={activeSocial.url} target="_blank" className="w-full flex justify-center md:justify-start object-contain">
                        <Image
                            src={`/assets/images/socials/${activeSocial.social_logo}`}
                            alt={`Olaniyi George's ${activeSocial.name} page`} 
                            className="w-auto  h-[500px] rounded-xl"
                            height={200}
                            width={200}
                            priority={true}
                        />
                    </a>
                </div>
                
                
            </div>
        </section>
                    
        <section className="w-full flex items-center justify-center container mx-auto px-2 md:px-10 lg:px-16">
            <div className="rounded-lg w-[80%] bg-white flex justify-between items-center ">
                {contacts.map((social) => (
                    <button 
                        onClick={() => setActiveSocial(social)}
                        key={social.url} 
                        className="p-2 rounded-lg w-full flex justify-center hover:bg-purple-500 hover:text-white"
                    >
                        {social.name}
                    </button>
                ))}
            </div>

        </section>
        
    </section>
    )
}