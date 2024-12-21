import { auth, signIn, signOut } from "@/services/auth"
import { redirect } from "next/navigation"
import Image from "next/image"
export default async function Auth() {
  const session = await auth() 
  // console.log(session)
  const user = session?.user
  return user ? 
    (
      <form
        action={async () => {
          "use server"
          await signOut()
        }}
      >
        <button className="outline_btn" 
        type="submit">Sign Out</button>
      </form>
    ) 
    :
    (
      <form
        action={async () => {
          "use server"
          await signIn("google")
          return redirect("/")
        }}
      >
        <button className="black_btn flex gap-2" 
        type="submit">
          <>
            <Image 
              src="/assets/images/socials/google.svg" 
              className="w-5 h-5"
              width={5}
              height={5}
              alt="google" 
            /> 
          </>
          <>Sign in with Google</>
          </button>
      </form>
      )
} 