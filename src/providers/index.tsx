import React, { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, colors } from "../components/styles/";

const { light, dark } = colors;

const getStorage = (item: string, fallback: any): string =>
  window.localStorage.getItem(item) || fallback;

const LanguageContext = createContext({
  language: getStorage("language", "en"),
  setLanguage: (language: string): void => {},
  setTheme: (): void => {},
});

export const AppProvider = ({ children }) => {
  const [language, setLang] = useState(getStorage("language", "en"));
  const [theme, setTheme] = useState(getStorage("theme", "LIGHT"));

  const setLanguage = (value: string): void => {
    window.localStorage.setItem("language", value);
    setLang(value);
  };

  const _setTheme = (): void => {
    const item = getStorage("theme", "");
    const data = item === "LIGHT" ? "DARK" : "LIGHT";
    window.localStorage.setItem("theme", data);
    setTheme(data);
  };

  const THEME = theme == "DARK" ? dark : light;

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, setTheme: _setTheme }}
    >
      <ThemeProvider theme={THEME}>
        <>
          <GlobalStyles />
          {children}
        </>
      </ThemeProvider>
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
