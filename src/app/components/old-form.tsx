'use client'

import {
  Alert,
  AlertDescription,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons"


const LoginForm = () => {
  const router = useRouter()

  const [error, setEror] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await signIn('credentials', {
        redirect: false,
        email,
        password,
      })

      if (!response?.error) {
        router.refresh
        router.push('../pages/private')
      } else {
        setEror('Email ou senha inválidos.')
      }
      console.log('[ LOGIN RESPONSE]: ', response)

    } catch (error) {
      console.log('[LOGIN ERROR]: ', error)
    }
  }

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center" backgroundColor="teal">
      <Flex>
        <form onSubmit={handleSubmit}> 
          <Flex direction="column" backgroundColor='white' p={10} rounded={7} >
            <Heading mb='1.5rem'>Login</Heading>
            <FormLabel>Email</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <EmailIcon color='gray.400' />
              </InputLeftElement>
              <Input type="email" placeholder="youremail@example.com" mb='1rem'
              onChange={(e) => {setEmail(e.target.value)}} />
            </InputGroup>
            <FormLabel>Password</FormLabel>
            <InputGroup> 
              <InputLeftElement pointerEvents="none">
                <LockIcon color='gray.400' />
              </InputLeftElement>    
              <Input
                type={show ? 'text' : 'password'}
                placeholder="********"
                background='white'
                onChange={(e) => {setPassword(e.target.value)}}
              />
              <InputRightElement>
              <Button onClick={handleClick} variant='filled'>
          {show ? <ViewOffIcon color='gray.400' /> : <ViewIcon color='gray.400' />}
        </Button>
      </InputRightElement>
      </InputGroup>
            <Button
              type='submit'
              colorScheme='cyan'
              mt='2rem'
            >
              Entrar
            </Button>
            {error && <Alert status="error">
              <AlertDescription>{error}</AlertDescription>
            </Alert>}
          </Flex>
        </form>
      </Flex>
  </Flex>
  )
}

export {LoginForm}