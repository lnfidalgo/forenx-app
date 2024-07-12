import { Link, Text } from "@chakra-ui/react";
import { User } from "@prisma/client";
import NextLink from "next/link";
import UserPage from "../layout/user-page";
import DoctorPage from "../layout/doctor-page";

interface Props {
  user: User;
}

export function UserNav({ user }: Props) {
  return <>{user.role === "doctor" ? <DoctorPage /> : <UserPage />}</>;
}
