import { AuthOptions } from "next-auth"
import NextAuth from "next-auth/next"
import CredentialProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import prisma from "@/src/lib/prisma"
import { User } from "@prisma/client"

export const authOptions: AuthOptions = {
  providers: [
    CredentialProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email
          }
        })

        const bcrypt = require('bcrypt')

        if (!user) throw new Error('User name or password is not correct.')

        if (!credentials?.password) throw new Error('Please provide your password.')

        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)

        if (!isPasswordCorrect) throw new Error('User name or password incorrect.')

        const { password, ...userWithoutPass } = user
        return userWithoutPass
      }

    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user as User
      return token
    },

    async session({ token, session }) {
      session.user = token.user
      return session
    },
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/'
  },
  session: {
    strategy: 'jwt'
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }