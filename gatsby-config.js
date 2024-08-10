require("dotenv").config({
  path: ".env",
});

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby Shop`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-apollo",
      options: {
        uri: process.env.WPGRAPHQL_URL,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.WPGRAPHQL_URL,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "static/favicon.png",
      },
    },
  ],
};
