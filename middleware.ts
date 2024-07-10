import { NextAuthMiddlewareOptions, NextRequestWithAuth, withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

const middleware = (request: NextRequestWithAuth) => {
  console.log('TOKEN: ', request.nextauth.token)
  
  const isPrivateRoutes = request.nextUrl.pathname.startsWith('/private')
  const isDoctorUser = request.nextauth.token?.role === 'doctor'

  if (isPrivateRoutes && !isDoctorUser) {
    return NextResponse.rewrite(new URL('/denied', request.url))
  }
}

const callbackOptions: NextAuthMiddlewareOptions = {}

export default withAuth(middleware, callbackOptions)

export const config = {
  matcher: '/private'
}