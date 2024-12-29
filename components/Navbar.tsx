import Auth from "@/components/sign-in";
import { auth } from "@/services/auth";
import Link from "next/link";
import Image from "next/image"

export default async function Navbar() {
    const session = await auth()
    // const user = session?.user

    return (
        <main className="flex-between w-full mb-16 pt-3">
            <Link href='/' className='flex gap-2 flex-center'>
                <Image
                src='/assets/images/logo.svg'
                alt='logo'
                width={30}
                height={30}
                className='object-contain'
                />
                <p className='logo_text'>Promptopia</p>
            </Link>
            
            {/* Modile Nav */}
            <span className="flex sm:hidden gap-2 items-center">
                {session?.user ?
                    <Link href='/i/promtopia/profile'>
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
                <Auth />    
            </span>

            {/* Desktop */}
            <span className="hidden sm:flex gap-2 items-center">
                <Link href='/i/promptopia/create-prompt' className='black_btn'>
                Create Post
                </Link>
                <Auth />  
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
            
        </main>
    )
}