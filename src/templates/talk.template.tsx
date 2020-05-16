import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        category
      }
      html
    }
  }
`;

const PostTemplate = ({ data: { markdownRemark: post } }) => (
  <Layout>
    <SEO title={post.frontmatter.title} />
    <h1>{post.frontmatter.title}</h1>
    <p>{post.frontmatter.date}</p>
    <p>{post.frontmatter.category}</p>

    <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
  </Layout>
);

export default PostTemplate;
