import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      textMain: string;
      textEmphasis: string;
      textButtonNormal: string;
      bgPrimary: string;
      bgGrayLight: string;
      bgBlueLight: string;
      bgBlueLighter: string;
      bgGradientDark: string;
      bgGradientDarker: string;
      bgHeader: string;
      primary: string;
      orange: string;
      blueLight: string;
      white: string;
      black: string;
      border: string;
      redTransparent: string;
    };

    styles: {
      logo: string;
      navLink: string;
      title: string;
      quoteMark: string;
      linearGradient: string;
      linearGradientPrimary: string;
      linearGradientBlur: string;
      redShadow: string;
      xlShadow: string;
      lgShadow: string;
    };
  }
}
