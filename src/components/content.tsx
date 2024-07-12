import { Box, Flex, Text } from "@chakra-ui/react";
import { Textt } from "../app/themes/text-theme";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Content() {
  const { data: session } = useSession();

  const contentDisplay = () => {
    switch (session?.user.role) {
      case "doctor":
        return (
          <Flex
            h="550px"
            p={5}
            align="center"
            justify="center"
            bg="#8CE6C3"
            w="100vw"
            gap="150"
          >
            <Box w="300px">
              <Text styleConfig={Textt}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nostrum non totam nihil ea porro veniam,
              </Text>
            </Box>
            <Box>
              <Image
                src="https://unsplash.com/pt-br/fotografias/uma-pessoa-andando-na-praia-com-uma-prancha-de-surf-IOOZTc7CAoM"
                alt="teste"
              />
            </Box>
          </Flex>
        );
      case "user":
        return (
          <Flex
            h="550px"
            p={5}
            align="center"
            justify="center"
            bg="#8065E6"
            w="100vw"
            gap="150"
          >
            <Box w="300px">
              <Text styleConfig={Textt}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nostrum non totam nihil ea porro veniam,
              </Text>
            </Box>
            <Box>
              <Image
                src="https://bit.ly/dan-abramov"
                alt="teste"

              />
            </Box>
          </Flex>
        );
      default:
        return (
          <Flex
            h="550px"
            p={5}
            align="center"
            justify="center"
            bg="#3B30E6"
            w="100vw"
            gap="150"
          >
            <Box w="300px">
              <Text styleConfig={Textt}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nostrum non totam nihil ea porro veniam,
              </Text>
            </Box>
            <Box>
              <Image
                src="https://images.unsplash.com/photo-1720411210786-74de85287192?q=80&w=1939&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="teste"
                width={200}
                height={200}
              />
            </Box>
          </Flex>
        );
    }
  };
  return <>{contentDisplay()}</>;
}
