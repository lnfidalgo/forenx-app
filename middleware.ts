import { NextAuthMiddlewareOptions, NextRequestWithAuth, withAuth } from "next-auth/middleware"

const middleware = (request: NextRequestWithAuth) => {
  console.log('TOKEN: ', request.nextauth.token)
}

const callbackOptions: NextAuthMiddlewareOptions = {}

export default withAuth(middleware, callbackOptions)

export const config = {
  matcher: '/private'
}