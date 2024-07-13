import { useState } from "react";
import { signIn } from "next-auth/react";

import { FcGoogle } from "react-icons/fc";
import { Button, Spinner, Text } from "@chakra-ui/react";

interface Props {
  typeSubmit: "signin" | "signup";
  callbackUrl?: string;
}

export default function GoogleButtonSignin({ typeSubmit, callbackUrl }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Button
      boxShadow={'xl'}
      variant="outline"
      type="button"
      disabled={isLoading}
      onClick={() => {
        setIsLoading(true);
        signIn("google", { callbackUrl });
      }}
    >
      {isLoading ? (
        <span className="animate-spin">
          <Spinner />
        </span>
      ) : (
        <FcGoogle size={30} />
      )}
      <Text fontWeight={300} marginLeft={2}>
        {typeSubmit === "signup"
          ? "Criar conta com Google"
          : "Continuar com o Google"}
      </Text>
    </Button>
  );
}
