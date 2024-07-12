import { Flex, Link, Box, Spacer, Image } from "@chakra-ui/react";
import AuthButtons from "./auth/auth-buttons";

export default function Header() {
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
      <Box display="flex" alignItems="center" justifyContent="center" gap="10">
        <AuthButtons />
      </Box>
    </Flex>
  );
}
