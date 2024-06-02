import { useState, useEffect, useRef } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import Link from "next/link";
import Image from "next/image";
import getItem from "@/api/getItem";
import ShortcutCommand from "./ui/shortcutCommand";
import getOS from "../utils/getOS";

export default function SearchMenu({ addSearchedItems, items }) {
  const [itemQuery, setItemQuery] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [os, setOS] = useState();
  const debounceTimeout = useRef(null);

  async function handleSearch() {
    if (!itemQuery) {
      setError("Please enter an item!");
      return;
    }
    if (itemQuery.length > 2) {
      try {
        setError("");
        const response = await getItem(itemQuery.toLowerCase());
        console.log(response);
        addSearchedItems(response.items);
      } catch (err) {
        setError("An error occured while fetching the requested item!");
        console.log(error);
      } finally {
      }
    }
  }
  function handleChange(e) {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      //kontrollera mulitple renders bra/dåligt?
      //krockar med onChange? att det inte registrerat
      //har lagt den här jämför innan-/utanför
      //useRef istället för useState för att minimera rendering?
      setItemQuery(e.target.value);
      handleSearch(itemQuery);
    }, 200);
  }

  useEffect(() => {
    function onDown(e) {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    }
    document.addEventListener("keydown", onDown);
    return () => document.removeEventListener("keydown", onDown);
  }, []);

  useEffect(() => {
    const osType = getOS();
    setOS(osType);
  }, []);

  return (
    <>
      {os && <ShortcutCommand osType={os} />}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput
            placeholder="Type a command or search..."
            onChange={handleChange}
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {items.map((item, index) => (
                <CommandItem key={index} value={item.name}>
                  <Link className="w-full" href={`/item/${item.id}`}>
                    <div className="flex items-center space-x-4 ">
                      <Image
                        src={item.icon_large}
                        alt={item.description}
                        width={50}
                        height={50}
                      />
                      <div>
                        <p className="text-sm font-medium">{item.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
