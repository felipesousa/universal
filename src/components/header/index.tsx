import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

declare global {
  interface Window {
    __theme: any;
    __onThemeChange: any;
    __setPreferredTheme: any;
  }
}

const Header = props => {
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

  const ThemeToggle = () => {
    window.__setPreferredTheme(websiteTheme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <button onClick={ThemeToggle}>
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
