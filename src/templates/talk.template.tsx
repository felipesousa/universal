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

const TalkTemplate = ({ data: { markdownRemark: talk } }) => {
  let { language } = useContext(LanguageContext);

  useEffect(() => {
    if (talk.frontmatter.lang !== language) {
      navigate(`/talks/${language}/${talk.fields.slug}`);
    }
  }, [language]);

  return (
    <Layout>
      <SEO title={talk.frontmatter.title} />
      <h1>{talk.frontmatter.title}</h1>
      <p>{language}</p>
      <p>{talk.frontmatter.date}</p>

      <div dangerouslySetInnerHTML={{ __html: talk.html }}></div>
    </Layout>
  );
};

export default TalkTemplate;
