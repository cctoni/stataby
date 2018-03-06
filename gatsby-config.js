module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-glamor',
      `gatsby-transformer-remark`,
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography`,
        }
      },
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              name: `src`,
              path: `${__dirname}/src/`,
          }
      },
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              name: `content`,
              path: `${__dirname}/content/`,
          }
      },
      {
          resolve: `gatsby-source-github`,
          options: {
              token: `e64982de4e39ce89c8c3e6c55dbc85aab67891c7`,
              variables: {},
              graphQLQuery: `stataContent`,
          }
      }
  ],
};
