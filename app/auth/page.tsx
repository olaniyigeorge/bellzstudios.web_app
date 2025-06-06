"use client"
// import Auth from "@/components/sign-in";
// import { signIn } from "@/services/auth";


export default async function AuthPage() {

    return (
        <main className="w-full flex justify-center items-center min-h-[500px]">


            <div className="min-w-[250px] text-gray-900 md:min-w-[400px] flex flex-col justify-center items-center w-fit h-full p-3 rounded-xl">
                <form className="flex  w-full items-center flex-col gap-3">
                    <input className="p-2 w-full rounded-md" type="email" name="email" placeholder="email@example.com" required />
                    <input className="p-2 w-full rounded-md" type="password" required />
                    <button className="p-2 mt-2 rounded-md min-w-[60%] text-white orange-gradient-bg" 
                    type="submit">Sign In </button>
                </form>
                
                <span className="w-full border-t border-white my-4"> </span>

                {/* <Auth /> */}
            </div>
        </main>
    )
}