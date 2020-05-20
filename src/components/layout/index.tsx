import React from "react";
import styled, { css } from "styled-components";
import { Header, Footer } from "../";

import "./base.css";

const Layout = ({ children, relative = false }) => (
  <Container>
    <Header />
    <Main relative={relative}>{children}</Main>
    <Footer />
  </Container>
);

const Container: any = styled.div`
  max-width: 1250px;
  width: 90%;
`;

const Main: any = styled.main`
  min-height: calc(100vh - 310px);

  @media screen and (max-width: 768px) {
    min-height: calc(100vh - 330px);
  }

  ${(props: any) =>
    props.relative &&
    css`
      min-height: calc(100vh - 300px);
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
    `}
`;

export default Layout;
