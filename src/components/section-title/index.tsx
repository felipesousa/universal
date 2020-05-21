import React from "react";
import styled from "styled-components";

export default ({ children, line = true, ...props }) => (
  <Title {...props}>
    {children}
    {line && <Line />}
  </Title>
);

const Title: any = styled.h1`
  font-size: 3.6rem;
  color: var(--light);
  font-family: Okta;
  margin: 50px;
  margin-left: 0px;
  text-shadow: -4px 1px 0px var(--blueExtraLight);

  @media screen and (min-width: 768px) {
    &.hover :hover {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 3rem;
    margin: 0px 0px 50px;
  }

  @media screen and (max-width: 420px) {
    font-size: 2.1rem;
    margin: 0px 0px 50px;
  }

  &.talks {
    margin-bottom: 25px;
  }

  &.title-home {
    width: 100%;
    max-width: 768px;
    color: var(--blue);
    text-shadow: -4px 2px var(--blueExtraLight);
  }
`;

const Line = styled.div`
  width: 25%;
  height: 6px;
  background: rgba(0, 0, 0, 0.05);
  margin-top: -1.5rem;
  margin-left: -27%;
  animation: showOn 0.5s 1;

  @keyframes showOn {
    from {
      margin-left: -50%;
    }
    to {
      margin-left: -27%;
    }
  }
`;
