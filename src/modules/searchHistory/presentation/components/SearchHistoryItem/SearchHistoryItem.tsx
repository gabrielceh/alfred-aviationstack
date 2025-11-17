"use client";
import clsx from "clsx";
import {  useThemeStore } from "@/modules/theme/store";
import { MouseEvent } from "react";

interface SearchHistoryItemProps {
  item: string;
  onDelete?: (item:string) => void;
  onClickItem?: (item:string) => void;
}

export function SearchHistoryItem({item, onClickItem, onDelete}:SearchHistoryItemProps) {
  const theme = useThemeStore(state=>state.theme);

  const onClickDelete = (event:MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if(onDelete){
      onDelete(item);
    }
  };

  const onClickItemLabel = (event:MouseEvent<HTMLButtonElement>) => {    
    event.stopPropagation();
    if(onClickItem){
      onClickItem(item);
    }
  };

  return (
    <div className={clsx("cursor-pointer flex justify-between items-center px-4 py-2 border-b border-slate-300 transition-colors duration-200 ",
      theme === "dark" ? "hover:bg-slate-900" : "hover:bg-slate-200",

    )}
    > 
      <button type="button" className="cursor-pointer w-full text-left" onClick={onClickItemLabel}>{item}</button>
      <button type="button" className="cursor-pointer text-sm" onClick={onClickDelete}>✖️</button>
    </div>
  )
}