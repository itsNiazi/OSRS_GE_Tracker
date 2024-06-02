"use server";

export default async function getItem(item) {
  const baseURL =
    "https://secure.runescape.com/m=itemdb_oldschool/api/catalogue/items.json?category=1&alpha=";
  const queryURL = `${baseURL}${item}&page=1`;
  const response = await fetch(queryURL);
  return response.json();
}
