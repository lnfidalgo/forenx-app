import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Text,
  Image
} from "@chakra-ui/react";

export default function FeedbackCard() {
  return (
<Card maxW='sm' bg='#CCF9FA' border='1px' borderColor='gray.400' >
  <CardHeader>
    <Flex>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
        <Box>
          <Heading size='sm'>José Carlos</Heading>
          <Text>Paciente</Text>
        </Box>
      </Flex>
    </Flex>
  </CardHeader>
  <CardBody>
    <Text>
      Com a ajuda da PsicoX, eu consegui aprender a como me comportar em crises, e como refletir mais diante de ocorridos.
    </Text>
  </CardBody>
    <Image
    objectFit='cover'
    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
    />
  <CardFooter>
    <Text>Vem pra PsicoX</Text>
  </CardFooter>
</Card>
  )
}

