"use client";

import { useGlobalContext } from "@/context/globalContext";
import SearchMenu from "@/components/SearchMenu";

export default function ItemDetails() {
  const {
    searchedItems,
    addSearchedItems,
    searchedItemsGraphs,
    addSearchedItemsGraphs,
  } = useGlobalContext();

  return (
    <>
      <SearchMenu addSearchedItems={addSearchedItems} items={searchedItems} />
    </>
  );
}
