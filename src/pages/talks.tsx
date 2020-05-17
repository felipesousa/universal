import React, { useContext } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import * as utils from "../utils";
import Layout from "../components/layout";

import SEO from "../components/seo";
import LanguageContext from "../contexts";

const Talks = () => {
  const { language } = useContext(LanguageContext);
  const query = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "talks" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              category
              date
              lang
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <SEO title="Talks" />
      <Layout>
        <h1>Talks</h1>
        <ul>
          {utils
            .getEdges(query)
            .map(utils.mapFields)
            .filter(node => node.lang === language && node)
            .map(({ title, slug, lang, date }) => (
              <Link to={`talk/${lang}/${slug}`}>
                <h2>{title}</h2>
                <h5>{date}</h5>
              </Link>
            ))}
        </ul>
      </Layout>
    </>
  );
};

export default Talks;
