import { AppProps } from "next/app";
import { useState } from "react";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "@/styles/themes";
import GlobalStyles from "@/styles/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light");

  console.log("lightTheme:", lightTheme);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
