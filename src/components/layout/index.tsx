import React from "react";
import styled from "styled-components";
import { Header, Footer } from "../";

import "./base.css";

const Layout = ({ children, fixed = false }) => (
  <Container>
    <Header />
    <Main fixed={fixed}>{children}</Main>
    <Footer fixed={fixed} />
  </Container>
);

const Container = styled.div`
  max-width: 1250px;
  width: 90%;
`;

const Main: any = styled.main`
  min-height: ${(props: any) => (props.fixed ? "none" : "calc(100vh - 270px)")};

  @media screen and (max-width: 768px) {
    min-height: calc(100vh - 300px);
  }
`;

export default Layout;
