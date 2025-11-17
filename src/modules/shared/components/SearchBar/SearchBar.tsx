"use client";

import clsx from "clsx";
import {  ComponentPropsWithRef } from "react";


export  function SearchBar({ onChange, value, onBlur,  onFocus, ref, ...props }: ComponentPropsWithRef<"input">) {  
  return (
    <input 
      {...props}
      type="text" 
      ref={ref}
      value={value} 
      onChange={onChange} 
      placeholder="Buscar aeropuertos..." 
      className={clsx("bg-white rounded-full w-full py-2 px-4 text-dark-blue text-md", props.className)}
      onFocus={onFocus}
      onBlur={onBlur}
    />

  )
}
