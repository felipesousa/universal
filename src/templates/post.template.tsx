import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

// receive the context props passed inside the createPage node Hook in build time and send to a query
// "query" should be export to be rendered automatically by gatsby
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
