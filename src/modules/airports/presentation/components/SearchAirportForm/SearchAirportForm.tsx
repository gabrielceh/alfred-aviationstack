"use client";

import { SearchIcon } from "@/assets/icons";
import { Button, SearchBar } from "@/modules/shared/components";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface SearchAirportFormProps {
  className?: string;
}

export function SearchAirportForm({className}: SearchAirportFormProps) {
  const [value, setValue] = useState<string>("");
  const router = useRouter();

  const handleChange = (value: string) => {
    setValue(value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!value.trim()) return;
    router.push(`/search?q=${value.trim()}`);

  }

  const onClick = () => {
    if(!value.trim()) return;
    router.push(`/search?q=${value.trim()}`);

  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      <SearchBar value={value} onChange={handleChange}/>
      <Button onClick={onClick}>
        <span className="flex items-center gap-3 justify-center">
          <SearchIcon/>
          Buscar
        </span>
      </Button>
    </form>
  )
}
