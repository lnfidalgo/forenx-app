import NextAuth from "next-auth/next"
import { NextAuthOptions } from "next-auth"
import CredentialProvider from "next-auth/providers/credentials"

const authOptions: NextAuthOptions = {
  providers: [
    CredentialProvider({
      name: 'Credentials',
      credentials: {
        role: { label: 'Psicólogo', type: 'text' },
      },
      async authorize(credentials) {
        const doctor = {
          id: '1',
          email: 'doctor@email.com',
          password: '123',
          name: 'Lucas',
          role: 'Doctor'
        }

        const isValidRole = doctor.role === credentials?.role

        if (!isValidRole) {
          return null
        }

        return doctor
      }
    })
  ],
  callbacks: {
    jwt: ({ token }) => {
      return token
    }
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }