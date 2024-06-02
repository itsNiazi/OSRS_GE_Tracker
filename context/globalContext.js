"use client";

import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();
export const GlobalContextProvider = ({ children }) => {
  const [searchedItems, setSearchedItems] = useState([]);
  const [searchedItemsGraphs, setSearchedItemsGraphs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function addSearchedItems(items) {
    setSearchedItems(items);
  }
  function addSearchedItemsGraphs(items) {
    setSearchedItemsGraphs(items);
  }

  return (
    <GlobalContext.Provider
      value={{
        searchedItems,
        addSearchedItems,
        searchedItemsGraphs,
        addSearchedItemsGraphs,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export function useGlobalContext() {
  return useContext(GlobalContext);
}
