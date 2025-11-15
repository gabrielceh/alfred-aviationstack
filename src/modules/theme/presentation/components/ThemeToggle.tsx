// components/ThemeToggle.tsx
'use client';


import { useThemeStore } from "@/modules/theme/store";



export function ThemeToggle() {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);
  
  const themes = [
    { value: 'light' as const, icon: "🌞", label: 'Claro' },
    { value: 'dark' as const, icon: "🌙", label: 'Oscuro' },
  ];
  
  return (
    <div className="inline-flex items-center gap-1 rounded-lg bg-gray-200 dark:bg-gray-800 p-1">
      {themes.map(({ value, icon, label }) => (
        <button
          key={value}
          onClick={() => !!setTheme && setTheme(value)}
          className={`
            flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium
            transition-all duration-200
            ${
              theme === value
                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }
          `}
          aria-label={label}
        > 
          <span className="inline sm:hidden">{icon}</span>
          <span className="hidden sm:inline">{label}</span>
        </button>
      ))}
    </div>
  );
}