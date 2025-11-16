"use client";

import { useThemeStore } from "@/modules/theme/store";
import clsx from "clsx";
import { ComponentPropsWithRef, ReactNode } from "react";

export interface TabItem {
  /** Valor único que identifica la pestaña. */
  value: string;

  /** Texto visible dentro del botón de la pestaña. */
  label: string;

  /** Componente o contenido que se debe renderizar cuando la pestaña está activa. */
  component: ReactNode;

  /** Si es true, la pestaña aparece deshabilitada y no ejecuta acciones. */
  isDisabled?: boolean;
}


interface TabsProps {
  /**
   * Valor de la pestaña actualmente seleccionada.
   * Debe coincidir con algún `item.value`.
   */
  selectedTabValue: string;

  /**
   * Función que se ejecuta cuando el usuario cambia de pestaña.
   * Recibe el nuevo valor seleccionado.
   */
  onChange: (value: string) => void;

  /**
   * Lista de pestañas disponibles, con su contenido asociado.
   */
  items: TabItem[];
}


/**
 * Componente de pestañas (Tabs) controlado externamente.
 *
 * Renderiza una barra superior con los botones de pestañas y,
 * debajo, el contenido correspondiente a la pestaña activa.
 *
 * @example Uso básico:
 * ```tsx
 * const tabs = [
 *   { value: "general", label: "General", component: <GeneralSettings /> },
 *   { value: "profile", label: "Perfil", component: <ProfileSettings /> },
 * ];
 *
 * <Tabs
 *   items={tabs}
 *   selectedTabValue={current}
 *   onChange={setCurrent}
 * />
 * ```
 *
 * @param props - Propiedades del componente Tabs.
 */
export function Tabs({items, selectedTabValue, onChange}: TabsProps) {
  const theme = useThemeStore(state=>state.theme)
  return (
    <div className="flex flex-col gap-16">
      <section className={clsx(
        "w-full flex justify-between gap-2 py-1.5 px-3 rounded-sm",
        theme === "light" ? "bg-slate-300" : "bg-slate-700"
      )}>
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


interface TabItemButtonProps extends ComponentPropsWithRef<"button"> {
  /** Valor único que identifica esta pestaña. */
  value: string;

  /** Función que se ejecuta al hacer clic, enviando el valor seleccionado. */
  onChangeValue: (value: string) => void;

  /** Indica si esta pestaña es actualmente la seleccionada. */
  isSelected: boolean;

  /** Si está deshabilitada, no responde a clics. */
  isDisabled?: boolean;
}


/**
 * Botón individual de una pestaña.
 *
 * Este componente es interno al sistema de Tabs y
 * se encarga únicamente de la interacción y estilos.
 *
 * @example:
 * ```tsx
 * <TabItemButton
 *   value="general"
 *   isSelected={true}
 *   onChangeValue={console.log}
 * >
 *   General
 * </TabItemButton>
 * ```
 */
const TabItem = ({isSelected, isDisabled, value, onChangeValue, children, ref, ...props}:TabItemButtonProps) => {
  const theme = useThemeStore(state=>state.theme);

  const handleClick = () => {
    if(isDisabled) return;
    onChangeValue(value);
  }

  return (
    <button 
      ref={ref} 
      {...props}
      className={clsx(
        "w-full font-bold truncate px-4 py-2 rounded-md transition-colors duration-200 hover:bg-dark-blue hover:text-white hover:opacity-75", 
        theme === "light" ? "text-slate-700 " : "text-slate-400 ",
        isSelected && "bg-dark-blue text-white hover:opacity-100",
        !isDisabled ? "cursor-pointer" : "cursor-not-allowed hover:bg-transparent hover:text-slate-400 hover:opacity-75"
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  )

}