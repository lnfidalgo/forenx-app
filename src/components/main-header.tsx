"use client";

import { Flex, Box, Spacer, Image } from "@chakra-ui/react";
import AuthButtons from "./auth/auth-buttons";
import { useSession } from "next-auth/react";
import ProfileButton from "./profile-button";

export default function MainHeader() {
  const { data: session } = useSession();

  const headerDisplay = () => {
    if (session?.user) {
      return (
        <Flex
          w="100vw"
          paddingY={5}
          paddingX={20}
          background="white"
          align="center"
          justify="center"
        >
          <Box>
            <Image
              src="../images/IMG-20240507-WA0018.jpg"
              alt="Logo"
              borderRadius="full"
            />
          </Box>
          <Spacer />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="10"
          >
            <ProfileButton/>
          </Box>
        </Flex>
      );
    } else {
      return (
        <Flex
          w="100vw"
          paddingY={5}
          paddingX={20}
          background="white"
          align="center"
          justify="center"
        >
          <Box>
            <Image
              src="../images/IMG-20240507-WA0018.jpg"
              alt="Logo"
              borderRadius="full"
            />
          </Box>
          <Spacer />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="10"
          >
            <AuthButtons />
          </Box>
        </Flex>
      );
    }
  };
  return <>{headerDisplay()}</>;
}
