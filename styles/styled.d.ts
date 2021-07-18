import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      textMain: string;
      textEmphasis: string;
      bgPrimary: string;
      bgGrayLight: string;
      bgBlueLight: string;
      bgBlueLighter: string;
      primary: string;
      orange: string;
      blueLight: string;
      white: string;
      black: string;
      border: string;
      redTransparent: string;
    };

    styles: {
      linearGradient: string;
      linearGradientPrimary: string;
      linearGradientBlur: string;
      redShadow: string;
      xlShadow: string;
      lgShadow: string;
    };
  }
}
