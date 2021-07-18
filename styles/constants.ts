export const FONTS = {
  // Recoleta, sans-serif
  main: "'Poppins', sans-serif",
  heading: "'Volkhov', sans-serif",

  // 13px, 14px, 16px, 20px, 24.8px, 33.1958px, 36px, 44.3px, 71.2px
  smaller: "0.8125rem",
  small: "0.875rem",
  base: "1rem",
  md: "1.25rem",
  lg: "1.55rem",
  xl: "2rem",
  xxl: "2.25rem",
  big: "4.45rem",

  // font sizes in small screen
  mbSmaller: "0.625rem",
  mbBig: "2.77rem",

  regular: "300",
  bold: "500",
};

// max-width: 1520px, 990px, 768px, 640px
export const BREAKPOINTS = {
  sm: "550px",
  md: "768px",
  xmd: "846px",
  xxmd: "990px",
  lg: "1024px",
  xl: "1200px",
};

/**
 * Colors ===================================
 */
export const COLORS_LIGHT = {
  textMain: "hsl(211.6,8.2%,45.7%)",
  textEmphasis: "hsl(212.3,17.8%,28.6%)",
  bgPrimary: "hsl(0,0%,100%)",
  bgGrayLight: "hsl(200,42.9%,97.3%)",
  bgBlueLight: "hsl(201.2,43.6%,92.4%)",
  bgBlueLighter: "hsla(201, 44%, 92%, 0.1)",
  primary: "hsl(349,68.9%,53.3%)",
  orange: "hsl(39.5,99.2%,52.5%)",
  blueLight: "hsl(201, 44%, 92%)",
  white: "hsl(0,0%,100%)",
  black: "hsl(0,0%,0%)",
  border: "hsla(0, 0%, 0%, 0.05)",
  redTransparent: "hsla(349, 69%, 53%, 0.15)",
};

export const COLORS_DARK = {
  textMain: "hsl(211.6,8.2%,45.7%)",
  textEmphasis: "hsl(212.3,17.8%,28.6%)",
  bgPrimary: "hsl(273,52%,6%)",
  bgGrayLight: "hsl(200,42.9%,97.3%)",
  bgBlueLight: "hsl(201.2,43.6%,92.4%)",
  bgBlueLighter: "hsla(201, 44%, 92%, 0.1)",
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
  linearGradient: `linear-gradient(
    to bottom,
    ${COLORS_DARK.bgBlueLight},
    ${COLORS_DARK.bgBlueLighter} 85%
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
