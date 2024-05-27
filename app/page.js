"use client";

import { useGlobalContext } from "@/context/globalContext";
import SearchForm from "@/components/SearchForm";
import CardList from "@/components/CardList";

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
      <CardList items={searchedItems} />
    </>
  );
}
