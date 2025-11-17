"use client";

import clsx from "clsx";
import { useThemeStore } from "@/modules/theme/store";
import { ComponentPropsWithRef } from "react";
import { SearchHistoryItem } from "../SearchHistoryItem/SearchHistoryItem";

interface SearchHistoryContainerProps extends ComponentPropsWithRef<"div"> {
  /**
   *   Lista de elementos del historial que se mostrarán.
   */
  items: string[];

  /**
   *   Función que se ejecuta al hacer clic en un elemento del historial.
   */
  onSelectItem?: (item:string) => void;

  /** 
   *  Función que se ejecuta al eliminar un elemento del historial.
   */
  onDeleteItem?: (item:string) => void;
}


/**
 * Contenedor para mostrar el historial de búsquedas.
 *
 * Renderiza una lista de elementos que pueden ser seleccionados o eliminados.
 * El estilo visual depende del tema actual obtenido desde `useThemeStore`.
 *
 * @component
 *
 * @param {SearchHistoryContainerProps} props
 *   Las props del componente.
 *
 * @returns {JSX.Element}
 *   Un contenedor con los elementos del historial de búsqueda renderizados.
 */
export function SearchHistoryContainer({items, onSelectItem, onDeleteItem, ref}:SearchHistoryContainerProps) {
  const theme = useThemeStore(state=>state.theme);

  return (
    <div
      ref={ref}
      className={clsx("w-full rounded-md my-2 max-h-[200px] overflow-y-auto",
      theme === "dark" ? "bg-slate-800" : "bg-slate-50",
    )}>
      {
        items.map((item, index)=>{
          return <SearchHistoryItem key={index} item={item} onDelete={onDeleteItem} onClickItem={onSelectItem}/>
        })
      }
    </div>
  )
}
