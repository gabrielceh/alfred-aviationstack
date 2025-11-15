"use client";

import { ChangeEvent, useEffect, useState } from "react";

interface SearchBarProps {
  onChange?: (value: string) => void;
  value?: string;
}

export  function SearchBar({ onChange, value }: SearchBarProps) {
  const [valueToShow, setValueToShow] = useState<string>(value || "");

  useEffect(() => {
    if(!onChange) return;
    onChange(valueToShow);
  }, [valueToShow]);


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValueToShow(e.target.value);
  }

  return (
    <input 
      type="text" 
      value={valueToShow} 
      onChange={handleChange} 
      placeholder="Buscar aeropuertos..." 
      className="bg-white rounded-full w-full py-2 px-4 text-dark-blue text-md"
    />

  )
}
