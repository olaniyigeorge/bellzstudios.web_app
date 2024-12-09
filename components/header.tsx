    'use client'
    import Image from "next/image"
    import Link from "next/link"
    import { usePathname } from "next/navigation"

    export default function Header() {
        const pathname = usePathname()

        return (
            <header className="px-6 py-2 w-full bg-purple-950 bg-opacity-60 blur-backdrop-lg shadow sticky top-0 right-0 z-3000 ">
                <nav className="flex justify-between items-center px-3 md:px-5 container mx-auto">
                    <Link 
                        href="/"
                        className="font-extrabold flex gap-2 items-center text-purple-600 text-3xl">
                        <Image
                            src="/assets/images/memoji.png"
                            className="object-contain rounded-full"
                            height={40}
                            width={40}
                            priority={true}
                            alt="product-link"
                        /> 
                        <Link href="/" className="text-2xl text-white font-bold">B-Stdio</Link>
                    </Link>
                    <span className="font-medium flex justify-end items-center gap-2">
                        {
                            pathname.includes("/dev-stories") && 
                                <h1 className="font-medium">
                                    <Link href="/dev-stories">...dev stories</Link>
                                </h1>
                        
                        }
                        <a
                        href="mailto:olaniyigeorge77@gmail.com"
                        className="bg-white text-black px-6 py-2 rounded-full hover:bg-purple-700 hover:text-white transition-all duration-300"
                        >
                        Hire Me
                        </a>
                    </span>
                </nav>
            </header>
        )
    }