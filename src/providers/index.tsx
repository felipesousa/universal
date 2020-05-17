import React, { createContext, useState } from "react";

const getStorage = (item: string): string => localStorage.getItem(item) || "en";

const LanguageContext = createContext({
  language: getStorage("language"),
  setLanguage: (language: string): void => {},
});

export const LanguageProvider = ({ children }) => {
  const [language, setLang] = useState(getStorage("language"));

  const setLanguage = (value: string): void => {
    localStorage.setItem("language", value);
    setLang(value);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
