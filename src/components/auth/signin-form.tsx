'use client'

import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Spinner,
  useToast,
  Text,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  email: z
    .string({ required_error: "Please enter your email" })
    .email("Please enter a valid email address"),
  password: z.string({
    required_error: "Please enter your password",
  }),
});

type InputType = z.infer<typeof formSchema>;

interface Props {
  callbackUrl?: string;
}

export function SignInForm({ callbackUrl }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const toast = useToast();

  const router = useRouter();

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

      const response = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
      });

      if (!response?.ok) {
        toast({
          title: "Something went wrong!",
          description: response?.error,
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Welcome back! ",
        description: "Redirecting you to your dashboard!",
      });
      router.push(callbackUrl ? callbackUrl : "/");
    } catch (error) {
      toast({
        title: "Something went wrong!",
        description:
          "We couldn't log in to your account. Please try again later!",
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
          Log In
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input {...register("email")} placeholder="youremail@example.com" />
            <FormErrorMessage>
              {errors.email && <span>{errors.email.message}</span>}
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
            Entrar
          </Button>
        </form>
      </Flex>
    </Flex>
  );
}
