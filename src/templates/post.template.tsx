import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { graphql, navigate } from "gatsby";

import LanguageContext from "../providers";
import { SEO, Layout, SectionTitle } from "../components";

export const query = graphql`
  query($slug: String, $lang: String) {
    markdownRemark(
      fields: { slug: { eq: $slug } }
      frontmatter: { lang: { eq: $lang } }
    ) {
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        lang
      }
      fields {
        slug
      }
      html
      timeToRead
    }
  }
`;

const lang = {
  published: {
    en: "Published: ",
    pt: "Publicado: ",
  },
  timeToRead: {
    en: "Time to read: ",
    pt: "Tempo de leitura: ",
  },
};

const PostTemplate = ({ data: { markdownRemark: post } }) => {
  let { language } = useContext(LanguageContext);

  useEffect(() => {
    if (post.frontmatter.lang !== language) {
      navigate(`/post/${language}/${post.fields.slug}`, { replace: true });
    }
  }, [language]);

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <SectionTitle line={false}>{post.frontmatter.title}</SectionTitle>
      <PostDetails>
        <span>
          {lang["published"][language]}
          {post.frontmatter.date}.
        </span>

        <span>
          {lang["timeToRead"][language]}
          {post.timeToRead} min.
        </span>
      </PostDetails>

      <Content dangerouslySetInnerHTML={{ __html: post.html }}></Content>
    </Layout>
  );
};

const Content = styled.article`
  * {
    font-family: "Slab Regular";
    font-size: 1.2rem;
    line-height: 1.4;

    a {
      border-bottom: 4px solid var(--blue);
      text-decoration: none;
      color: var(--black);
      font-weight: bold;
      line-height: 1.8;
    }
  }
`;

const PostDetails = styled.section`
  font-family: "Slab Regular";
  font-size: 1.2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 40px;

  span {
    margin: 0;

    &:first-of-type {
      margin-right: 10px;
    }
  }
`;

export default PostTemplate;
