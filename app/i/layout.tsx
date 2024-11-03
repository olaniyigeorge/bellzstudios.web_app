import "@/styles/globals.css";
import FooterControls from "@/components/lockedin/footer-controls";
import Link from "next/link";



export default function LockedInLayout({children}: {children: React.ReactNode}) {
   
    return (
        <div className="text-white w--full h-screen flex flex-col items-center justify-between">
          
            <nav className="flex w-full p-2 md:p-6 lg:p-10">
                <Link href="/i/lockedin">
                <h1 className="text-3xl font-extrabold">Locked<span className="text-purple-500 px-1 rounded-md border">In</span></h1>
                </Link>
            </nav> 
            <section className="w-full flex-1 md:w-[90%] lg:w-[65%] flex justify-center ">
                {children}
            </section>
            <FooterControls />
        </div>
    )
}