"use server";

export default async function getItemGraph() {
  const baseURL = "https://secure.runescape.com/m=itemdb_oldschool/api/graph/";
  const itemId = "12399";
  const queryURL = `${baseURL}${itemId}.json`;
  const response = await fetch(queryURL);
  return response.json();
}
