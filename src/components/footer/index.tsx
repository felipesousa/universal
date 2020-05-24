import React, { useContext } from "react";
import LanguageContext from "../../providers";
import styled from "styled-components";

const socials = [
  { link: "https://github.com/felipesousa", name: "github" },
  { link: "https://linkedin.com/in/luisfelipesousa", name: "linkedin" },
  { link: "https://twitter.com/felipz_sousa", name: "twitter" },
];

const Footer = () => {
  const { theme } = useContext(LanguageContext);
  const _theme = theme == "dark" ? "light" : "dark";
  const year = new Date().getFullYear();

  return (
    <Container>
      <nav>
        {socials.map(({ name, link }, i) => (
          <a href={link} target="_blank" key={i}>
            <Icon alt={name} src={`/images/${name}-${_theme}.svg`} />
          </a>
        ))}
      </nav>
      <a href="mailto:hi@felipesousa.space">Felipe Sousa - {year}</a>
    </Container>
  );
};

const Container: any = styled.footer`
  max-width: 100%;
  width: 1250px;
  height: 100px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  a {
    font-size: 1.2rem;
    color: var(--black);
    font-family: "Slab Regular";
    height: 25px;

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
