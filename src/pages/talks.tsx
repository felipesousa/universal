import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";

import SEO from "../components/seo";

const Talks = () => {
  const data = useStaticQuery(graphql`
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
          {data.allMarkdownRemark.edges.map(edge => (
            <Link to={`/talk/${edge.node.fields.slug}`}>
              <h2>{edge.node.frontmatter.title}</h2>
              <h5>{edge.node.frontmatter.date}</h5>
            </Link>
          ))}
        </ul>
      </Layout>
    </>
  );
};

export default Talks;
