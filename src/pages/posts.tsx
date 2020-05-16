import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const PostsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "posts" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
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
      <SEO title="Posts" />
      <Layout>
        <h1>Posts</h1>
        <ul>
          {data.allMarkdownRemark.edges.map(edge => (
            <Link to={`/post/${edge.node.fields.slug}`}>
              <h2>{edge.node.frontmatter.title}</h2>
              <h5>{edge.node.frontmatter.date}</h5>
            </Link>
          ))}
        </ul>
      </Layout>
    </>
  );
};

export default PostsPage;
