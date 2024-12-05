        "use client";

        import { useState } from "react";
        import Image from "next/image"
import Link from "next/link";

        type iSocial ={
            name: string;
            url: string;
            msg: string;
            social_logo: string;
        }
        export default function ContactSection() {
            const contacts: iSocial[] = [
                {
                    "name": "Twitter",
                    "url": "https://x.com/imoctborn",
                    "msg": "Follow and send a DM",
                    'social_logo': "/assets/images/socials/twit.png"
                },
                {
                    "name": "Email",
                    "url": "olaniyigeorge77@gmail",
                    "msg": "Email Me",
                    'social_logo': "/assets/images/socials/memoji.png"
                },
                {
                    "name": "LinkedIn",
                    "url": "https://linkedin.com/abelejolaniyi",
                    "msg": "Connect with me",
                    'social_logo': "/assets/images/socials/linkedin_pfp.jpeg"
                },
            ]
            const [activeSocial, setActiveSocial] = useState<iSocial>(contacts[0])
            return (
                <section 
                    id="contact"
                    className="w-full  flex flex-col gap-2 my-5 md:my-10 lg:my-16"
                >
                <section className="w-full  flex flex-col md:flex-row justify-between items-center gap-3 md:gap-5">
                    {contacts.map((contact)=> (
                        <div className="shadow-md hover:border-purple-600 w-full bg-gradient-to-br from-purple-800 via-purple-950 to-purple-950 dark:text-slate-200 rounded-xl items-center gap-5 p-3 md:p-5 flex flex-col">
                            <img 
                                src={contact.social_logo} 
                                alt="contact"
                                className="w-24 h-24 object-fill rounded-full " 
                            />
                            
                            <div className="mt-2 flex flex-col items-center">
                                <span className="text-purple-500"> 
                                {contact.msg}
                                </span>
                                <hr className=""/>
                                <Link href={contact.url} className="underline"> 
                                    {contact.name}
                                </Link>
                            </div>
                        </div>
                    ))}
                </section>
                            
                
                
            </section>
            )
        }