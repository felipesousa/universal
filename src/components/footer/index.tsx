import React from "react";
import styled from "styled-components";

const Footer = () => (
  <Container>
    <p>Footer</p>
  </Container>
);

const Container = styled.footer`
  max-width: 100%;
  width: 1250px;
  height: 90px;
  border: 1px dashed red;
`;

export default Footer;
