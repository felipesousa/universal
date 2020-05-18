import React from "react";
import styled from "styled-components";

export default ({ children, line = true }) => (
  <Title>
    {children}
    {line && <Line />}
  </Title>
);

const Title = styled.h1`
  font-size: 2rem;
  color: var(--gray);
  font-family: "Slab Regular";
  margin: 50px 0px;
  text-align: right;

  @media screen and (min-width: 480px) {
    display: none;
  }
`;

const Line = styled.div`
  width: 25%;
  height: 10px;
  background: var(--blue);
  margin-top: -2.3rem;
  margin-left: -27%;
  animation: showOn 3s infinite;

  @media screen and (max-width: 420px) {
    margin-top: -1.3rem;
    height: 5px;
  }

  @keyframes showOn {
    0% {
      margin-left: -27%;
    }
    100% {
      margin-left: -50%;
    }
  }
`;
