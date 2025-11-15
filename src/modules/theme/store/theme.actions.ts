import { Theme } from "./theme.state";

// export interface ThemeActions {
//   setTheme: (theme: Theme) => void;
//   initializeTheme: () => void;
//   setHasHydrated: (state: boolean) => void;
// }

export interface ThemeActions {
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  setHasHydrated: (v: boolean) => void;
}

