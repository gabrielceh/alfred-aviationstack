"use client";

import { ChangeEvent, useEffect, useState } from "react";

interface SearchBarProps {
  /**
   * Función que se ejecuta cada vez que cambia el valor del input.
   * Recibe el texto ingresado como argumento.
   */
  onChange?: (value: string) => void;

  /**
   * Valor inicial del campo de búsqueda.
   * Si no se proporciona, inicia como cadena vacía.
   */
  value?: string
}

/**
 * Campo de búsqueda controlado internamente, que notifica cambios
 * mediante `onChange`. Mantiene sincronía entre el valor recibido por props
 * y el valor mostrado localmente.
 *
 * ## Funcionamiento
 * - El estado local `valueToShow` almacena lo que se escribe.
 * - Cada vez que `valueToShow` cambia, se llama a `onChange` (si existe).
 * - Si la prop `value` cambia externamente, **no** actualiza el input,
 *   haciendo que el componente actúe como *semi-controlado*.
 *
 * Si deseas que el componente sea 100% controlado, puedo ajustarlo sin problema.
 *
 * ## Ejemplo básico:
 * ```tsx
 * <SearchBar onChange={(v) => console.log(v)} />
 * ```
 *
 * ##Con valor inicial:
 * ```tsx
 * <SearchBar value="Bogotá" onChange={setTerm} />
 * ```
 *
 * @param props - Propiedades del componente SearchBar.
 */
export  function SearchBar({ onChange, value }: SearchBarProps) {
  const [valueToShow, setValueToShow] = useState<string>(value || "");

  useEffect(() => {
    if(!onChange) return;
    onChange(valueToShow);
  }, [valueToShow]);

    /**
   * Maneja el cambio del input actualizando el estado local.
   */
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
