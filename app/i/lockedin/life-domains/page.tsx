import { auth, signIn, signOut } from "@/utils/auth"
import { getLifeDomains } from "./action"
import Link from "next/link"
import Auth from "@/components/sign-in"
import LifeDomainCard from "@/components/lockedin/life-domain-card"

export default async function LifeDomains() {
    const session = await auth()

    console.log(session)
    
    const LIFEDOMAINS = await getLifeDomains()

    const res = await LIFEDOMAINS.json()
    // console.log("LFDOMAINS: ", res)
    if (LIFEDOMAINS?.status == 200) {
        console.log("response ok")
        return ( <div className="w-full">
            <span className="w-full flex items-center justify-between">
               <>Create tags for areas of your life where you want to builds better habits.</>
               <>{session?.user ?
                    <Link 
                        className="border border-black hover:border-gray-900 p-1 rounded-md"
                        href="/i/lockedin/life-domains/new"
                    > 
                        Add Domain
                    </Link>
               : <Auth />
               }</>
            </span>
            <section className="w-full my-4 gap-2 grid grid-cols-1 md:grid-cols-3">
               {res.map((lfd: any) => (
                <div key={lfd._id} className="w-full flex flex-col  ">
                   <LifeDomainCard  {...lfd}/>
                </div>
               ))}
            </section>
        </div>)
        
    }  else {
        console.log("response  not ok")
        return ( <div className="w-full">
             <span className="w-full flex items-center justify-between">
                <>Life Domains</>
                <>{session?.user ?
                    <Link href="/i/lockedin/life-domains/new"> Add Domain</Link>
                : <Auth />
                }</>
            </span>
            <section className="w-full grid grid-cols-1 md:grid-cols-3">
                 Error {/* {JSON.stringify(LIFEDOMAINS)} */}
            </section>
        </div>)
    } 
    
}