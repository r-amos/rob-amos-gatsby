module.exports = {
  siteMetadata: {
    title: `Robert Amos`
  },

  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    }
  ]
};
