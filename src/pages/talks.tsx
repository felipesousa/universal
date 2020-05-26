import React, { useContext } from "react";
import { Link, navigate, graphql, PageProps } from "gatsby";
import styled from "styled-components";

import { Layout, SEO, SectionTitle } from "../components";
import LanguageContext from "../providers/";
import utils from "../utils";

const TITLE = {
  en: "Talks",
  pt: "Palestras",
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "talks" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            category
            date(formatString: "MM D, YYYY")
            lang
            location
            presentation
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

const Talks = (_query: PageProps) => {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <SEO title={TITLE[language]} />
      <Layout>
        <SectionTitle>{TITLE[language]}</SectionTitle>

        <PostsList>
          {utils
            .getEdges(_query.data)
            .map(utils.mapFields)
            .filter(node => node.lang === language && node)
            .map(({ title, slug, lang, location, date, presentation }, i) => {
              const _value = parseInt(date.slice(0, 2));
              const _date = date.slice(3);
              const _month = utils.getMonth(language, _value);

              return (
                <Post key={i}>
                  <Link className="post-link" to={`/talks/${lang}/${slug}`}>
                    <SectionTitle className="talks hover" line={false}>
                      {title}
                    </SectionTitle>
                  </Link>
                  <TalkDetails>
                    <div>
                      <p>🌍 {location}</p>
                      <p>
                        🗓 {_month} {_date}
                      </p>
                      <p>🎤 {presentation}</p>
                    </div>
                  </TalkDetails>
                </Post>
              );
            })}
        </PostsList>
      </Layout>
    </>
  );
};

const TalkDetails = styled.section`
  border-bottom: 4px solid var(--black);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  font-family: "Slab Regular";
  margin-top: 40px;
  padding-bottom: 20px;
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
    text-transform: capitalize;
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

  p {
    margin: 0;
    margin-right: 20px;
    line-height: 1.5;
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
    box-sizing: border-box;

    a.post-link {
      // margin-top: -30px;
    }
  }

  @media screen and (max-width: 768px) {
    .decoration {
      font-size: 1.7rem !important;
      margin-bottom: 20px;
    }
  }
`;

export default Talks;
