import AppFooter from "@/components/app-footer";
import AppHeader from "@/components/app-header";
import BackgroundPattern from "@/components/background-pattern";
import PetContextProvider from "@/context/pet-context-provider";
import { Pet } from "@/lib/types";
import React from "react";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const response = await fetch('https://bytegrad.com/course-assets/projects/petsoft/api/pets')
  if (!response.ok) {
    throw new Error("Could not fetch pets")
  }
  const data: Pet[] = await response.json();

  return (
    <div>
      <BackgroundPattern />
      <div className="max-w-[1050px] mx-auto px-4 flex flex-col min-h-screen">
        <AppHeader />
        <PetContextProvider data={data}>{children}</PetContextProvider>
        <AppFooter />
      </div>
    </div>
  );
}
