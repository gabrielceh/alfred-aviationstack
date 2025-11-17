"use client";

import { SearchIcon } from "@/assets/icons";
import { Button, SearchBar } from "@/modules/shared/components";
import { ChangeEvent, FocusEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { SearchHistoryContainer } from "@/modules/searchHistory/presentation/components";
import { useSearchHistoryStore } from "@/modules/searchHistory/presentation/store";

interface SearchAirportFormProps {
  className?: string;
}

export function SearchAirportForm({className}: SearchAirportFormProps) {
  const [value, setValue] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const historyRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();
  const searchHistory = useSearchHistoryStore(state=>state.items);
  const addItemToHistory = useSearchHistoryStore(state=>state.addItem);
  const deleteFromSearchHistory = useSearchHistoryStore(state=>state.deleteItems);


  // Cerrar cuando se hace click fuera
  useEffect(() => {
    if (!isFocused) return;

    function handleClickOutside(e: MouseEvent) {
      if (!wrapperRef.current || !historyRef.current) return;

      // si el click NO está dentro del wrapper, cerrar
      if (!wrapperRef.current.contains(e.target as Node) && !historyRef.current?.contains(e.target as Node)) {
        setIsFocused(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isFocused]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const targetValue = event.target.value;
    if (targetValue === value) {
      return
    }
    setValue(event.target.value);
  }
  
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!value.trim()) return;

    if(inputRef.current){
      inputRef.current.blur();
    }
    addItemToHistory(value.trim());
    setIsFocused(false);
    router.push(`/search?q=${value.trim()}`);

  }

  const onClick = async() => {
    if(!value.trim()) return;
    if(inputRef.current){
      inputRef.current.blur();
    }
    addItemToHistory(value.trim());
    setIsFocused(false);
    router.push(`/search?q=${value.trim()}`);
  }

  const onSelectSearchHistoryItem = (item:string) => {
    console.log(item);
    router.push(`/search?q=${item.trim()}`);
  }

  const onDeleteSearchHistoryItem = (item:string) => {
    deleteFromSearchHistory(item);
  }

  const onBlur = (event:FocusEvent<HTMLInputElement>) => {
    const next = event.relatedTarget as HTMLElement | null;
    // Si el siguiente foco está dentro del historial, NO cerrar
    if (next && historyRef.current?.contains(next)) {
      return;
    }
    // Caso normal: cerrar el panel
    setIsFocused(false);
  }

  return (
    <form ref={wrapperRef} className={clsx(className, "relative")} onSubmit={handleSubmit} >
      <SearchBar
        ref={inputRef} 
        value={value} 
        onChange={handleChange}
        onFocus={()=>setIsFocused(true)}
        onBlur={onBlur}
      />
      <Button onClick={onClick}>
        <span className="flex items-center gap-3 justify-center">
          <SearchIcon/>
          Buscar
        </span>
      </Button>
    {
      isFocused && <div className="absolute w-full top-full z-99">
        <SearchHistoryContainer 
          ref={historyRef} 
          items={searchHistory} 
          onSelectItem={onSelectSearchHistoryItem}
          onDeleteItem={onDeleteSearchHistoryItem}
        />
      </div>
    }
    </form>
  )
}
