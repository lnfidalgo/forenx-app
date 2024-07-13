"use client";

import Content from "../components/content";
import Feedback from "../components/feedback";
import { useSession } from "next-auth/react";
import DoctorPage from "../components/layout/doctor-page";
import UserPage from "../components/layout/user-page";
import MainHeader from "@/src/components/main-header";

export default function Home() {
  const { data: session } = useSession();
  console.log(session);

  const testPageRender = () => {
    switch (session?.user.role) {
      case "user":
        return <UserPage />;
      case "doctor":
        return <DoctorPage />;
      default:
        return (
          <>
            <MainHeader />
            <Content />
          </>
        );
    }
  };

  return <main>{testPageRender()}</main>;
}
