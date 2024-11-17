"use client";

import { Pet } from "@/lib/types";
import React, { createContext, useState } from "react";

type TPetContext = {
  handleChangeSearchQuery: (newValue: string) => void;
  searchQuery: string;
};

export const SearchContext = createContext<TPetContext | null>(null);

type SearchContextProviderProps = {
  children: React.ReactNode;
};

export default function SearchContextProvider({
  children,
}: SearchContextProviderProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChangeSearchQuery = (newValue: string) => {
    setSearchQuery(newValue);
  };

  return (
    <SearchContext.Provider value={{ searchQuery, handleChangeSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
}
