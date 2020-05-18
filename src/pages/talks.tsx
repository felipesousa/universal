import React, { useContext } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import { Layout, SEO } from "../components";
import LanguageContext from "../providers";
import utils from "../utils";

const Talks = () => {
  const { language } = useContext(LanguageContext);
  const query = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "talks" } } }
        sort: { fields: frontmatter___date, order: DESC }
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
