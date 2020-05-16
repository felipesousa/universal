import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title = "" }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const _title = `${title} | ${data.site.siteMetadata.title}`;

  return <Helmet title={_title} />;
};

export default SEO;
