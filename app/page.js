"use client";
import getItem from "@/api/getItem";
import getItemGraph from "@/api/getItemGraph";

export default function Application() {
  async function handleSearch() {
    const response = await getItem();
    const graphResponse = await getItemGraph();
    console.log(response);
    console.log(graphResponse);
  }
  return (
    <>
      <button onClick={handleSearch}>Click!</button>
    </>
  );
}
