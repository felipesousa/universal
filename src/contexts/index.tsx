import React, { createContext, Component } from "react";

const LanguageContext = createContext({
  language: "en",
  setLanguage: language => {},
});

class LanguageProvider extends Component {
  state = { language: "en" };

  setLanguage = language => {
    localStorage.setItem("language", language);
    this.setState({ language });
  };

  render() {
    const {
      props,
      state: { language },
    } = this;

    return (
      <LanguageContext.Provider
        value={{
          language,
          setLanguage: this.setLanguage,
        }}
      >
        {props.children}
      </LanguageContext.Provider>
    );
  }
}

export default LanguageContext;
export { LanguageProvider };
