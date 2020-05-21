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
            date(formatString: "MM D, YYYY")
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
            .map(({ title, slug, lang, date, excerpt, timeToRead }, i) => {
              const _value = parseInt(date.slice(0, 2));
              const _date = date.slice(3);
              const _month = utils.getMonth(language, _value);

              return (
                <Post key={i}>
                  <Link className="post-link" to={`/posts/${lang}/${slug}`}>
                    <SectionTitle className="talks hover" line={false}>
                      {title}
                    </SectionTitle>
                  </Link>
                  <PostMain>
                    <Excerpt>
                      {excerpt}
                      <Link className="readmore" to={`/posts/${lang}/${slug}`}>
                        Read More.
                      </Link>
                    </Excerpt>
                  </PostMain>
                  <PostFooter>
                    <div>
                      <span>
                        🗓 {utils.translatePostDetails["published"][language]}
                        {_month} {_date}
                      </span>
                      <span>
                        ⏰ {utils.translatePostDetails["timeToRead"][language]}
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
  margin-top: 15px;
  font-size: 1rem;

  &:first-letter {
    font-weight: bold;
    font-size: 40px;
    padding-left: 20px;
    padding-right: 2px;
    line-height: 1.5;
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
  font-size: 1.2rem;
  font-weight: bold;

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: auto;
    flex-direction: row;

    p {
      margin-right: 20px;
    }
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
  width: 100%;
  transition: all 0.2s linear;

  a.post-link {
    text-decoration: none !important;
    display: flex;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    margin-bottom: 0px;
    margin-bottom: 80px;

    box-sizing: border-box;

    a.post-link {
      margin-top: -30px;
    }
  }

  @media screen and (max-width: 768px) {
    border-bottom: 4px solid rgba(0, 0, 0, 0.03);
    padding-bottom: 30px;
    margin-bottom: 40px;

    .decoration {
      font-size: 1.7rem !important;
      margin-bottom: 20px;
    }
  }
`;

export default Posts;
