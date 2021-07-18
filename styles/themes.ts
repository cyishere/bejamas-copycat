import { DefaultTheme } from "styled-components";
import { COLORS_LIGHT, COLORS_DARK, STYLES, STYLES_DARK } from "./constants";

export const lightTheme: DefaultTheme = {
  colors: { ...COLORS_LIGHT },
  styles: { ...STYLES },
};

export const darkTheme: DefaultTheme = {
  colors: { ...COLORS_DARK },
  styles: { ...STYLES_DARK },
};
