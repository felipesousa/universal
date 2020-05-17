import React, { createContext, useState } from "react";

const LanguageContext = createContext({
  language: "en",
  setLanguage: (language: string): void => {},
});

export const LanguageProvider = ({ children }) => {
  const [language, setLang] = useState("en");

  const setLanguage = value => {
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
