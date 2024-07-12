"use client";

import { Button, Flex, Link } from "@chakra-ui/react";
import { Buttonn } from "../../app/themes/button-theme";
import { signIn } from "next-auth/react";
import NextLink from "next/link";

export default function AuthButtons() {

  return (
    <Flex gap="50px">
      <Flex>
        <Button onClick={() => signIn()} styleConfig={Buttonn}>
          Sign In
        </Button>
        <Button styleConfig={Buttonn}>
          <Link as={NextLink} href="/auth/signup">
            Sign Up
          </Link>
        </Button>
      </Flex>
    </Flex>
  );
}
