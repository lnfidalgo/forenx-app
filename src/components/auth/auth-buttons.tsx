"use client";

import { Button, Flex, Link } from "@chakra-ui/react";
import { Buttonn } from "../../app/themes/button-theme";
import { signIn, useSession } from "next-auth/react";
import NextLink from "next/link";
import { UserNav } from "./user-nav";

export default function AuthButtons() {
  const { data: session } = useSession();

  return (
    <Flex gap="50px">
      {session && session.user ? (
        <UserNav user={session.user} />
      ) : (
        <>
          <Button onClick={() => signIn()} styleConfig={Buttonn}>
            Sign In
          </Button>
          <Button styleConfig={Buttonn}>
            <Link as={NextLink} href="/auth/signup">
              Sign Up
            </Link>
          </Button>
        </>
      )}
    </Flex>
  );
}
