import { Flex, Heading } from "@chakra-ui/react"

const IndexPage = () => (
  <Flex height="100vh" alignItems="center" justifyContent="center">
    <Flex direction="column" background="green.100" p={10} rounded={6}>
      <Heading>
        FarenX
      </Heading>
    </Flex>
  </Flex>
)

export default IndexPage