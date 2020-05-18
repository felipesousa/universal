import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Layout, SEO, SectionTitle, SectionSubtitle } from "../components";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          description
          subtitle
          title
        }
      }
    }
  `);

  return (
    <>
      <SEO title="Home" />
      <Layout>
        <SectionTitle line={false} className="title-home">
          {data.site.siteMetadata.subtitle}
        </SectionTitle>

        <SectionSubtitle line={false}>
          {data.site.siteMetadata.subtitle}
        </SectionSubtitle>
      </Layout>
    </>
  );
};

export default IndexPage;
