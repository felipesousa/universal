const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const talkPost = path.resolve(`./src/templates/talk-post.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                type
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const payload = result.data.allMarkdownRemark.edges

  const { posts, talks } = payload.reduce((total, current) => {
    const { node: { frontmatter: { type } } } = current;
    return {
      ...total,
      [type]: (total[type] || []).concat(current)
    }
  }, {});

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  talks.forEach((talk, index) => {
    const previous = index === talks.length - 1 ? null : talks[index + 1].node
    const next = index === 0 ? null : talks[index - 1].node

    createPage({
      path: `talks${talk.node.fields.slug}`,
      component: talkPost,
      context: {
        slug: talk.node.fields.slug,
        previous,
        next,
      },
    })
  })

  const postsPerPage = 5
  const numPages = Math.ceil(posts.length / postsPerPage)
  const numTalkPages = Math.ceil(talks.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? '/' : `/${i + 1}`,
      component: path.resolve("./src/templates/blog-list.tsx"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/talks` : `/talks/${i + 1}`,
      component: path.resolve("./src/templates/talk-list.tsx"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages: numTalkPages,
        currentPage: i + 1,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
