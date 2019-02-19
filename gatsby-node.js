exports.createPages = ({ actions: { createPage } }) => {
    // getCarData is a function that fetches our data
    const allCars = [
        {
            name: 'Lotus',
            model: 'Elise'
        },
        {
            name: 'Nissan',
            model: '240SX'
        },
        {
            name: 'Subaru',
            model: 'BRZ'
        }
    ];

    createPage({
        path: '/cars',
        component: require.resolve('./src/templates/cars.js'),
        context: { allCars }
    })
}

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: node.fields.slug,
                component: path.resolve(`./src/templates/blog-post.js`),
                context: {
                    // Data passed to context is available
                    // in page queries as GraphQL variables.
                    slug: node.fields.slug,
                },
            })
        })
    })
}