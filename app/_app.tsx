import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import IndexPage from "./page";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <IndexPage></IndexPage>
    </ChakraProvider>
  )
}