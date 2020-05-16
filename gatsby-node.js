const path = require("path");
const utils = require("./src/utils/");

module.exports = {
  onCreateNode: ({ node, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === "MarkdownRemark") {
      createNodeField({
        node,
        name: "slug",
        value: path.basename(node.fileAbsolutePath, ".md"),
      });
    }
  },
  createPages: async ({ graphql, actions: { createPage } }) => {
    const POSTS_TEMPLATE = path.resolve("./src/templates/post.template.tsx");
    const TALKS_TEMPLATE = path.resolve("./src/templates/talk.template.tsx");

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
              }
            }
          }
        }
      }
    `);

    const posts = utils.getDataFromCategory(data, "posts");
    const talks = utils.getDataFromCategory(data, "talks");

    talks.forEach(({ slug }) => {
      createPage({
        component: TALKS_TEMPLATE,
        path: `/talk/${slug}`,
        context: { slug },
      });
    });

    posts.forEach(({ slug }) => {
      createPage({
        component: POSTS_TEMPLATE,
        path: `/post/${slug}`,
        context: { slug },
      });
    });
  },
};
