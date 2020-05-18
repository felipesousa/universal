import React, { useContext } from "react";
import LanguageContext from "../../providers";
import styled from "styled-components";

const socials = [
  { link: "https://github.com/felipesousa", name: "github" },
  { link: "https://linkedin.com/in/luifelipesousa", name: "linkedin" },
  { link: "https://twitter.com/felipz_sousa", name: "twitter" },
];

const Footer = () => {
  const { theme } = useContext(LanguageContext);
  const _theme = theme == "dark" ? "light" : "dark";

  return (
    <Container>
      {socials.map(({ name, link }) => (
        <a href={link} target="_blank">
          <Icon alt={name} src={`/images/${name}-${_theme}.svg`} />
        </a>
      ))}
    </Container>
  );
};

const Container = styled.footer`
  max-width: 100%;
  width: 1250px;
  height: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  a {
    color: transparent;
    text-decoration: none;

    &:first-of-type {
      margin-left: -10px;
    }
  }
`;

const Icon: any = styled.img`
  width: 25px;
  height: 25px;
  margin: 0px 10px;
`;

export default Footer;
