require("dotenv").config()

module.exports = {
  siteMetadata: {
    description: "Personal page of Kalli",
    locale: "en",
    showThemeLogo: true,
    title: "Kalli",
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
    {
      resolve: "gatsby-plugin-react-svg",
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-github",
      options: {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`, // https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/
        },
        queries: [
          `query repositories {
            user(login: "${process.env.GITHUB_USERNAME}") {
              repositories(first: 10, privacy: PUBLIC, orderBy: {field: UPDATED_AT, direction: DESC}) {
                nodes {
                  name
                  description
                  createdAt
                  nameWithOwner
                  url
                  sshUrl
                  primaryLanguage {
                    name
                    color
                  }
                  repositoryTopics(last: 10) {
                    nodes {
                      url
                      topic {
                        name
                      }
                    }
                  }
                  languages(first: 5, orderBy: {field: SIZE, direction: DESC}) {
                    nodes {
                      name
                      color
                    }
                  }
                }
              }
              starredRepositories(first: 10,orderBy: {
                field: STARRED_AT,
                direction: DESC
              }) {
                nodes {
                  nameWithOwner
                  url
                }
              }
            }
          }`,
        ],
      },
    },
  ],
}
