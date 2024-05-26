"use client";
import getItem from "@/api/getItem";
import getItemGraph from "@/api/getItemGraph";
import { Button } from "@/components/ui/button";

export default function Application() {
  async function handleSearch() {
    const response = await getItem();
    const graphResponse = await getItemGraph();
    console.log(response);
    console.log(graphResponse);
  }
  return (
    <>
      <Button variant="tw" size="lg" onClick={handleSearch}>
        Click me!
      </Button>
    </>
  );
}
