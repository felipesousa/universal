import React, { createContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, colors } from "../components/styles/";

const { light, dark } = colors;

const LanguageContext = createContext({
  language: "en",
  theme: "dark",
  setLanguage: (language: string): void => {},
  setTheme: (): void => {},
});

export const AppProvider = ({ children }) => {
  let websiteTheme;
  if (typeof window !== `undefined`) {
    websiteTheme = window.__theme;
  }

  let websiteLang;
  if (typeof window !== `undefined`) {
    websiteLang = window.__lang;
  }

  const [lang, setLang] = useState(websiteLang);
  const [theme, setTheme] = useState(websiteTheme);

  useEffect(() => {
    setTheme(window.__theme);
    setTheme(window.__lang);

    window.__onThemeChange = () => {
      setTheme(window.__theme);
    };

    window.__onLangChange = () => {
      setLang(window.__lang);
    };
  }, [theme, lang]);

  const toggleTheme = () => {
    window.__setPreferredTheme(websiteTheme === "dark" ? "light" : "dark");
  };

  const setLanguage = (value: string): void => {
    window.__setPreferredLang(value);
  };

  const _value = theme == "dark" ? dark : light;

  return (
    <LanguageContext.Provider
      value={{ theme, language: lang, setLanguage, setTheme: toggleTheme }}
    >
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
