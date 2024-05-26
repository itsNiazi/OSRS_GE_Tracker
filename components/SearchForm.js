import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import getItem from "@/api/getItem";
import getItemGraph from "@/api/getItemGraph";

export default function SearchForm({
  addSearchedItems,
  addSearchedItemsGraphs,
}) {
  const [itemQuery, setItemQuery] = useState("");
  //Think about how to solve loading state (useContext?)
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch() {
    if (!itemQuery) {
      setError("Please enter an item!");
      return;
    }

    try {
      setError("");
      setIsLoading(true);
      const response = await getItem(itemQuery.toLowerCase());
      const itemId = response.items[0].id;
      //This for now only retrieves the graph for the first returned item.
      //Need to be reworked to perhaps return data for specific item onEvent with modal/dialog?
      const graphResponse = await getItemGraph(itemId);
      addSearchedItems(response.items);
      addSearchedItemsGraphs(graphResponse);
      console.log(graphResponse);
      console.log(response);
    } catch (err) {
      setError("An error occured while fetching the requested item!");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="text"
        placeholder="Enter name of item"
        onChange={(e) => setItemQuery(e.target.value)}
      />
      <Button type="Submit" onClick={handleSearch}>
        Search
      </Button>
      {error && <p>{error}</p>}
    </div>
  );
}
