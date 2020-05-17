import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }: any) => theme.primary};
    color: ${({ theme }: any) => theme.secondary};
    transition: all 0.4s linear;
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
