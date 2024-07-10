import { Link } from "@chakra-ui/react";
import NextLink from 'next/link'

export default function LoginLink() {
  return (
    <Link as={NextLink} href="../pages/login" >Log in</Link>
  )
}