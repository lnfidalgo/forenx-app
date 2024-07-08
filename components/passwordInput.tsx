'use client'

import { useState } from "react"
import { InputGroup, Input, InputRightElement, Button, Text, Flex, InputLeftElement } from "@chakra-ui/react"
import { LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons"

export default function PasswordInput() {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <Flex direction='column'>
      <Text mb='0.3rem' mt='0.5rem'>Password</Text>
      <InputGroup> 
        <InputLeftElement pointerEvents="none">
          <LockIcon color='gray.400' />
        </InputLeftElement>    
      <Input
        type={show ? 'text' : 'password'}
        placeholder="********"
        background='white'
      />
      <InputRightElement>
        <Button onClick={handleClick} variant='filled'>
          {show ? <ViewOffIcon color='gray.400' /> : <ViewIcon color='gray.400' />}
        </Button>
      </InputRightElement>
      </InputGroup>
      </Flex>
  )
}