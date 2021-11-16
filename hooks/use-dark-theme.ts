import { useState, useEffect } from "react";

export const useDarkTheme = (): [boolean, () => void] => {
  const [isThemeLight, setIsThemeLight] = useState(true);

  const setTheme = (mode: string) => {
    localStorage.setItem("theme", mode);
    setIsThemeLight(mode === "light");
  };

  const toggleTheme = () => {
    setTheme(isThemeLight ? "dark" : "light");
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return [isThemeLight, toggleTheme];
};
