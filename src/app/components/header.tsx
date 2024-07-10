import { Flex, Link, Box, Spacer, Image } from "@chakra-ui/react";
import { SignOutButton } from "./sign-out-button";
import NextLink from "next/link";
import { getServerSession } from "next-auth";
import LoginLink from "./loginLink";

export default async function Header() {
  const session = await getServerSession()

  return (
    <Flex w='100vw' bg='aquamarine' p={5} align='center' justify='center' >
      <Box>
        <Image
          src="../images/IMG-20240507-WA0018.jpg"
          alt="Logo"     
          borderRadius='full'
        />
      </Box>
      <Spacer />
      <Box display='flex' alignItems='center' justifyContent='center' gap='8'>
        <Link as={NextLink} href='./private'>Privado</Link>
        <Link as={NextLink} href='./public'>Cliente</Link>
        {!session && <LoginLink />}
        {session && <SignOutButton />}
      </Box>
    </Flex>
  )
}