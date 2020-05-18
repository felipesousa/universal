import React, { useContext } from "react";
import { Header, Footer } from "../";
import LanguageContext from "../../providers";

import "./base.css";

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
