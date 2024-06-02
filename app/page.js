"use client";

import { useGlobalContext } from "@/context/globalContext";
import SearchMenu from "@/components/SearchMenu";
import HeroSection from "@/components/HeroSection";

export default function Application() {
  const { searchedItems, addSearchedItems } = useGlobalContext();

  return (
    <>
      <HeroSection />
      <SearchMenu addSearchedItems={addSearchedItems} items={searchedItems} />
    </>
  );
}
