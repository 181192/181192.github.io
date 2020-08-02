require("dotenv").config()
const colors = require("./src/themes/gh-inspired")

module.exports = {
  siteMetadata: {
    title: "Kalli",
    description: "Personal page of Kalli",
    locale: "en",
    siteUrl: "https://www.kalli.no",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("tailwindcss")(require("./tailwind.config")("gh-inspired")),
          require("postcss-input-range"),
          require("autoprefixer"),
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: "content/",
      },
    },
    `gatsby-plugin-react-svg`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        url: "https://api.github.com/graphql",
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
        },
        refetchInterval: 360,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: true,
        cookieDomain: "kalli.no",
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Kalli",
        short_name: "Kalli",
        start_url: "/",
        background_color: colors.back,
        theme_color: colors.lead,
        display: "standalone",
        icon: "content/images/icon.png",
      },
    },
  ],
}
