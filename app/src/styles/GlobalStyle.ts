import {
  createGlobalStyle,
  GlobalStyleComponent,
  DefaultTheme
} from "styled-components";

const GlobalStyle: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
  @import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);
  
  ::-moz-selection {
    background: #c5c5c5;
    color: #000;
  }
  ::selection {
    background: #c5c5c5;
    color: #000;
  }

  html, body {
    width: 100%;
    min-width: 1024px;
    font-family: 'Noto Sans KR', sans-serif;
  }
  input {
    &:-webkit-autofill {
      box-shadow: 0 0 0 1000px rgba(255, 255, 255, 0.8) inset;
    }
    border: solid 1px #ffa2c0;
    border-radius: 5px;
    &[type=password] {
    font-family: sans-serif;
    }
    &:focus {
      outline: none;
    }
  }
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
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  a {
    &:link{
      text-decoration: none;
    }
    &:visited{
      text-decoration: none;
    }
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  div {
    &::-webkit-scrollbar {
      width: 6px;
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      width: 6px;
      background: rgb(160, 160, 160);
    }
  }
`;

export const COLORS = {
  main1: "#f9f9f9" as const,
  main2: "#d0d0d0" as const,
  main3: "#a0a0a0" as const,
  serve1: "#c15fff" as const,
  serve2: "#9e4bd2" as const,
  serve3: "#7639a2" as const
};

export default GlobalStyle;
