import Auth from "@/components/sign-in";
import { signIn } from "@/utils/auth";


export default async function AuthPage() {

    return (
        <main className="w-full min-h-screen flex justify-center items-center">
            {/* <nav className="flex p-2 justify-between">
              <SignIn />
            </nav> */}

            {/* <div className="w-full text-white flex flex-col md:w-[70%]">
                <h1 className="text-xl font-bold">Name: {user?.name}</h1>
                <h1 className="font-light italic">email: {user?.email}</h1>
            </div> */}

            <div className="min-w-[250px] text-gray-900 md:min-w-[400px] flex flex-col justify-center items-center w-fit h-full p-3 rounded-xl border">
                <form action={async () => {
                    "use server"
                    await signIn()
                    }}
                    
                    className="flex  w-full items-center flex-col gap-3"
                >
                    <input disabled={true} className="p-2 w-full rounded-md" type="email" name="email" placeholder="your-email@gmail.com" required />
                    <input disabled={true} className="p-2 w-full rounded-md" type="password" required />
                    <button className="p-2 hidden mt-2 rounded-md min-w-[60%] text-white bg-purple-600" 
                    type="submit">Sign In </button>
                    <Auth />
                </form>
                
                <span className="w-full border-t border-white my-4"> </span>

                <Auth />
            </div>
        </main>
    )
}