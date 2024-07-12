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
            <MenuButton as={Button} colorScheme="pink">
              Profile
            </MenuButton>
            <MenuList>
              <MenuGroup title="Sou um doctor">
                <MenuItem>My Account</MenuItem>
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
            <MenuButton as={Button} colorScheme="pink">
              Profile
            </MenuButton>
            <MenuList>
              <MenuGroup title="Sou um user">
                <MenuItem>My Account</MenuItem>
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

  return (
    <>{ButtonProfile()}</>
  );
}
