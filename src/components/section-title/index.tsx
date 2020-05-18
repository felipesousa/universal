import React from "react";
import styled from "styled-components";

export default ({ children, line = true }) => (
  <Title>
    {children}
    {line && <Line />}
  </Title>
);

const Title = styled.h1`
  font-size: 4rem;
  color: var(--light);
  font-family: Okta;
  margin: 50px 0px;
  text-shadow: -4px 1px 0px var(--blueExtraLight);
`;

const Line = styled.div`
  width: 25%;
  height: 10px;
  background: var(--blue);
  margin-top: -2.3rem;
  margin-left: -27%;
  animation-name: showOn;
  animation-duration: 0.5s;

  @keyframes showOn {
    from {
      margin-left: -50%;
    }
    to {
      margin-left: -27%;
    }
  }
`;
