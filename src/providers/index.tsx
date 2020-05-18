import React, { createContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, colors } from "../components/styles/";

const { light, dark } = colors;

const LanguageContext = createContext({
  language: "en",
  theme: "dark",
  toggleLanguage: (language: string): void => {},
  toggleTheme: (): void => {},
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

  const [language, setLanguage] = useState(websiteLang);
  const [theme, setTheme] = useState(websiteTheme);

  useEffect(() => {
    setTheme(window.__theme);
    setLanguage(window.__lang);

    window.__onThemeChange = () => {
      setTheme(window.__theme);
    };

    window.__onLangChange = () => {
      setLanguage(window.__lang);
    };
  }, [theme]);

  const toggleTheme = () => {
    window.__setPreferredTheme(websiteTheme === "dark" ? "light" : "dark");
  };

  const toggleLanguage = (value: string): void => {
    window.__setPreferredLang(value);
  };

  const _value = theme == "dark" ? dark : light;

  return (
    <LanguageContext.Provider
      value={{
        theme,
        language,
        toggleLanguage,
        toggleTheme,
      }}
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
