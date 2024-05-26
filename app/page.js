"use client";

import { useGlobalContext } from "@/context/globalContext";
import SearchForm from "@/components/SearchForm";

export default function Application() {
  const {
    searchedItems,
    addSearchedItems,
    searchedItemsGraphs,
    addSearchedItemsGraphs,
  } = useGlobalContext();

  return (
    <>
      <SearchForm
        addSearchedItems={addSearchedItems}
        addSearchedItemsGraphs={addSearchedItemsGraphs}
      />
    </>
  );
}
