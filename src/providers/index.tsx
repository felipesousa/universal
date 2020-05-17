import React, { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, colors } from "../components/styles/";

const { light, dark } = colors;

const getStorage = (item: string, fallback: any): string =>
  localStorage.getItem(item) || fallback;

const LanguageContext = createContext({
  language: getStorage("language", "en"),
  setLanguage: (language: string): void => {},
  setTheme: (): void => {},
});

export const LanguageProvider = ({ children }) => {
  const [language, setLang] = useState(getStorage("language", "en"));
  const [theme, setTheme] = useState(getStorage("theme", "LIGHT"));

  const setLanguage = (value: string): void => {
    localStorage.setItem("language", value);
    setLang(value);
  };

  const _setTheme = (): void => {
    const item = getStorage("theme", "");
    const data = item === "LIGHT" ? "DARK" : "LIGHT";
    localStorage.setItem("theme", data);
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
