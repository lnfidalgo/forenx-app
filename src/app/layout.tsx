import { Providers } from "../../providers/chakra-provider"
import { AuthProvider } from "@/providers/auth-provider"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <Providers>{children}</Providers> 
        </body>
      </html>
    </AuthProvider>
  )
}