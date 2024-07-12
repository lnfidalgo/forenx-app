"use client";

import { registerUser } from "@/src/actions/auth-actions";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/src/lib/config-signup-zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  useToast,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Flex,
  Text,
  Box,
  Spacer,
  Image,
  Spinner,
} from "@chakra-ui/react";
import GoogleButtonSignin from "./google-button-signin";

type InputType = z.infer<typeof formSchema>;

export function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);

  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputType>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: InputType) {
    try {
      setIsLoading(true);
      const { confirmPassword, ...user } = values;

      const response = await registerUser(user);
      if ("error" in response) {
        toast({
          title: "Deu merda!",
          description: response.error,
          variant: "success",
        });
      } else {
        toast({
          title: "Conta criada!",
          description: "Sua conta foi criada com sucesso! Faça login.",
        });
      }
    } catch (error) {
      toast({
        title: "Something went wrong!",
        description: "We couldn't create your account. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Flex
      height="100vh"
      w="1200px"
      alignItems="center"
      justifyContent="center"
      marginX="auto"
    >
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        backgroundColor="white"
        w="600px"
        minW="360px"
        h="600px"
      >
        <Text fontSize="xx-large" fontWeight="bold" mb="25px">
          Sign Up
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input {...register("username")} />
            <FormErrorMessage>
              {errors.username && <span>{errors.username.message}</span>}
            </FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              {...register("password")}
              type={show ? "text" : "password"}
              placeholder="********"
              background="white"
            />
            <FormErrorMessage>
              {errors.password && <span>{errors.password.message}</span>}
            </FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
            <Input
              {...register("confirmPassword")}
              type={show ? "text" : "password"}
              placeholder="********"
              background="white"
            />
            <FormErrorMessage>
              {errors.confirmPassword && (
                <span>{errors.confirmPassword.message}</span>
              )}
            </FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input {...register("email")} placeholder="youremail@example.com" />
            <FormErrorMessage>
              {errors.email && <span>{errors.email.message}</span>}
            </FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="role">Role</FormLabel>
            <Input {...register("role")} />
          </FormControl>
          <Button
            background="#8CB1E6"
            mt="2rem"
            type="submit"
            w="100%"
            disabled={isLoading}
          >
            {isLoading && (
              <Spinner
                thickness="4px"
                speed="1s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            )}
            Criar conta
          </Button>
          <GoogleButtonSignin
            typeSubmit="signup"
            // callbackUrl={callbackUrl}
          />
        </form>
      </Flex>
      <Spacer />
      <Box>
        <Image
          h="600px"
          src="https://bit.ly/dan-abramov"
          alt="teste"
          borderRadius={20}
        />
      </Box>
    </Flex>
  );
}
