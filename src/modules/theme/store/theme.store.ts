import { create } from "zustand";
import {  ThemeState } from "./theme.state";
import { ThemeActions } from "./theme.actions";
import { persist } from "zustand/middleware";


export const useThemeStore = create<ThemeState & ThemeActions>()(
  persist(
    (set) => ({
      theme: "dark",
      _hasHydrated: false,

      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),

      setTheme: (t) => set({ theme: t }),

      setHasHydrated: (value) => set({ _hasHydrated: value }),

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
