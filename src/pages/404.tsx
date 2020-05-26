import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import LanguageContext from "../providers/";
import utils from "../utils";
import Layout from "../components/layout";

const TIME = 30;

let i = 0;
let L1;
let L2;
let L3;

const NotFoundPage = () => {
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [third, setThird] = useState(null);
  const { language } = useContext(LanguageContext);

  L1 = setInterval(() => {
    if (i > 40) {
      clearInterval(L1);
      setFirst(4);
    } else {
      setFirst(utils.setRandomNumber());
      i++;
    }
  }, TIME);

  L2 = setInterval(() => {
    if (i > 80) {
      clearInterval(L2);
      setSecond(0);
    } else {
      setSecond(utils.setRandomNumber());
      i++;
    }
  }, TIME);

  L3 = setInterval(() => {
    if (i > 120) {
      clearInterval(L3);
      setThird(4);
    } else {
      setThird(utils.setRandomNumber());
      i++;
    }
  }, TIME);

  return (
    <Layout>
      <Container>
        <Message simple={false}>
          {first}
          {second}
          {third}
        </Message>
        {first === 4 && second === 0 && third === 4 && (
          <Message simple={true}>
            {utils.translations["notfound"]["first"][language]}
            <Link to="/">
              {utils.translations["notfound"]["second"][language]}
            </Link>
          </Message>
        )}
      </Container>
    </Layout>
  );
};

const Container = styled.section`
  width: 100%;
  min-height: calc(80vh - 200px);
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Message: any = styled.h1`
  font-size: ${(props: any) => (props.simple ? "2rem" : "8rem")};
  font-family: Okta;
  color: var(--black);
  letter-spacing: ${(props: any) => (props.simple ? 0 : "2px")};
  text-shadow: -4px 1px 2px var(--blueExtraLight);

  a {
    margin-left: 10px;
    color: var(--black);
  }
`;

export default NotFoundPage;
