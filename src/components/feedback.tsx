import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { Textt } from "../themes/text-theme";
import FeedbackCard from "./feedback-card";

export default function Feedback() {
  return (
    <Flex
      h="550px"
      p={5}
      align="center"
      justify="center"
      mx="auto"
      bg="white"
      maxW="1300px"
    >
      <FeedbackCard />
      <Spacer />
      <Box w="300px">
        <Text styleConfig={Textt}>
          Veja como os nossos clientes usam e recomendam nossos serviços.
        </Text>
      </Box>
    </Flex>
  );
}
