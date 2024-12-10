import "@/styles/globals.css";
import FooterControls from "@/components/lockedin/footer-controls";
import Link from "next/link";
import Auth from "@/components/sign-in";
import { auth, signIn } from "@/utils/auth";
import Image from "next/image"


export default async function LockedInLayout({children}: {children: React.ReactNode}) {
    const session = await auth()
    return (
        <div className="text-gray-800  relative bg-[url('/assets/images/gridd.png')] backdrop-blur bg-slate-50 w-full min-h-screen h-full flex flex-col items-center justify-between">
            <div className="lockedin_bg_gradient " />
            <nav className="flex sticky z-10 top-0 right-0 w-full items-center justify-between p-2 md:p-6 lg:p-8">
                <Link href="/i/lockedin">
                <h1 className="text-3xl font-extrabold">Locked<span className="text-white px-1 rounded-md bg-purple-500  border-gray-800">In</span></h1>
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
                        <Link href='/i/lockedin/profile'>
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

            <section className="w-full z-10 max-w-[1200px] flex-1 flex-grow md:w-[90%] lg:w-[65%] flex justify-center ">
                {children}
            </section>

            <FooterControls />
        </div>
    )
}