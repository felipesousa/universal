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
  const { toggleTheme, theme } = useContext(LanguageContext);
  const { language, toggleLanguage } = useContext(LanguageContext);

  // theme value and toggle method

  return (
    <Container>
      <Title onClick={() => navigate("/")}>Felipe Sousa</Title>

      <Nav>
        {LINKS.map(function ({ name, route }) {
          return (
            <Link activeClassName="active" to={route}>
              {name}
            </Link>
          );
        })}
      </Nav>

      <Settings>
        <LanguageToggler
          name="select"
          value={language}
          onChange={toggleLanguage}
          id="select"
        >
          <option value="en">EN</option>
          <option value="pt">PT</option>
        </LanguageToggler>

        <Divider />

        <DarkTheme
          src={theme === "light" ? "/images/dark.svg" : "/images/light.svg"}
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
  margin-bottom: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title: any = styled.h1`
  font-weight: 500;
  margin: 0;
  font-size: 1.6rem;
  font-family: Okta;
  font-style: normal;
  color: var(--dark);
  cursor: pointer;
`;

const Profile = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0;
  cursor: pointer;
`;

const Nav = styled.nav`
  padding: 0px;
  box-sizing: border-box;

  a {
    color: var(--black);
    font-family: Okta;
    font-style: initial;
    padding: 10px 0;
    text-decoration: none;
    border-bottom: none;
    font-size: 1.1rem;
    margin: 0px 10px;

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }

    &.active {
      text-decoration: underline;
    }
  }
`;

const Settings = styled.div`
  width: 180px;
  display: flex;
  justify-content: flex-end;
`;

const LanguageToggler = styled.select`
  appearance: none;
  border: none;
  background: transparent;
  color: var(--black);
  outline: none;
  cursor: pointer;
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
