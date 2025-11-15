import { create } from "zustand";
import {  ThemeState } from "./theme.state";
import { ThemeActions } from "./theme.actions";
import { persist } from "zustand/middleware";


export const useThemeStore = create<ThemeState & ThemeActions>()(
  persist(
    (set) => ({
      theme: "light",
      _hasHydrated: false,

      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),

      setTheme: (t) => set({ theme: t }),

      setHasHydrated: (value) => set({ _hasHydrated: value }),

      // setTheme: (theme: Theme) => {
          
      //     if (typeof window !== 'undefined') {
      //       set({ theme });
      //       const root = window.document.documentElement;
          
      //     if (theme === 'system') {
      //       const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      //         ? 'dark'
      //         : 'light';
      //       root.classList.remove('light', 'dark');
      //       root.classList.add(systemTheme);
      //       set({ resolvedTheme: systemTheme });
      //     } else {
      //       root.classList.remove('light', 'dark');
      //       root.classList.add(theme);
      //       set({ resolvedTheme: theme });
      //     }
      //   }
      // },
      
      // initializeTheme: () => {
      //   if (typeof window !== 'undefined') {
      //     const { theme } = get();
      //     const root = window.document.documentElement;
          
      //     if (theme === 'system') {
      //       const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      //         ? 'dark'
      //         : 'light';
      //       root.classList.add(systemTheme);
      //       set({ resolvedTheme: systemTheme });
      //     } else {
      //       root.classList.add(theme);
      //       set({ resolvedTheme: theme });
      //     }
          
      //     // Listener para cambios en el tema del sistema
      //     const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      //     const handleChange = (e: MediaQueryListEvent) => {
      //       if (get().theme === 'system') {
      //         const newTheme = e.matches ? 'dark' : 'light';
      //         root.classList.remove('light', 'dark');
      //         root.classList.add(newTheme);
      //         set({ resolvedTheme: newTheme });
      //       }
      //     };
          
      //     mediaQuery.addEventListener('change', handleChange);
      //   }
      // },

	  // setHasHydrated: (state: boolean) => set({ _hasHydrated: state }),

    }),
    {
      name: "app-theme", // clave del storage
      // skipHydration: true,
      onRehydrateStorage: () => (state:(ThemeActions & ThemeState) | undefined) => {
        if(state){
          state.setHasHydrated(true);
        }
      }
    }
  )
);
