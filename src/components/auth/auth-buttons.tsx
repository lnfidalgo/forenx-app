"use client";

import {
  Button,
  Flex,
  Link,
  Text,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { Buttonn } from "../../themes/button-theme";
import { signIn } from "next-auth/react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";

export default function AuthButtons() {
  const router = useRouter();
  /*const style = {
    bg: "grey",
  };
*/
  return (
    <Flex gap="50px">
      <Button
        //sx={style}
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
      <Button
        onClick={() => router.push("/auth/signup")}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        fontWeight={600}
        border="1px"
        borderColor="black"
        borderRadius={18}
        w={140}
      >
        Criar conta
      </Button>
    </Flex>
  );
}
