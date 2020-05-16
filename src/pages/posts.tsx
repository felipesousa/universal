import React, { useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import * as utils from "../utils";
import Layout from "../components/layout";

import SEO from "../components/seo";

const Posts = () => {
  const [lang, setLang] = useState("en");

  const query = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "posts" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              category
              date
              lang
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <SEO title="Posts" />
      <Layout>
        <h1>Posts</h1>
        <select value={lang} onChange={e => setLang(e.target.value)}>
          <option value="pt">PT</option>
          <option value="en">EN</option>
        </select>
        <ul>
          {utils
            .getEdges(query)
            .map(utils.mapNodeFields)
            .filter(node => node.lang === lang && node)
            .map(({ title, slug, lang, date }) => (
              <Link to={`post/${lang}/${slug}`}>
                <h2>{title}</h2>
                <h5>{date}</h5>
              </Link>
            ))}
        </ul>
      </Layout>
    </>
  );
};

export default Posts;
