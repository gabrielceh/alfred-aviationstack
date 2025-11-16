// components/ThemeToggle.tsx
'use client';


import { useThemeStore } from "@/modules/theme/store";
import clsx from "clsx";



export function ThemeToggle() {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);
  
  
  return (
    <div className={clsx("inline-flex items-center gap-1 rounded-lg  p-1",
      theme === "light" ? "bg-gray-200" : "bg-gray-800"
    )}>

      <button
        title={theme === "light" ? "Cambiar a oscuro" : "Cambiar a claro"}
        onClick={() => !!setTheme && setTheme(theme === "light" ? "dark" : "light")}
        className={`
          cursor-pointer flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium
          transition-all duration-200
          
        `}
        aria-label={theme === "light" ? "Cambiar a oscuro" : "Cambiar a claro"}
      > 
        <span className="inline">
          {theme === "light" ? "🌞" : "🌙"}
        </span>
      </button>
    
    </div>
  );
}