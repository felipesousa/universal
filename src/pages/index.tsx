import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Layout, SEO } from "../components";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <>
      <SEO title="Home" />
      <Layout>
        <h1>Hi, my name is {data.site.siteMetadata.author}</h1>
      </Layout>
    </>
  );
};

export default IndexPage;
