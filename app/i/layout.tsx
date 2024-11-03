import "@/styles/globals.css";
import FooterControls from "@/components/lockedin/footer-controls";
import Link from "next/link";
import Auth from "@/components/sign-in";
import { auth, signIn } from "@/utils/auth";
import Image from "next/image"


export default async function LockedInLayout({children}: {children: React.ReactNode}) {
    const session = await auth()
    return (
        <div className="text-white w--full h-screen flex flex-col items-center justify-between">
          
            <nav className="flex w-full items-center justify-between p-2 md:p-6 lg:p-10">
                <Link href="/i/lockedin">
                <h1 className="text-3xl font-extrabold">Locked<span className="text-purple-500 px-1 rounded-md border">In</span></h1>
                </Link>
                <span className="hidden sm:flex gap-2 items-center">
                    {!session ?
                        <form action={async () => {
                            "use server"
                            await signIn("google")
                            }}
                            className=""
                        >
                            <button className="rounded-full p-2 text-white border" 
                            type="submit">Sign In </button>
                        </form>
                        : 
                    ""}
                    {session?.user ?
                        <Link href='/home/profile'>
                        <Image
                        src={session!.user.image || '/assets/images/logo.svg'}
                        width={37}
                        height={37}
                        className='rounded-full'
                        alt='profile'
                        />
                    </Link>
                    : <></>
                    }  
                </span>
            </nav> 

            <section className="w-full flex-1 md:w-[90%] lg:w-[65%] flex justify-center ">
                {children}
            </section>
            <FooterControls />
        </div>
    )
}