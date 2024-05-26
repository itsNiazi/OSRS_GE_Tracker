import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import getItem from "@/api/getItem";
import getItemGraph from "@/api/getItemGraph";

export default function SearchForm() {
  const [itemQuery, setItemQuery] = useState();

  async function handleSearch() {
    const response = await getItem(itemQuery.toLowerCase());
    const itemId = response.items[0].id;
    const graphResponse = await getItemGraph(itemId);
    console.log(graphResponse);
    console.log(response);
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
    </div>
  );
}
