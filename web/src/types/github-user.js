import { graphql } from "gatsby"
import { string, bool } from "prop-types"

export const GitHubUserType = {
    name: string.isRequired,
    email: string,
    bio: string,
    bioHTML: string,
    company: string,
    companyHTML: string,
    websiteUrl: string,
    url: string,
    avatarUrl: string,
    isHireable: bool,
    location: string,
}

export const query = graphql`
  fragment GitHubUserFragment on GitHub_User {
    name
    email
    bio
    bioHTML
    company
    companyHTML
    websiteUrl
    url
    avatarUrl
    isHireable
    location
  }
`
