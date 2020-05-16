const utils = require("./src/utils/");

const onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    createNodeField({
      node,
      name: "slug",
      value: utils.extractFilename(node),
    });
  }
};

const createPages = async ({ graphql, actions: { createPage } }) => {
  const POSTS_TEMPLATE = utils.getTemplate("./src/templates/post.template.tsx");
  const TALKS_TEMPLATE = utils.getTemplate("./src/templates/talk.template.tsx");

  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              category
              lang
            }
          }
        }
      }
    }
  `);

  // TODO: refactor, use reducer instead of a filtered method;
  const posts = utils.getDataFromCategory(data, "posts");
  const talks = utils.getDataFromCategory(data, "talks");

  for (const talk of talks) {
    createPage({
      component: TALKS_TEMPLATE,
      path: `/talk/${talk.lang}/${talk.slug}`,
      context: { slug: talk.slug },
    });
  }

  for (const post of posts) {
    createPage({
      component: POSTS_TEMPLATE,
      path: `/post/${post.lang}/${post.slug}`,
      context: { slug: post.slug },
    });
  }
};

module.exports = { onCreateNode, createPages };
