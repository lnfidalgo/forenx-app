import { Box, Flex, Image, Spacer,Text } from "@chakra-ui/react";
import { Textt } from "../themes/text-theme";

export default function Content() {
  return (
    <Flex h="550px" p={5} align='center' justify='center' bg='#A2DDFA' w='100vw'
    gap='150'>
      <Box w='300px'>
        <Text styleConfig={Textt} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum non totam nihil ea porro veniam,
        </Text>
      </Box>
      <Box>
        <Image src="https://bit.ly/dan-abramov" alt="teste"
        borderRadius={20}
        />
      </Box>
    </Flex>
  )
}