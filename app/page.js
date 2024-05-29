"use client";

import { useGlobalContext } from "@/context/globalContext";
import SearchForm from "@/components/SearchForm";
import CardList from "@/components/CardList";
import SearchMenu from "@/components/SearchMenu";

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
      <SearchMenu addSearchedItems={addSearchedItems} items={searchedItems} />
    </>
  );
}
