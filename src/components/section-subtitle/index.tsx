import React from "react";
import styled from "styled-components";

export default ({ children }) => <Subtitle>{children}</Subtitle>;

const Subtitle = styled.h1`
  width: 60%;
  font-size: 1.5rem;
  color: var(--gray);
  font-family: "Slab Regular";
  margin: 0px;
  text-align: right;
  line-height: 1.3;
  margin-top: 110px;

  a {
    color: var(--gray);
  }

  @media screen and (max-width: 767px) {
    width: 90%;
  }
`;
