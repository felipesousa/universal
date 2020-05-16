const path = require("path");

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
  createPages: async ({ graphql, actions }) => {
    const { createPage } = actions;
    const postsTemplate = path.resolve("./src/templates/post.template.tsx");
    const talksTemplate = path.resolve("./src/templates/talk.template.tsx");

    const query = await graphql(`
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

    console.log(JSON.stringify(query, undefined, 4));

    query.data.allMarkdownRemark.edges
      .filter(edge => edge.node.frontmatter.category === "talks" && edge)
      .forEach(edge => {
        createPage({
          component: talksTemplate,
          path: `/talk/${edge.node.fields.slug}`,
          context: {
            slug: edge.node.fields.slug,
          },
        });
      });

    query.data.allMarkdownRemark.edges
      .filter(edge => edge.node.frontmatter.category === "posts" && edge)
      .forEach(edge => {
        createPage({
          component: postsTemplate,
          path: `/post/${edge.node.fields.slug}`,
          context: {
            slug: edge.node.fields.slug,
          },
        });
      });
  },
};
