import React, { useState, useEffect, useContext } from "react";
import LanguageContext from "../../providers";
import { Link } from "gatsby";

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

const Header = props => {
  const { setTheme, theme } = useContext(LanguageContext);

  return (
    <>
      <button onClick={setTheme}>
        {theme === "dark" ? (
          <img
            src="https://img.pngio.com/sun-icon-png-50-px-61659-png-images-pngio-sun-icon-png-1600_1600.png"
            style={{
              width: "100px",
            }}
            alt="Light mode"
          />
        ) : (
          <img
            src="https://i.ya-webdesign.com/images/moon-logo-png-8.png"
            style={{
              width: "100px",
            }}
            alt="Dark mode"
          />
        )}
      </button>
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/talks">talks</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </>
  );
};

export default Header;
