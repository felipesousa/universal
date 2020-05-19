import React, { useContext } from "react";
import styled from "styled-components";
import LanguageContext from "../../providers";
import { Link, navigate } from "gatsby";

const LINKS: Array<{ name: string; route: string }> = [
  { name: "Home", route: "/" },
  { name: "About", route: "/about" },
  { name: "Posts", route: "/posts" },
  { name: "Talks", route: "/talks" },
];

const Header = props => {
  const { toggleTheme, theme, language, toggleLanguage } = useContext(
    LanguageContext
  );

  return (
    <Container>
      <div className="mobile-header">
        <Title onClick={() => navigate("/")}>
          <span>FELIPE</span>
          <p>SOUSA</p>
        </Title>

        <Settings className="mobile">
          <LanguageToggler value={language} onChange={toggleLanguage}>
            <option value="en">EN</option>
            <option value="pt">PT</option>
          </LanguageToggler>

          <Divider />

          <DarkTheme
            src={theme === "dark" ? "/images/light.svg" : "/images/dark.svg"}
            onClick={toggleTheme}
            alt="dark mode toggle icon"
          />
        </Settings>
      </div>

      <Nav>
        {LINKS.map(function ({ name, route }) {
          return (
            <Link activeClassName="active" to={route}>
              {name.toUpperCase()}
            </Link>
          );
        })}
      </Nav>

      <Settings className="desktop">
        <LanguageToggler value={language} onChange={toggleLanguage}>
          <option value="en">EN</option>
          <option value="pt">PT</option>
        </LanguageToggler>

        <Divider />

        <DarkTheme
          src={theme === "dark" ? "/images/light.svg" : "/images/dark.svg"}
          onClick={toggleTheme}
          alt="dark mode toggle icon"
        />
      </Settings>
    </Container>
  );
};

const Container = styled.header`
  width: 100%;
  height: 120px;
  min-height: 120px;
  margin-bottom: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  .mobile-header {
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    height: 210px;
    justify-content: space-evenly;
    flex-direction: column;
    margin-bottom: 0px;

    .mobile-header {
      justify-content: space-between;
      width: 100%;

      h1 {
        line-height: 1;
        margin: 0;
      }
    }
  }
`;

const Title: any = styled.h1`
  font-weight: 500;
  margin: 0;
  font-size: 1.6rem;
  font-family: Okta;
  font-style: normal;
  color: var(--dark);
  cursor: pointer;

  p {
    margin: 0;
    line-height: 1;
    padding-left: 20px;
  }

  span {
    display: block;
    color: var(--blue);
    text-shadow: -4px 1px 0px var(--blueExtraLight);
    line-height: 0.6;
    margin-left: 0;
  }
`;

const Nav = styled.nav`
  padding: 0px;
  box-sizing: border-box;
  display: flex;

  @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    margin-top: 10px;
    justify-content: space-between;
  }

  a {
    color: var(--black);
    font-family: Okta;
    font-style: initial;
    padding: 10px 0;
    text-decoration: none;
    border-bottom: none;
    font-size: 1.1rem;
    margin: 0px 10px;
    text-shadow: -2px 1px 0px var(--blueExtraLight);
    border-bottom: 4px solid transparent;

    &:hover {
      border-bottom: 4px solid var(--blueLight);
    }

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }

    &.active {
      border-bottom: 4px solid var(--blue) !important;
    }
  }
`;

const Settings = styled.div`
  width: 120px;
  align-items: center;
  height: auto;
  justify-content: flex-end;

  &.mobile {
    display: none;
  }

  &.desktop {
    display: flex;
  }

  @media screen and (max-width: 768px) {
    width: 100px;

    &.mobile {
      display: flex;
    }

    &.desktop {
      display: none;
    }
  }
`;

const LanguageToggler = styled.select`
  appearance: none;
  border: none;
  background: transparent;
  color: var(--black);
  outline: none;
  cursor: pointer;
  text-shadow: -4px 1px 0px var(--blueExtraLight);
  font-family: Okta;
`;

const Divider = styled.div`
  width: 2px;
  height: 30px;
  background-color: var(--black);
  margin: 0px 15px;
`;

const DarkTheme = styled.img`
  width: 30px;
  cursor: pointer;
  margin: 0;
`;

export default Header;
