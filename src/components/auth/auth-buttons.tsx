"use client";

import { Button, Flex, Link, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Buttonn } from "../../app/themes/button-theme";
import { signIn } from "next-auth/react";
import NextLink from "next/link";

export default function AuthButtons() {
  return (
    <Flex gap="50px">
      <Button
        _hover={{
          background: "#CE99E6",
          variant: "solid",
          border: "none",
        }}
        onClick={() => signIn()}
        variant="outline"
        colorScheme="#E1A0E6"
        w={140}
        borderRadius={18}
      >
        Entrar
      </Button>
      <LinkBox
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        fontWeight={600}
        border="1px"
        borderColor="black"
        borderRadius={18}
        w={140}
        as={NextLink}
        href="/auth/signup"
      >
        Criar conta
      </LinkBox>
    </Flex>
  );
}
