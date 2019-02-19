// The gatsby-config.js is another special file that Gatsby will automatically recognize. This is where you add plugins and other site configuration.
module.exports = {
    plugins: [
        `gatsby-plugin-typography`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        }]
    ,
    siteMetadata: {
        title: 'Stack Overflow:: A Blog'
    }
}