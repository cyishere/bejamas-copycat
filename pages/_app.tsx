import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "@/styles/themes";
import GlobalStyles from "@/styles/GlobalStyles";
import { useDarkTheme } from "@/hooks/use-dark-theme";

function MyApp({ Component, pageProps }: AppProps) {
  const [isThemeLight, toggleTheme] = useDarkTheme();

  return (
    <ThemeProvider theme={isThemeLight ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Component
        {...pageProps}
        toggleTheme={toggleTheme}
        isThemeLight={isThemeLight}
      />
    </ThemeProvider>
  );
}

export default MyApp;
