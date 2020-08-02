import { graphql } from "gatsby"
import React from "react"
import CustomFonts from "../components/custom-fonts/custom-fonts"
import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import MainContent from "../components/main-content/main-content"
import SEO from "../components/seo/seo"
import Sidebar from "../components/sidebar/sidebar"
import StructuredData from "../components/structured-data/structured-data"
import "../styles/style.css"

const IndexPage = ({ data }) => {
  const {
    history,
    profile,
    repositories,
    social,
    starredRepositories,
    mediumHasRecommendedArticles,
  } = data

  return (
    <div className="antialiased bg-back leading-normal font-text text-front">
      <SEO />
      <StructuredData profile={profile} social={social.nodes} />
      <CustomFonts />

      <Header initials={profile.initials} />

      <div className="md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 flex flex-wrap pt-4 my-8">
        <Sidebar profile={profile} social={social.nodes} />

        <MainContent
          history={history.nodes}
          profile={profile}
          projects={repositories.user.repositories.nodes}
          starredRepositories={
            starredRepositories.user.starredRepositories.nodes
          }
          mediumHasRecommendedArticles={mediumHasRecommendedArticles.nodes}
        />
      </div>

      <Footer name={profile.userProfile.fullName} />
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query($githubUserName: String!) {
    site {
      siteMetadata {
        showThemeLogo
      }
    }
    profile: profileJson {
      ...ProfileFragment
    }
    social: allSocialYaml(filter: { url: { ne: null } }) {
      nodes {
        ...SocialFragment
      }
    }
    history: allWorkHistoryYaml {
      nodes {
        ...WorkHistoryFragment
      }
    }
    repositories: github {
      user(login: $githubUserName) {
        repositories(
          first: 10
          orderBy: { field: UPDATED_AT, direction: DESC }
        ) {
          nodes {
            ...RepositoryFragment
          }
        }
      }
    }
    starredRepositories: github {
      user(login: $githubUserName) {
        starredRepositories(
          first: 10
          orderBy: { field: STARRED_AT, direction: DESC }
        ) {
          nodes {
            ...RepositoryFragment
          }
        }
      }
    }
    mediumHasRecommendedArticles: allMediumHasRecommendedJson {
      nodes {
        ...MediumHasRecommendedFragment
      }
    }
  }
`
