import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { graphql, navigate } from "gatsby";
import utils from "../utils";

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
        date(formatString: "MMMM Do, YYYY", locale: $lang)
        lang
        draft
      }
      fields {
        slug
      }
      html
      timeToRead
      excerpt
    }
  }
`;

const PostTemplate = ({ data: { markdownRemark: post }, location }) => {
  let { language, theme, toggleLanguage } = useContext(LanguageContext);
  let draft = post.frontmatter.draft || false;

  useEffect(() => {
    if (post.frontmatter.lang !== language) {
      navigate(`/posts/${language}/${post.fields.slug}`, { replace: true });
    }
  }, [language]);

  const _lang = language === "pt" ? "en" : "pt";

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <SectionTitle line={false}>{post.frontmatter.title}</SectionTitle>

      <PostDetails>
        <div>
          <span style={{ marginRight: "20px" }}>
            🗓 {utils.translations["published"][language]}
            {post.frontmatter.date}
          </span>

          <span>
            ⏰ {utils.translations["timeToRead"][language]}
            {post.timeToRead} min.
          </span>
        </div>

        <a
          href={`https://twitter.com/intent/tweet?url=${location.href}&text=${post.frontmatter.title}`}
          target="_blank"
        >
          {utils.translations["share"][language]} Twitter
          <img
            src={`/images/twitter-${theme == "dark" ? "light" : "dark"}.svg`}
          />
        </a>
      </PostDetails>

      {draft ? (
        <Content>
          <p>
            {utils.translations["nopost"]["first"][language]}{" "}
            <span
              style={{ textDecoration: "underline" }}
              onClick={() => toggleLanguage(_lang)}
            >
              {utils.translations["nopost"]["second"][language]}
            </span>
          </p>
        </Content>
      ) : (
        <Content dangerouslySetInnerHTML={{ __html: post.html }}></Content>
      )}
    </Layout>
  );
};

const Content = styled.article`
  * {
    font-family: "Slab Regular";
    font-size: 1.2rem;
    line-height: 1.4;

    a {
      color: var(--black);
      line-height: 1.8;
    }
  }
`;

const PostDetails = styled.section`
  border-bottom: 4px solid var(--gray);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  font-family: "Slab Regular";
  margin-top: 40px;
  padding-bottom: 10px;
  margin-bottom: 60px;
  font-size: 1.2rem;
  font-weight: bold;

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: auto;
  }

  a {
    display: flex;
    color: var(--black);
    margin-bottom: 10px;

    img {
      width: 27px;
      height: 27px;
      margin: 0;
      margin-left: 10px;
    }

    @media screen and (max-width: 768px) {
      display: flex;
    }
  }

  span {
    margin: 0;
    margin-bottom: 10px;

    &:first-of-type {
      margin-right: 10px;
    }
  }
`;

export default PostTemplate;
