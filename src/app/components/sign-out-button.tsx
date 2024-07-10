'use client'

import { Button } from "@chakra-ui/react"
import { signOut } from "next-auth/react"
import { Buttonn } from "../themes/button-theme"

export const SignOutButton = () => {
  return (
    <Button onClick={() => signOut()} styleConfig={Buttonn} >Sair</Button>
  )
}