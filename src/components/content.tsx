import {
  AspectRatio,
  Box,
  Flex,
  LinkBox,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { Textt } from "../themes/text-theme";
import { useSession } from "next-auth/react";
import Image from "next/image";
import flor from "./images/small-image.jpg";
import moldura from "./images/moldura.png";
import NextLink from "next/link";
import ModalComponent from "./modal";

export default function Content() {
  const { data: session } = useSession();

  const contentDisplay = () => {
    switch (session?.user.role) {
      case "doctor":
        return (
          <Flex
            h={"100vh"}
            w={"100vw"}
            align="center"
            justify="center"
            marginX={"auto"}
            bg={"white"}
          >
            <Flex
              direction="column"
              justify="center"
              align="center"
              w="400px"
              h="600px"
              marginRight="90px"
            >
              <Text marginBottom="40px" styleConfig={Textt}>
                Bem vindo(a) de volta ao PsicoCampo -.-,{" "}
                <Text color={"#CE99E6"}>Dr.(a) {session.user.username}</Text>
              </Text>
              <Text fontSize={25}>Como você está se sentindo hoje?</Text>
              <ModalComponent />
            </Flex>
            <Flex height="500px" w="600px">
              <Box pos={"relative"}>
                <Image
                  src={flor}
                  alt="teste"
                  sizes="100vw"
                  style={{
                    width: "500px",
                    height: "580px",
                    position: "absolute",
                    zIndex: "1",
                  }}
                />
                <Image
                  src={moldura}
                  alt="teste"
                  sizes="100vw"
                  style={{
                    width: "470px",
                    height: "550px",
                    position: "relative",
                    right: "20px",
                    bottom: "15px",
                  }}
                />
              </Box>
            </Flex>
          </Flex>
        );
      case "user":
        return (
          <Flex
            h={"100vh"}
            w={"100vw"}
            align="center"
            justify="center"
            marginX={"auto"}
            bg={"white"}
          >
            <Flex
              direction="column"
              justify="center"
              align="center"
              w="400px"
              h="600px"
              marginRight="90px"
            >
              <Text marginBottom="40px" styleConfig={Textt}>
                Bem vindo(a) de volta ao PsicoCampo -.-, {session.user.username}
              </Text>
              <Text fontSize={25}>Como você está se sentindo hoje?</Text>
              <ModalComponent />
            </Flex>
            <Flex height="500px" w="600px">
              <Box pos={"relative"}>
                <Image
                  src={flor}
                  alt="teste"
                  sizes="100vw"
                  style={{
                    width: "500px",
                    height: "580px",
                    position: "absolute",
                    zIndex: "1",
                  }}
                />
                <Image
                  src={moldura}
                  alt="teste"
                  sizes="100vw"
                  style={{
                    width: "470px",
                    height: "550px",
                    position: "relative",
                    right: "20px",
                    bottom: "15px",
                  }}
                />
              </Box>
            </Flex>
          </Flex>
        );
      default:
        return (
          <Flex
            h={"100vh"}
            w={"100vw"}
            align="center"
            justify="center"
            marginX={"auto"}
            bg={"white"}
          >
            <Flex
              direction="column"
              justify="center"
              align="center"
              w="400px"
              h="600px"
              marginRight="80px"
              position={"relative"}
            >
              <Text marginBottom="40px" styleConfig={Textt}>
                Seja bem vindo(a) ao PsicoCampo -.-
              </Text>
              <Text fontSize={25}>
                Aqui você encontra os melhores psicólogos do país, venha
                conferir!
              </Text>
              <Flex position={"absolute"} bottom={5} left={0}>
                <LinkBox
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  border="1px"
                  borderColor="black"
                  fontWeight={600}
                  borderRadius={18}
                  w={140}
                  h={"40px"}
                  as={NextLink}
                  href="/auth/signup"
                >
                  Criar conta
                </LinkBox>
              </Flex>
            </Flex>
            <Flex height="500px" w="600px">
              <Box pos={"relative"}>
                <Image
                  src={flor}
                  alt="teste"
                  sizes="100vw"
                  style={{
                    width: "500px",
                    height: "580px",
                    position: "absolute",
                    zIndex: "1",
                  }}
                />
                <Image
                  src={moldura}
                  alt="teste"
                  sizes="100vw"
                  style={{
                    width: "470px",
                    height: "550px",
                    position: "relative",
                    right: "20px",
                    bottom: "15px",
                  }}
                />
              </Box>
            </Flex>
          </Flex>
        );
    }
  };
  return <>{contentDisplay()}</>;
}
