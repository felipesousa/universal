import React from "react";
import { Link } from "gatsby";

import "../styles/reset.scss";

import styles from "./layout.module.scss";

const Header = () => (
  <header className={styles.header}>
    <Link to="/">Home</Link>
    <Link to="/posts">Posts</Link>
    <Link to="/talks">Talks</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
  </header>
);

const Footer = () => (
  <footer>
    <p>Gatsby BootCamp - Starter Project</p>
  </footer>
);

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
