"use client"
import { usePetContext, useSearchContext } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function PetList() {
  const { pets, handleChangeSelectedPetId, selectedPetId} = usePetContext();
  const { searchQuery } = useSearchContext()

  const filteredPets = pets.filter((pet) => pet.name.toLowerCase().includes(searchQuery))

  return (
    <ul className="bg-white border-b border-light">
      {filteredPets.map((pet) => (
        <li key={pet.id}>
          <button onClick={() => {handleChangeSelectedPetId(pet.id)}} className={cn("flex items-center h-[70px] w-full cursor-pointer gap-3 px-5 text-base hover:bg-[#EFF1F2] focus:bg-[#EFF1F2]",{
            "bg-[#EFF1F2]": pet.id === selectedPetId
          })}>
            <Image
              src={pet.imageUrl}
              alt="Pet image"
              width={45}
              height={45}
              className="rounded-full object-cover w-[45px] h-[45px]"
            />
            <p className="font-semibold ">{pet.name}</p>
          </button>
        </li>
      ))}
    </ul>
  );
}
