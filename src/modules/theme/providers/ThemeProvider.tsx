"use client";

import { useEffect } from "react";
import { useThemeStore } from "../store";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useThemeStore((state) => state.theme);
  const hasHydrated = useThemeStore((state) => state._hasHydrated);
  
  useEffect(() => {
    if(typeof document === 'undefined' || !hasHydrated) return;

    const root = document.documentElement;
    console.log(theme);
    if (theme === "dark") {
      root.style.setProperty("--background", "#0A162D");
      root.style.setProperty("--foreground", "#ededed");
    } else {
      root.style.setProperty("--background", "#ededed");
      root.style.setProperty("--foreground", "#0A162D");
    }
  }, [theme, hasHydrated]);

  return <>{children}</>;
}
