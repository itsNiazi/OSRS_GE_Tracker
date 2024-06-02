"use server";

export default async function getItemGraph(itemId) {
  const baseURL = "https://secure.runescape.com/m=itemdb_oldschool/api/graph/";
  const queryURL = `${baseURL}${itemId}.json`;
  const response = await fetch(queryURL);
  return response.json();
}
