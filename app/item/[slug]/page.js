"use client";

import { useState, useEffect } from "react";
import { useGlobalContext } from "@/context/globalContext";
import getItemGraph from "@/api/getItemGraph";
import SearchMenu from "@/components/SearchMenu";
import ItemCard from "@/components/ItemCard";

export default function Application({ params }) {
  const [currentItem, setCurrentItem] = useState();
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

      const fetchItemGraph = async () => {
        try {
          setIsLoading(true);
          const response = await getItemGraph(itemId);
          addSearchedItemsGraphs(response);
          console.log(response);
          console.log(searchedItems);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchItemGraph();
    }
  }, []);

  return (
    <>
      <SearchMenu addSearchedItems={addSearchedItems} items={searchedItems} />
      {currentItem && (
        <ItemCard item={currentItem} itemGraph={searchedItemsGraphs} />
      )}
    </>
  );
}
