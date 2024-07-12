'use client'

import {
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Button,
  Link,
} from "@chakra-ui/react";

import { signOut } from "next-auth/react";

import NextLink from "next/link";

export default function UserPage() {
  return (
    <>
      <Menu>
        <MenuButton as={Button} colorScheme="pink">
          Profile
        </MenuButton>
        <MenuList>
          <MenuGroup title="Sou um usuário">
            <MenuItem>My Account</MenuItem>
            <MenuItem>
              <Link as={NextLink} href="" onClick={() => signOut()}>
                Sair
              </Link>
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </>
  );
}
