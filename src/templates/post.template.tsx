import React from "react";
import { graphql } from "gatsby";
import { SEO, Layout } from "../components";

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
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

    <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
  </Layout>
);

export default PostTemplate;
