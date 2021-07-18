import { AppProps } from "next/app";
import { useState } from "react";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "@/styles/themes";
import GlobalStyles from "@/styles/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  const [isThemeLight, setIsThemeLight] = useState(true);

  return (
    <ThemeProvider theme={isThemeLight ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Component
        {...pageProps}
        setIsThemeLight={setIsThemeLight}
        isThemeLight={isThemeLight}
      />
    </ThemeProvider>
  );
}

export default MyApp;
