'use client'
import { getSession } from "@/app/auth/action"
import { iUser } from "@/app/i/market/p/add/page"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"



export default function Header() {
    const pathname = usePathname()
    const [ user, setUser ] = useState<iUser | undefined>(undefined)

    useEffect(() => {
        const fetchSession = async () => {
            const session = await getSession();
            console.log(session);
            if (session && session.user) {
                setUser({ 
                    id: session.user.id, 
                    name: session.user.name,
                    email: session.user.email,
                    image: session.user.image
                });
            }
        };
        fetchSession();
    }, []);

    if (pathname == "/" || pathname == "/notes" || pathname.startsWith("/dev-stories")) return (
        <header className="font-irishgrover px-6 py-2 w-full bg-black max-w-[1440px] bg-opacity-50 shadow sticky top-0 right-0 z-3000 ">
            <nav className="flex justify-between items-center px-3 md:px-5 container mx-auto">
                <Link 
                    href="/"
                    className="font-extrabold  flex gap-2 items-center text-purple-600 text-3xl">
                    <Image
                        src="/assets/images/bellzstudio.png"
                        className="object-contain rounded-full"
                        height={40}
                        width={40}
                        priority={true}
                        alt="product-link"
                    /> 
                    <h1 className="text-sm hidden tracking-tighter font-irishgrover font-extrabold uppercase md:flex text-white ">Bellz Studio</h1>
                </Link>
                <span className="font-medium flex justify-end items-center gap-2">
                    {
                        pathname.includes("/dev-stories") && 
                            <h1 className="font-medium">
                                <Link href="/dev-stories">...dev stories</Link>
                            </h1>
                    
                    }
                    {
                        pathname.includes("/notes") && 
                            <span className="flex items-center "> 
                                {user&&
                                    <Link href="/"> Write </Link>
                                }
                                <h1 className="font-medium">
                                    <Link href="/#notes">...notes</Link>
                                </h1>
                            </span>
                    
                    }
                    <a
                    href="mailto:olaniyigeorge77@gmail.com"
                    className="orange-gradient-bg font-kanit text-sm text-white px-6 py-2 rounded-full text-white  font-medium transition-all duration-300"
                    >
                    Hire Me
                    </a>
                </span>
            </nav>
        </header>  
    );

    return null;
}