import { createGlobalStyle } from "styled-components";
import { BREAKPOINTS, FONTS } from "./constants";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Recoleta";
    src: local("Recoleta Bold"), local("Recoleta-Bold"),
      url("/fonts/Recoleta-Bold.woff2") format("woff2"),
      url("/fonts/Recoleta-Bold.woff") format("woff"),
      url("/fonts/Recoleta-Bold.ttf") format("truetype");
    font-weight: 700;
    font-style: normal;
  }

  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* =============== COPYCAT ================ */
  html {
    font-size: 16px;
  }

  body {
    font-family: ${FONTS.main};
    line-height: 1.8;
    font-weight: ${FONTS.regular};
    color: ${({ theme }) => theme.colors.textMain};
    background-color: ${({ theme }) => theme.colors.bgPrimary};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${FONTS.heading};
    color: ${({ theme }) => theme.styles.title};
    line-height: 1.2;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }

  strong {
    font-weight: ${FONTS.bold}
  }

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    body {
      font-size: ${FONTS.md}
    }
  }
`;

export default GlobalStyles;
