"use client";

import {
  Flex,
  Box,
  Spacer,
  Text,
  LinkBox,
  LinkOverlay,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import AuthButtons from "./auth/auth-buttons";
import { useSession } from "next-auth/react";
import ProfileButton from "./profile-button";
import { useState } from "react";

export default function MainHeader() {
  const { data: session } = useSession();
  const [isHovering, setIsHovering] = useState(false);

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
          pos={"fixed"}
          zIndex={2}
          boxShadow={"lg"}
        >
          <Box marginRight={25}>
            <Text textColor={"#F5BAE6"} fontWeight={"bold"} fontSize={"25px"}>
              PsicoCampo -.-
            </Text>
          </Box>
          <Spacer />
          <Grid templateColumns="repeat(5, 1fr)" gap={20}>
            <GridItem>
              <LinkBox
                _after={{
                  content: '""',
                  width: "0%",
                  height: "2px",
                  backgroundColor: "#E1A0E6",
                  position: "relative",
                  display: "block",
                  transition: ["width 0.5s"],
                }}
                _hover={{
                  _after: {
                    paddingInline: "2px",
                    width: "100%",
                  },
                }}
              >
                <LinkOverlay href="/">Consultas</LinkOverlay>
              </LinkBox>
            </GridItem>
            <GridItem>
              <LinkBox
                _after={{
                  content: '""',
                  width: "0%",
                  height: "2px",
                  backgroundColor: "#E1A0E6",
                  position: "relative",
                  display: "block",
                  transition: ["width 0.5s"],
                }}
                _hover={{
                  _after: {
                    paddingInline: "2px",
                    width: "100%",
                  },
                }}
              >
                <LinkOverlay href="/">Psicólogos</LinkOverlay>
              </LinkBox>
            </GridItem>
            <GridItem>
              <LinkBox
                _after={{
                  content: '""',
                  width: "0px",
                  height: "2px",
                  backgroundColor: "#E1A0E6",
                  position: "relative",
                  display: "block",
                  transition: ["width 0.5s"],
                }}
                _hover={{
                  _after: {
                    paddingInline: "2px",
                    width: "55px",
                  },
                }}
              >
                <LinkOverlay href="/">Dúvidas</LinkOverlay>
              </LinkBox>
            </GridItem>
            <GridItem>
              <LinkBox
                _after={{
                  content: '""',
                  width: "0px",
                  height: "2px",
                  backgroundColor: "#E1A0E6",
                  position: "relative",
                  display: "block",
                  transition: ["width 0.5s"],
                }}
                _hover={{
                  _after: {
                    paddingInline: "2px",
                    width: "50px",
                  },
                }}
              >
                <LinkOverlay href="/">Agenda</LinkOverlay>
              </LinkBox>
            </GridItem>
            <GridItem>
              <LinkBox
                _after={{
                  content: '""',
                  width: "0px",
                  height: "2px",
                  backgroundColor: "#E1A0E6",
                  position: "relative",
                  display: "block",
                  transition: ["width 0.5s"],
                }}
                _hover={{
                  _after: {
                    paddingInline: "2px",
                    width: "67px",
                  },
                }}
              >
                <LinkOverlay href="/">Sobre nós</LinkOverlay>
              </LinkBox>
            </GridItem>
          </Grid>

          <Spacer />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="10"
          >
            <ProfileButton />
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
          pos={"fixed"}
          zIndex={2}
          boxShadow={"lg"}
        >
          <Box marginRight={25}>
            <Text textColor={"#F5BAE6"} fontWeight={"bold"} fontSize={"25px"}>
              PsicoCampo -.-
            </Text>
          </Box>

          <Spacer />
          <Grid templateColumns="repeat(3, 1fr)" gap={20}>
            <GridItem>
              <LinkBox
                _after={{
                  content: '""',
                  width: "0%",
                  height: "2px",
                  backgroundColor: "#E1A0E6",
                  position: "relative",
                  display: "block",
                  transition: ["width 0.5s"],
                }}
                _hover={{
                  _after: {
                    paddingInline: "2px",
                    width: "100%",
                  },
                }}
              >
                <LinkOverlay href="/">Psicólogos</LinkOverlay>
              </LinkBox>
            </GridItem>
            <GridItem>
              <LinkBox
                _after={{
                  content: '""',
                  width: "0px",
                  height: "2px",
                  backgroundColor: "#E1A0E6",
                  position: "relative",
                  display: "block",
                  transition: ["width 0.5s"],
                }}
                _hover={{
                  _after: {
                    paddingInline: "2px",
                    width: "55px",
                  },
                }}
              >
                <LinkOverlay href="/">Dúvidas</LinkOverlay>
              </LinkBox>
            </GridItem>

            <GridItem>
              <LinkBox
                _after={{
                  content: '""',
                  width: "0px",
                  height: "2px",
                  backgroundColor: "#E1A0E6",
                  position: "relative",
                  display: "block",
                  transition: ["width 0.5s"],
                }}
                _hover={{
                  _after: {
                    paddingInline: "2px",
                    width: "67px",
                  },
                }}
              >
                <LinkOverlay href="/">Sobre nós</LinkOverlay>
              </LinkBox>
            </GridItem>
          </Grid>
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
