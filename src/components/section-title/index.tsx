import React from "react";
import styled from "styled-components";

export default ({ children, line = true, ...props }) => (
  <Title {...props}>
    {children}
    {line && <Line />}
  </Title>
);

const Title: any = styled.h1`
  font-size: 3.5rem;
  color: var(--light);
  font-family: Okta;
  margin: 50px 0px;
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
  height: 10px;
  background: var(--blue);
  margin-top: -2.3rem;
  margin-left: -27%;
  animation: showOn 0.5s 1;

  @media screen and (max-width: 420px) {
    margin-top: -1.3rem;
    height: 5px;
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
