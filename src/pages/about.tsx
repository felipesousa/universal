import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Layout, SEO, SectionTitle } from "../components";

const AboutPage = () => {
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
      <SEO title="About" />
      <Layout>
        <SectionTitle>About</SectionTitle>
      </Layout>
    </>
  );
};

export default AboutPage;
