import { Link } from "@chakra-ui/react";
import NextLink from 'next/link'
import { Linkk } from "../themes/link-theme";

export default function LoginLink() {
  return (
    <Link as={NextLink} href="../pages/login" styleConfig={Linkk} >Log in</Link>
  )
}