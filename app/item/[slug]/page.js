"use client";

import { useState, useEffect } from "react";
import { useGlobalContext } from "@/context/globalContext";
import getItemGraph from "@/api/getItemGraph";
import SearchMenu from "@/components/SearchMenu";
import ItemCard from "@/components/ItemCard";

export default function ItemDetails({ params }) {
  const [currentItem, setCurrentItem] = useState();
  const [error, setError] = useState();
  const {
    searchedItems,
    addSearchedItems,
    searchedItemsGraphs,
    addSearchedItemsGraphs,
    isLoading,
    setIsLoading,
  } = useGlobalContext();

  useEffect(() => {
    const itemId = Number(params.slug);
    if (itemId) {
      const item = searchedItems.find((item) => item.id === itemId);
      setCurrentItem(item);
      if (item) {
        fetchItemGraph();
      }

      async function fetchItemGraph() {
        try {
          setIsLoading(true);
          const response = await getItemGraph(itemId);
          addSearchedItemsGraphs(response);
        } catch (error) {
          setError("Something went wrong, when fetching item graph!");
        } finally {
          setIsLoading(false);
        }
      }
    }
  }, []);

  return (
    <>
      {currentItem && (
        <ItemCard
          isLoading={isLoading}
          item={currentItem}
          itemGraph={searchedItemsGraphs}
        />
      )}
      {!isLoading && (
        <SearchMenu addSearchedItems={addSearchedItems} items={searchedItems} />
      )}
    </>
  );
}
