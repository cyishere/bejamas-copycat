import { createContext } from "react";

interface ThemeContextInterface {
  isThemeLight: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextInterface | null>(null);
