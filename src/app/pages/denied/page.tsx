import { Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

export default function DeniedPage() {

  return (
    <Flex>
      <Heading>Você não pode acessar esta página</Heading>
      <Link href='/'>Voltar</Link>
    </Flex>
  )
}