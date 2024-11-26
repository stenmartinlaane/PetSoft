"use client";

import { Pet } from "@/lib/types";
import React, { createContext, useState } from "react";

type TPetContext = {
  pets: Pet[];
  selectedPetId: string | null;
  handleChangeSelectedPetId: (petId: string) => void;
  selectedPet: undefined | Pet;
  numberOfPets: number
};

export const PetContext = createContext<TPetContext | null>(null);

type PetContextProviderProps = {
  children: React.ReactNode;
  data: Pet[];
};

export default function PetContextProvider({
  children,
  data,
}: PetContextProviderProps) {
  const [pets, setPets] = useState<Pet[]>(data);
  const [selectedPetId, setSelectedPetId] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");

  const handleChangeSelectedPetId = (petId: string) => {
    setSelectedPetId(petId);
  };

  const numberOfPets = pets.length

  const selectedPet = pets.find((pet) => pet.id === selectedPetId);

  return (
    <PetContext.Provider
      value={{ pets, selectedPetId, handleChangeSelectedPetId, selectedPet, numberOfPets }}
    >
      {children}
    </PetContext.Provider>
  );
}
