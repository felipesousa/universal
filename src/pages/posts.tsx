import React, { useContext } from "react";
import { Link, graphql, PageProps } from "gatsby";
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
            date(formatString: "MM Do, YYYY")
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
            .map(({ title, slug, lang, date, excerpt, timeToRead }) => {
              const _value = parseInt(date.slice(0, 2));
              const _date = date.slice(3);
              const _month = utils.getMonth(language, _value);

              return (
                <Post>
                  <Link className="post-link" to={`post/${lang}/${slug}`}>
                    <SectionTitle className="decoration" line={false}>
                      {title}
                    </SectionTitle>
                  </Link>
                  <PostMain>
                    <Excerpt>
                      {excerpt}
                      <Link className="readmore" to={`post/${lang}/${slug}`}>
                        Read More.
                      </Link>
                    </Excerpt>
                  </PostMain>
                  <PostFooter>
                    <div>
                      <span>
                        {utils.translatePostDetails["published"][language]}
                        {_month} {_date}.
                      </span>
                      <span>
                        {utils.translatePostDetails["timeToRead"][language]}
                        {timeToRead} min.
                      </span>
                    </div>
                  </PostFooter>
                </Post>
              );
            })}
        </PostsList>
      </Layout>
    </>
  );
};

const PostMain = styled.main`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  font-family: "Slab Regular";

  p {
    margin: 0;
    font-size: 1rem;
    margin-top: -20px;
    margin-bottom: 20px;
    width: 100%;

    a {
      font-size: 1rem;
      margin-left: 5px;
      text-decoration: underline;
    }
  }
`;

const Excerpt = styled.p`
  margin: 0;
  font-size: 1rem;

  &:first-letter {
    font-weight: bold;
    font-size: 50px;
    padding-left: 15px;
    line-height: 2;
  }

  a {
    font-size: 1rem;
    margin-left: 5px;
    text-decoration: underline;
    color: var(--black);
  }
`;

const PostFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  font-family: "Slab Regular";
  margin-top: 10px;
  padding-bottom: 0px;
  margin-bottom: 10px;
  font-size: 0.9rem;
  font-weight: bold;

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: auto;
  }

  a.readmore {
    display: flex;
    color: var(--black);
    text-transform: capitalize;
    margin-bottom: 10px;
    text-decoration: underline;

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

const PostsList = styled.ul`
  list-style: none;
  margin: 0;

  a {
    font-family: Slab Regular;
    color: var(--black);

    h2 {
      font-family: Slab Bold;
    }
  }
`;

const Post = styled.article`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-bottom: 0px;

  a.post-link {
    text-decoration: none !important;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    border-bottom: 3px solid var(--gray);
    padding-bottom: 30px;
    margin-bottom: 40px;

    .decoration {
      font-size: 1.7rem !important;
      margin-bottom: 20px;
    }
  }
`;

export default Posts;
