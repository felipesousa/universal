import React, { useContext } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import { Layout, SEO, SectionTitle } from "../components";
import LanguageContext from "../providers/";
import utils from "../utils";

const Posts = () => {
  const { language } = useContext(LanguageContext);
  const query = useStaticQuery(graphql`
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
              date(formatString: "MMMM Do, YYYY")
              lang
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
  `);

  return (
    <>
      <SEO title="Posts" />
      <Layout>
        <SectionTitle>Posts</SectionTitle>
        <br />

        <PostsList>
          {utils
            .getEdges(query)
            .map(utils.mapFields)
            .filter(node => node.lang === language && node)
            .map(({ title, slug, lang, date, excerpt }) => (
              <Post>
                <Link to={`post/${lang}/${slug}`}>
                  <h2>{title}</h2>
                  <h5>{date}</h5>
                  <h5>{excerpt}</h5>
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
    font-family: "Slab Regular";
    text-decoration: none;
    color: var(--black);
    margin
  }
`;

const Post = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 40px;
`;

export default Posts;
