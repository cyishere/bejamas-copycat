import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "@/styles/themes";
import GlobalStyles from "@/styles/GlobalStyles";
import { ThemeContext } from "@/utils/theme-context";
import { useDarkTheme } from "@/hooks/use-dark-theme";

function MyApp({ Component, pageProps }: AppProps) {
  const [isThemeLight, toggleTheme] = useDarkTheme();

  return (
    <ThemeContext.Provider value={{ isThemeLight, toggleTheme }}>
      <ThemeProvider theme={isThemeLight ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default MyApp;
