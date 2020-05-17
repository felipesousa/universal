import React from "react";
import { graphql } from "gatsby";
import { SEO, Layout } from "../components";

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

const TalkTemplate = ({ data: { markdownRemark: talk } }) => (
  <Layout>
    <SEO title={talk.frontmatter.title} />
    <h1>{talk.frontmatter.title}</h1>
    <p>{talk.frontmatter.date}</p>
    <p>{talk.frontmatter.category}</p>

    <div dangerouslySetInnerHTML={{ __html: talk.html }}></div>
  </Layout>
);

export default TalkTemplate;
