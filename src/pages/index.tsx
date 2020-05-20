import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import { Layout, SEO, SectionTitle } from "../components";

const IndexPage = () => {
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
          {data.site.siteMetadata.description.prefix}
          <a href="https://github.com/concretesolutions">
            @concretelatinoamerica.
          </a>
          <br />
          {data.site.siteMetadata.description.suffix}
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
