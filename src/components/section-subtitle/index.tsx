import React from "react";
import styled from "styled-components";

export default ({ children }) => <Subtitle>{children}</Subtitle>;

const Subtitle = styled.h1`
  width: 280px;
  font-size: 1.6rem;
  float: right;
  color: var(--gray);
  font-family: "Slab Regular";
  margin: 0px;
  text-align: right;

  a {
    color: var(--gray);
  }

  @media screen and (min-width: 480px) {
    display: none;
  }
`;
