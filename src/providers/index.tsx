import React, { createContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, colors } from "../components/styles/";

const { light, dark } = colors;

const getStorage = (item: string, fallback: any): string =>
  window.localStorage.getItem(item) || fallback;

const LanguageContext = createContext({
  language: getStorage("language", "en"),
  setLanguage: (language: string): void => {},
});

export const AppProvider = ({ children }) => {
  const [language, setLang] = useState(getStorage("language", "en"));

  const setLanguage = (value: string): void => {
    window.localStorage.setItem("language", value);
    setLang(value);
  };

  let websiteTheme;
  if (typeof window !== `undefined`) {
    websiteTheme = window.__theme;
  }

  const [theme, setTheme] = useState(websiteTheme);

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => {
      setTheme(window.__theme);
    };
  }, []);

  const _value = theme == "dark" ? dark : light;

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <ThemeProvider theme={_value}>
        <>
          <GlobalStyle />
          {children}
        </>
      </ThemeProvider>
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
