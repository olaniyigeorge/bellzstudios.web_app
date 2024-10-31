import { auth, signIn, signOut } from "@/utils/auth"
 
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
        }}
      >
        <button className="black_btn flex gap-2" 
        type="submit">
          <><img src="assets/images/socials/google.svg" className="w-5 h-5" /> </>
          <>Sign in with Google</></button>
      </form>
      )
} 