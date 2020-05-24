import React, { createContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../components/styles/";
declare global {
  interface Window {
    __theme: any;
    __onThemeChange: any;
    __setPreferredTheme: any;
    __lang: any;
    __onLangChange: any;
    __setPreferredLang: any;
  }
}

const LanguageContext = createContext({
  language: "en",
  theme: "light",
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
    window.__setPreferredTheme(websiteTheme === "light" ? "dark" : "light");
  };

  const toggleLanguage = (language: string): void => {
    window.__setPreferredLang(language);
  };

  return (
    <LanguageContext.Provider
      value={{
        theme,
        language,
        toggleLanguage,
        toggleTheme,
      }}
    >
      <ThemeProvider theme={{}}>
        <>
          <GlobalStyle />
          {children}
        </>
      </ThemeProvider>
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
