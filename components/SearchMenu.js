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
import getItem from "@/api/getItem";

export default function SearchMenu({ addSearchedItems, items }) {
  const [itemQuery, setItemQuery] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
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
      //har lagt den här jämför innan-/utanför
      setItemQuery(e.target.value);
      handleSearch(itemQuery);
    }, 300);
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

  return (
    <>
      <p className="text-sm text-muted-foreground">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </p>
      {/* lägg till elemnent för error rendering (kontrollera shadcn) */}
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
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.icon_large}
                      alt={item.description}
                      width={50}
                    />
                    <div>
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
