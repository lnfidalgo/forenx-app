import { Flex, Heading, Input } from "@chakra-ui/react"
import PasswordInput from "../components/passwordInput"
import EmailInput from "../components/emailInput"
import LoginButton from "../components/loginButton"
import Link from "next/link"
import { SignOutButton } from "@/components/sign-out-button"

export default function IndexPage() {
  return (
  <Flex height="100vh" alignItems="center" justifyContent="center" backgroundColor="teal">
    <Flex direction="column" backgroundColor='white' p={10} rounded={7}>
      <Heading mb='1.5rem'>
        FarenX
      </Heading>
      <EmailInput />
      <PasswordInput />
      <LoginButton />
      </Flex>
      <Link href='./private'>Privado</Link>
      <Link href='./public'>Cliente</Link>
      <SignOutButton />
    </Flex>
  )
}