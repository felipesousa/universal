import React, { useContext, useEffect } from "react";
import { graphql, navigate } from "gatsby";
import styled from "styled-components";
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
        date(formatString: "MM D, YYYY", locale: $lang)
        lang
        presentation
        link
        location
        event
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

  const _value = parseInt(talk.frontmatter.date.slice(0, 2));
  const _date = talk.frontmatter.date.slice(3);
  const _month = utils.getMonth(language, _value);

  return (
    <Layout>
      <SEO title={talk.frontmatter.title} />
      <SectionTitle line={false}>{talk.frontmatter.title}</SectionTitle>

      <TalkDetails>
        <div>
          <p>🌍 {talk.frontmatter.location}</p>
          <p>
            🗓 {_month} {_date}
          </p>
          <p>🎤 {talk.frontmatter.presentation}</p>
        </div>
      </TalkDetails>

      <Content dangerouslySetInnerHTML={{ __html: talk.html }}></Content>
    </Layout>
  );
};

const Content = styled.article`
  padding-bottom: 40px;
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

const TalkDetails = styled.section`
  border-bottom: 4px solid var(--gray);
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

export default TalkTemplate;
