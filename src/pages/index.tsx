import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Layout, SEO, SectionTitle, SectionSubtitle } from "../components";

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
      <Layout fixed>
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

export default IndexPage;
