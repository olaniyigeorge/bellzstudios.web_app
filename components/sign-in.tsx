import { auth, signIn, signOut } from "@/utils/auth"
 
export default async function AuthPage() {
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
        <button className="p-2 btn_black border text-white rounded-3xl" 
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
        <button className="p-2 flex gap-2 items-center border text-sm text-white rounded-3xl" 
        type="submit">
          <><img src="assets/images/socials/google.svg" className="w-5 h-5" /> </>
          <>Sign in with Google</></button>
      </form>
      )
} 