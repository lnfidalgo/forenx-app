'use client'

import { Button } from "@chakra-ui/react"
import { signOut } from "next-auth/react"

export const SignOutButton = () => {
  return (
    <Button onClick={() => signOut()}>Sair</Button>
  )
}