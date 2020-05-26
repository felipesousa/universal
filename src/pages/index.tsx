import React, { useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";

import styled from "styled-components";

import { Layout, SEO, SectionTitle } from "../components";
import LanguageContext from "../providers";
import utils from "../utils";

const IndexPage = () => {
  const { language } = useContext(LanguageContext);
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          description {
            prefix
            suffix
          }
          subtitle
          title
        }
      }
    }
  `);

  return (
    <>
      <SEO title="Home" />
      <Layout relative={true}>
        <SectionTitle line={false} className="title-home">
          {data.site.siteMetadata.subtitle}
        </SectionTitle>
        <SectionSubtitle>
          {utils.translations["home"]["first"][language]}{" "}
          <a href="https://github.com/concretesolutions">
            @concretelatinoamerica.
          </a>
          <br />
          {utils.translations["home"]["second"][language]}{" "}
        </SectionSubtitle>
      </Layout>
    </>
  );
};

const SectionSubtitle = styled.h2`
  font-size: 1.5rem;
  color: var(--gray);
  font-family: "Slab Regular";
  line-height: 1.3;
  text-align: right;

  a {
    color: var(--gray);
    text-decoration: none;
  }
`;

export default IndexPage;
