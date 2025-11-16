"use client";

import clsx from "clsx";
import { ComponentPropsWithRef, ReactNode } from "react";

export interface TabItem {
  value: string;
  label: string;
  component: ReactNode;
  isDisabled?: boolean;
}

interface TabsProps {
  selectedTabValue: string;
  onChange: (value: string) => void;
  items: TabItem[];
}

export function Tabs({items, selectedTabValue, onChange}: TabsProps) {
  return (
    <div className="flex flex-col gap-16">
      <section className="w-full flex justify-between gap-2 bg-slate-700 py-1.5 px-3 rounded-sm">
        {
            items.map((item)=>(
            <TabItem 
              key={item.value} 
              value={item.value}
              onChangeValue={()=>onChange(item.value)} 
              isSelected={selectedTabValue === item.value} 
              isDisabled={item.isDisabled}
            >
              {item.label}
            </TabItem>
          ))
        }
      </section>
      <section className="w-full">
        {items.find((item)=>item.value === selectedTabValue)?.component}
      </section>
    </div>
  )
}


interface TabItemProps extends ComponentPropsWithRef<'button'> {
  value: string;
  onChangeValue: (value: string) => void;
  isSelected: boolean;
  isDisabled?: boolean;
}
const TabItem = ({isSelected, isDisabled, value, onChangeValue, children, ref, ...props}:TabItemProps) => {
  const handleClick = () => {
    if(isDisabled) return;
    onChangeValue(value);
  }

  return (
    <button 
      ref={ref} 
      className={clsx(
        "w-full font-bold text-slate-400 truncate px-4 py-2 rounded-md transition-colors duration-200 hover:bg-dark-blue hover:text-white hover:opacity-75", 
        isSelected && "bg-dark-blue text-white hover:opacity-100",
        !isDisabled ? "cursor-pointer" : "cursor-not-allowed hover:bg-transparent hover:text-slate-400 hover:opacity-75"
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  )

}