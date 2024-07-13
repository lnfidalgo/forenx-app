"use client";

import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuGroup,
  MenuItem,
} from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function ProfileButton() {
  const { data: session } = useSession();

  const ButtonProfile = () => {
    switch (session?.user.role) {
      case "doctor":
        return (
          <Menu>
            <MenuButton
              as={Button}
              bg={"#E6ADC5"}
              color={"white"}
              _hover={{
                background: "#F5BAE6",
              }}
            >
              Profile
            </MenuButton>
            <MenuList>
              <MenuGroup title={`Dr.(a) ${session.user.username}`}>
                <MenuItem>Agenda</MenuItem>
                <MenuItem>
                  <Link href="" onClick={() => signOut()}>
                    Sair
                  </Link>
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        );
      default:
        return (
          <Menu>
            <MenuButton
              as={Button}
              bg={"#E6ADC5"}
              color={"white"}
              _hover={{
                background: "#F5BAE6",
              }}
            >
              Profile
            </MenuButton>
            <MenuList>
              <MenuGroup title={session?.user.username}>
                <MenuItem>Colsultas</MenuItem>
                <MenuItem>
                  <Link href="" onClick={() => signOut()}>
                    Sair
                  </Link>
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        );
    }
  };

  return <>{ButtonProfile()}</>;
}
