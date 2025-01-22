    "use client";

    import ArrowDownIcon from "@heroicons/react/24/outline/ArrowDownIcon";
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
                className="page-section bg-white w-full flex flex-col gap-10 md:gap-16 lg:gap-20"
            >
                <h1 className=" w-full flex orange-gradient font-bebas-neue-bold uppercase font-extrabold justify-center text-5xl tracking-tighter text-center">
                    Reach Out To Me
                </h1>
                <section className="w-full flex flex-col md:flex-row justify-between items-center gap-3 md:gap-5 lg:gap-8">
                    {contacts.map((contact) => (
                        <div
                            key={contact.name}
                            className="shadow shadow-slate-600 border-2 border-white w-full bg-black text-white rounded-2xl items-center gap-5 p-3 md:p-5 flex flex-col"
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

                <span className="flex gap-2 w-full irishgrover justify-center item-center mt-12">
                    <Link
                        href={"#dev-stories"}
                        className="shadow-lg text-white bg-black border-2 border-orange-500 rounded-full w-fit flex gap-2 font-medium items-center px-4 py-2"
                    >
                        <>Projects & Dev Stories</>
                        <ArrowDownIcon className="w-4 h-8 hover:animate-swivvleV text-white font-medium" />
                    </Link>
                </span>
            </section>
        );
    }