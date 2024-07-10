import NextAuth from "next-auth/next"
import { NextAuthOptions } from "next-auth"
import CredentialProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
    }),
    CredentialProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const doctor = {
          id: '1',
          email: 'doctor@email.com',
          password: '123',
          name: 'Lucas',
          role: 'doctor'
        }

        const isValidEmail = doctor.email === credentials?.email
        const isValidPassword = doctor.password === credentials?.password

        if (!isValidEmail && !isValidPassword) {
          return null
        }

        return doctor
      }
    })
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      const customUser = user as unknown as any

      if (user) {
        return {
          ...token,
          role: customUser.role
        }
      }

      return token
    },
    session: async ({ session, token }) => {
      return {
        ...session,
        user: {
          name: token.name,
          email: token.email,
          role: token.role
        }
      }
    }
  },
  pages: {
    signIn: ''
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }