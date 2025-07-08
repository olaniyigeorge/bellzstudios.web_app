"use client";
import SmoothScrollButton from "@/components/smoothscroll";
import Image from "next/image";
import Link from "next/link";

type iSocial = {
    name: string;
    url: string;
    msg: string;
    social_logo: string;
};

export default function ContactSection() {
    const contacts: iSocial[] = [
        {
            name: "Twitter",
            url: "https://x.com/imoctborn",
            msg: "Follow and send a DM",
            social_logo: "/assets/images/socials/twit.png",
        },
        {
            name: "Email",
            url: "mailto:olaniyigeorge77@gmail",
            msg: "Email Me",
            social_logo: "/assets/images/socials/memoji.png",
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/abeleje-olaniyi",
            msg: "Connect with me",
            social_logo: "https://avatars.githubusercontent.com/u/27226623?v=4",
        },
    ];

    return (
        <section
            id="contact"
            className="page-section bg-[#090700]  w-full flex flex-col gap-10 md:gap-16 lg:gap-20"
        >
            <h1 className=" w-full flex orange_gradient font-irishgrover hover:scale-[103%] uppercase hover:tracking-wide font-extrabold justify-center text-5xl tracking-tighter text-center transition-all duration-700 ease-in-out">
                Reach Out To Me
            </h1>
            <section className="w-full flex flex-col font- md:flex-row justify-between items-center gap-3 md:gap-5 lg:gap-8">
                {contacts.map((contact) => (
                    <div
                        key={contact.name}
                        className="shadow shadow-[#090700]  w-full bg-black text-white rounded-2xl items-center gap-5 p-3 md:p-5 flex flex-col"
                    >
                        <Image
                            src={contact.social_logo}
                            alt="contact"
                            width={200}
                            height={200}
                            className="w-24 h-24 object-fill flex justify-center rounded-full"
                        />

                        <div className="mt-2 flex flex-col items-center">
                            <span className="orange-gradient font-irishgrover">
                                {contact.msg}
                            </span>
                            <hr className="" />
                            <Link
                                href={contact.url}
                                target="_blank"
                                className="font-semibold underline text-white font-bebas-neue-bold"
                            >
                                {contact.name}
                            </Link>
                        </div>
                    </div>
                ))}
            </section>

            <span className="flex gap-2 w-full font-kanit justify-center item-center text-white  mt-12">
                <SmoothScrollButton pixels={400} className="w-full hover:animate-swivvleV">
                    <Link
                        href={"#dev-stories"}
                        className="flex flex-col gap-1 underline text-white items-center"
                    >
                        <>Projects & Dev Stories</>
                        <Image 
                            src="/assets/icons/white_line.png" 
                            className="w-[150px] h-[15px]"
                            width={4000}
                            height={4000}
                            priority={true}
                            alt="down" 
                        />
                    </Link>
                </SmoothScrollButton>
                
            </span>
        </section>
    );
}