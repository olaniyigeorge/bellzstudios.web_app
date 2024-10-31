
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { AuthenticatedUser} from "@/types"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({user: AuthenticatedUser, account, profile}){
      if (account?.provider == "google") {
        const { access_token, id_token} = account
        const url = "http://localhost:8000/api/accounts/auth/google/"
        console.log("access_token", access_token)
        console.log("id_token", id_token)
        try {
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              access_token: access_token,
              id_token: id_token
            })
          })
          // const { access_token } = response.data;
          // user.accessToken = access_token

          return true
        } catch(error) {
          return false
        }
      }
      return true
    },
    async jwt({ token, user: AuthenticatedUser, account }) {
      // if (user) {
      //   const { accessToken } = user
      //   token.accessToken = accessToken
      // }
      // console.log("Account", account)
      // // if (account) {
      // //   token.accessToken = account.access_token; // Save access token
      // // }
      return token;
    },
    async session({ session, user: AuthenticatedUser }) {
      //session.accessToken = user.accessToken
      //console.log("Session", session)
      // session.accessToken = token.accessToken; // Add access token to session
      return session;
    },
  }
})

