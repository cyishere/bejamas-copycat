export const FONTS = {
  main: "'Poppins', sans-serif",
  heading: "Recoleta, sans-serif",

  smaller: `${13 / 16}rem`,
  small: `${14 / 16}rem`,
  base: `${16 / 16}rem`,
  md: `${20 / 16}rem`,
  lg: `${24.8 / 16}rem`,
  xl: `${32 / 16}rem`,
  xxl: `${36 / 16}rem`,
  big: `${71.2 / 16}rem`,

  // font sizes in small screen
  mbSmaller: `${10 / 16}rem`,
  mbBig: "2.77rem",

  regular: "300",
  bold: "500",
};

// max-width: 1520px, 990px, 768px, 640px
export const BREAKPOINTS = {
  sm: 550,
  md: 768,
  xmd: 846,
  xxmd: 990,
  lg: 1024,
  xl: 1200,
};

export const QUERIES = {
  smScreenAndLarger: `(min-width: ${BREAKPOINTS.sm / 16}rem)`,
  mdScreenAndLarger: `(min-width: ${BREAKPOINTS.md / 16}rem)`,
  xmdScreenAndLarger: `(min-width: ${BREAKPOINTS.xmd / 16}rem)`,
  xxmdScreenAndLarger: `(min-width: ${BREAKPOINTS.xxmd / 16}rem)`,
  lgScreenAndLarger: `(min-width: ${BREAKPOINTS.lg / 16}rem)`,
  xlScreenAndLarger: `(min-width: ${BREAKPOINTS.xl / 16}rem)`,
};

/**
 * Colors ===================================
 */
export const COLORS = {
  yellowLight: "hsl(50,90%,95%)",
  yellowDark: "hsl(37.7,92.1%,50.2%)",
};

export const COLORS_LIGHT = {
  textMain: "hsl(211.6,8.2%,45.7%)",
  textEmphasis: "hsl(212.3,17.8%,28.6%)",
  textButtonNormal: "hsl(0,0%,0%)",
  bgPrimary: "hsl(0,0%,100%)",
  bgGrayLight: "hsl(200,42.9%,97.3%)",
  bgBlueLight: "hsl(201.2,43.6%,92.4%)",
  bgBlueLighter: "hsla(201, 44%, 92%, 0.1)",
  bgHeader: "hsl(0deg 0% 100% / 0.5)",
  primary: "hsl(349,68.9%,53.3%)",
  orange: "hsl(39.5,99.2%,52.5%)",
  blueLight: "hsl(201, 44%, 92%)",
  white: "hsl(0,0%,100%)",
  black: "hsl(0,0%,0%)",
  border: "hsla(0, 0%, 0%, 0.05)",
  redTransparent: "hsla(349, 69%, 53%, 0.15)",
};

export const COLORS_DARK = {
  textMain: "hsla(0, 0%, 100%, 0.65)",
  textEmphasis: "hsl(212.3,17.8%,28.6%)",
  textButtonNormal: "hsl(0,0%,100%)",
  bgPrimary: "hsl(273,52%,6%)",
  bgGrayLight: "hsl(265,29%,12%)",
  bgGradientDark: "hsl(268.4,31.1%,12%)",
  bgGradientDarker: "hsl(261.4,43.8%,6.3%)",
  bgHeader: "hsl(266.3deg 50% 6.3% / 0.5)",
  primary: "hsl(349,68.9%,53.3%)",
  orange: "hsl(39.5,99.2%,52.5%)",
  blueLight: "hsl(201, 44%, 92%)",
  white: "hsl(0,0%,100%)",
  black: "hsl(0,0%,0%)",
  border: "hsla(0, 0%, 0%, 0.05)",
  redTransparent: "hsla(349, 69%, 53%, 0.15)",
};

/**
 * Styles ======================================
 */
export const STYLES_LIGHT = {
  logo: COLORS_LIGHT.black,
  navLink: COLORS_LIGHT.textEmphasis,
  title: COLORS_LIGHT.textEmphasis,
  quoteMark: COLORS_LIGHT.bgBlueLight,
  dropdownBg: COLORS_LIGHT.white,
  dropdownLinkBg: COLORS_LIGHT.white,
  dropdownTitle: COLORS_LIGHT.textEmphasis,
  dropdownSubLinkHover: COLORS_LIGHT.black,
  navBottomBg: `hsl(0deg 0% 100% / 0.7)`,
  linearGradient: `linear-gradient(
    to bottom,
    ${COLORS_LIGHT.bgBlueLight},
    ${COLORS_LIGHT.bgBlueLighter} 85%
  )`,
  linearGradientPrimary: `linear-gradient(
    to bottom,
    ${COLORS_LIGHT.orange},
    ${COLORS_LIGHT.primary} 70%
  )`,
  linearGradientBlur: `linear-gradient(317deg,rgba(148,142,154,0.35),rgba(239,235,243,0.49) 60%,rgba(94,78,97,0.77) 160%)`,
  redShadow: `0 9px 60px 0 ${COLORS_LIGHT.redTransparent}`,
  xlShadow: `0 -10px 50px -12px rgb(0 0 0 / 25%)`,
  lgShadow: `0 0 25px 6px rgb(0 0 0 / 10%), 0 0 14px 10px rgb(0 0 0 / 4%)`,
};

export const STYLES_DARK = {
  logo: COLORS_DARK.white,
  navLink: `hsla(0, 0%, 100%, 0.9)`,
  title: `hsla(0, 0%, 100%, 0.9)`,
  quoteMark: COLORS_DARK.bgGradientDark,
  dropdownBg: COLORS_DARK.bgGradientDark,
  dropdownLinkBg: `hsla(270, 50%, 81%, 0.08)`,
  dropdownTitle: `hsla(0, 0%, 100%, 0.9)`,
  dropdownSubLinkHover: `hsla(0, 0%, 100%, 0.9)`,
  navBottomBg: `hsl(266.3deg 50% 6.3% / 0.5)`,
  linearGradient: `linear-gradient(
    to bottom,
    ${COLORS_DARK.bgGradientDark},
    ${COLORS_DARK.bgGradientDarker} 85%
  )`,
  linearGradientPrimary: `linear-gradient(
    to bottom,
    ${COLORS_DARK.orange},
    ${COLORS_DARK.primary} 70%
  )`,
  linearGradientBlur: `linear-gradient(317deg,rgba(148,142,154,0.35),rgba(239,235,243,0.49) 60%,rgba(94,78,97,0.77) 160%)`,
  redShadow: `0 9px 60px 0 ${COLORS_DARK.redTransparent}`,
  xlShadow: `0 -10px 50px -12px rgb(0 0 0 / 25%)`,
  lgShadow: `0 0 25px 6px rgb(0 0 0 / 10%), 0 0 14px 10px rgb(0 0 0 / 4%)`,
};
