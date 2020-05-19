import React from "react";
import styled from "styled-components";
import { Header, Footer } from "../";

import "./base.css";

const Layout = ({ children }) => (
  <Container>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Container>
);

const Container = styled.div`
  max-width: 1250px;
  width: 90%;
`;

const Main = styled.main`
  min-height: calc(100vh - 310px);

  @media screen and (max-width: 768px) {
    min-height: calc(100vh - 330px);
  }
`;

export default Layout;
