'use client'
import { Input, InputLeftElement, Text, InputGroup, Flex } from "@chakra-ui/react" 
import { EmailIcon } from '@chakra-ui/icons'

export default function EmailInput() {
  return (
    <Flex direction='column'>
      <Text mb='0.3rem'>Email</Text>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <EmailIcon color='gray.400' />
        </InputLeftElement>
        <Input type="email" placeholder="youremail@example.com"/>
      </InputGroup>
    </Flex>
  )
}