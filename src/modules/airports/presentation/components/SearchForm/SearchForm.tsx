"use client";

import { SearchIcon } from "@/assets/icons";
import { Button, SearchBar } from "@/modules/shared/components";
import { useState } from "react";
import { useRouter } from "next/navigation";


export function SearchForm() {
  const [value, setValue] = useState<string>("");
  const router = useRouter();

  const handleChange = (value: string) => {
    setValue(value);
  }

  const onClick = () => {
    if(!value.trim()) return;
    router.push(`/search?value=${value.trim()}`);

  }

  return (
    <>
      <SearchBar value={value} onChange={handleChange}/>
      <Button className="w-4/12" onClick={onClick}>
        <span className="flex items-center gap-3 justify-center">
          <SearchIcon/>
          Buscar
        </span>
      </Button>
    </>
  )
}
