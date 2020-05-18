import React, { useContext } from "react";
import { Link, useStaticQuery, graphql, PageProps } from "gatsby";
import styled from "styled-components";

import { Layout, SEO, SectionTitle } from "../components";
import LanguageContext from "../providers/";
import utils from "../utils";

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "posts" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            category
            date(formatString: "MMMM Do, YYYY", locale: "pt")
            lang
          }
          fields {
            slug
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`;

const Posts = (_query: PageProps) => {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <SEO title="Posts" />
      <Layout>
        <SectionTitle>Posts</SectionTitle>
        <br />

        <PostsList>
          {utils
            .getEdges(_query.data)
            .map(utils.mapFields)
            .filter(node => node.lang === language && node)
            .map(({ title, slug, lang, date, excerpt, timeToRead }) => (
              <Post>
                <Link to={`post/${lang}/${slug}`}>
                  <h2>💯 {title}</h2>
                  <p>
                    <strong>
                      {date}, {timeToRead} minutos.
                    </strong>
                  </p>
                  <p style={{ margin: 0 }}>{excerpt}</p>
                </Link>
              </Post>
            ))}
        </PostsList>
      </Layout>
    </>
  );
};

const PostsList = styled.ul`
  list-style: none;
  margin: 0;

  a {
    font-family: Slab Regular;
    text-decoration: none;
    color: var(--black);

    h2 {
      font-family: Slab Bold;
    }
  }
`;

const Post = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 40px;
`;

export default Posts;
