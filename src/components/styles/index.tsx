import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: var(--white);
    color: var(--black);
    transition: all 0.4s linear;

    &.dark {
      --white: #424242;
      --black: #fafafa;
      --gray: #d5d5d5;
      --grayBold: #aaaaaa;
      --blue: #566fff;
      --blueLight: #b1c2ff;
      --blueExtraLight: #d1daff;
    }

    &.light {
      --white: #fafafa;
      --black: #424242;
      --gray: #d5d5d5;
      --grayBold: #aaaaaa;
      --blue: #566fff;
      --blueLight: #b1c2ff;
      --blueExtraLight: #d1daff;
    }
  }
  
  div#gatsby-focus-wrapper {
    display: flex;
    justify-content center;
  }

`;

const light = {
  primary: "#FFFFFF",
  secondary: "#363537",
};

const dark = {
  primary: "#363537",
  secondary: "#FFFFFF",
};

export const colors = {
  light,
  dark,
};
