"use client";

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
  InputRightElement,
  InputGroup,
  InputLeftElement,
  LinkOverlay,
} from "@chakra-ui/react";
import {
  EmailIcon,
  LockIcon,
  ViewIcon,
  ViewOffIcon,
  ArrowBackIcon,
} from "@chakra-ui/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import GoogleButtonSignin from "./google-button-signin";
import backgroundlogin from "../images/mick-haupt-X3PqG6WylgQ-unsplash.jpg";
import Image from "next/image";

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

  const handleClick = () => setShow(!show);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputType>({
    resolver: zodResolver(formSchema),
  });

  const watchFields = watch(["email", "password"]);

  const handleInputValue = () => {
    if (watchFields === undefined || "" ) {
      return true;
    }
    return false;
  };
  handleInputValue()
  console.log(handleInputValue())

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
    <Flex alignItems="center" justifyContent="center">
      <Image
        src={backgroundlogin}
        alt="Montanhas bonitas"
        style={{
          height: "100vh",
          overflow: "hidden",
        }}
      ></Image>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        backgroundColor="white"
        h="600px"
        minW="500px"
        position={"absolute"}
        borderRadius={8}
        boxShadow={"dark-lg"}
      >
        <LinkOverlay href="/" position={"absolute"} bottom={5} left={5}>
          <ArrowBackIcon boxSize={10} />
        </LinkOverlay>
        <Text
          fontWeight={"bold"}
          fontSize={"25px"}
          position={"absolute"}
          top={5}
          left={5}
          textColor={"#F5BAE6"}
        >
          PsicoCampo -.-
        </Text>
        <Text fontSize="xx-large" fontWeight="bold" mb="25px">
          Log In
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl marginBottom={5}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <EmailIcon color={"grey"} />
              </InputLeftElement>
              <Input
                {...register("email")}
                placeholder="youremail@example.com"
                boxShadow={"xl"}
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <LockIcon color={"grey"} />
              </InputLeftElement>
              <Input
                {...register("password")}
                type={show ? "text" : "password"}
                placeholder="********"
                boxShadow={"xl"}
              />
              <InputRightElement>
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? (
                    <ViewIcon color={"grey"} />
                  ) : (
                    <ViewOffIcon color={"grey"} />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>
              {errors.password && <span>{errors.password.message}</span>}
            </FormErrorMessage>
          </FormControl>

          <Button
            background="#8CB1E6"
            mt="2rem"
            type="submit"
            w="100%"
            isDisabled={handleInputValue()}
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
          <Text
            display={"flex"}
            marginY={15}
            alignItems={"center"}
            justifyContent={"center"}
          >
            ou
          </Text>
          <GoogleButtonSignin typeSubmit="signin" callbackUrl="/" />
        </form>
      </Flex>
    </Flex>
  );
}
