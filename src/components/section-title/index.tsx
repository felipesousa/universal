import React from "react";
import styled from "styled-components";

export default ({ children, line = true, ...props }) => (
  <Title {...props}>
    {children}
    {line && <Line />}
  </Title>
);

const Title: any = styled.h1`
  font-size: 2.4rem;
  color: var(--light);
  font-family: Okta;
  margin: 50px 0px 20px;
  text-shadow: -4px 1px 0px var(--blueExtraLight);

  &.title-home {
    width: 100%;
    max-width: 768px;
    color: var(--blue);
    text-shadow: -4px 2px var(--blueLight);
  }

  @media screen and (max-width: 768px) {
    font-size: 3rem;
    margin: 0px 0px 50px;
  }

  @media screen and (max-width: 420px) {
    font-size: 2.1rem;
  }
`;

const Line = styled.div`
  width: 25%;
  height: 7px;
  background: var(--blue);
  margin-top: -1.5rem;
  margin-left: -27%;
  animation: showOn 0.5s 1;

  @media screen and (max-width: 768px) {
    margin-top: -1.8rem;
  }

  @keyframes showOn {
    from {
      margin-left: -50%;
    }
    to {
      margin-left: -27%;
    }
  }
`;
