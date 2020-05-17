import React, { useContext, useEffect } from "react";
import { graphql, navigate } from "gatsby";

import LanguageContext from "../providers";
import { SEO, Layout } from "../components";

export const query = graphql`
  query($slug: String, $lang: String) {
    markdownRemark(
      fields: { slug: { eq: $slug } }
      frontmatter: { lang: { eq: $lang } }
    ) {
      frontmatter {
        title
        date
        lang
      }
      fields {
        slug
      }
      html
    }
  }
`;

const PostTemplate = ({ data: { markdownRemark: post } }) => {
  let { language } = useContext(LanguageContext);

  useEffect(() => {
    if (post.frontmatter.lang !== language) {
      navigate(`/post/${language}/${post.fields.slug}`);
    }
  }, [language]);

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.date}</p>

      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </Layout>
  );
};

export default PostTemplate;
