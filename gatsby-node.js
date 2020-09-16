// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require(`path`)
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const servicesPost = path.resolve(`./src/templates/services.js`)

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/(content)/(services)/" } }
          sort: { fields: [frontmatter___title], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
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

  // Create services posts pages.
  const posts = result.data.allMarkdownRemark.edges
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: servicesPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })




  // BLOG

  const blogPost = path.resolve(`./src/pages/blog.js`)

  const blogResult = await graphql(
    `
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/(content)/(blog)/" } }
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
              }
            }
          }
        }
      }
    `
  )
  if (blogResult.errors) {
    throw blogResult.errors
  }

  // Create services posts pages.
  const blogPosts = blogResult.data.allMarkdownRemark.edges
  blogPosts.forEach((post, index) => {
    const previous = index === blogPosts.length - 1 ? null : blogPosts[index + 1].node
    const next = index === 0 ? null : blogPosts[index - 1].node

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
    // Create blog post list pages
    const blogPostsPerPage = 2;
    const numPages = Math.ceil(blogPosts.length / blogPostsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: `/blog/${i + 1}`,
        component: path.resolve('./src/pages/blog.js'),
        context: {
          limit: blogPostsPerPage,
          skip: i * blogPostsPerPage,
          numPages,
          currentPage: i + 1
        },
      });
    });
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (
    node.internal.type === `MarkdownRemark` &&
    node.fileAbsolutePath.includes("services")
  ) {
    const value = createFilePath({
      node,
      getNode,
      basePath: `content/services`,
    })
    createNodeField({
      name: `slug`,
      node,
      value: `/services${value}`,
    })
  } else if (
    node.internal.type === `MarkdownRemark` &&
    node.fileAbsolutePath.includes("blog")
  ) {
    const value = createFilePath({
      node,
      getNode,
      basePath: `content/blog`,
    })
    createNodeField({
      name: `slug`,
      node,
      value: `/blog${value}`,
    })
  }
}

