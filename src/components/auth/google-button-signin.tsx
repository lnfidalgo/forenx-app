import { useState } from "react";
import { signIn } from "next-auth/react";

import GoogleIcon from '../icons/googleIcon'
import { Button, Spinner } from "@chakra-ui/react";

interface Props {
  typeSubmit: "signin" | "signup";
  callbackUrl?: string;
}

export default function GoogleButtonSignin({ typeSubmit, callbackUrl }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Button
      variant="outline"
      type="button"
      disabled={isLoading}
      className="flex items-center justify-center gap-2 "
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
        <GoogleIcon size={16} />
      )}{" "}
      {typeSubmit === "signup" ? "Sign Up with Google" : "Sign in with Google"}
    </Button>
  );
}
