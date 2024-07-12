"use client";

import Header from "@/src/components/header";
import Content from "../components/content";
import Feedback from "../components/feedback";
import { useSession } from "next-auth/react";
import { Text } from "@chakra-ui/react";
import DoctorPage from "../components/layout/doctor-page";
import UserPage from "../components/layout/user-page";

export default function Home() {
  const { data: session } = useSession();

  const testPageRender = () => {
    switch (session?.user.role) {
      case "user":
        return <UserPage />;
      case "doctor":
        return <DoctorPage />;
      default:
        return (
          <>
            <Header />
            <Content />
            <Feedback />
            <Content />
          </>
        );
    }
  };

  return <main>{testPageRender()}</main>;
}
