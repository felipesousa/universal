import React, { useState, useContext } from "react";
import { Link } from "gatsby";
import LanguageContext from "../contexts/";
import "./base.css";

const Header = () => (
  <header>
    <Link to="/">Home</Link>
    <Link to="/posts">Posts</Link>
    <Link to="/talks">talks</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
  </header>
);

const Footer = () => (
  <footer>
    <p>Gatsby BootCamp - Starter Project</p>
  </footer>
);

const Layout = ({ children }) => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <>
      <Header />
      <select
        name="select"
        value={language}
        onChange={e => setLanguage(e.target.value)}
        id="select"
      >
        <option value="en">EN</option>
        <option value="pt">PT</option>
      </select>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
