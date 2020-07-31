import { graphql } from "gatsby"
import { string } from "prop-types"

export const StarredRepositoryType = {
  nameWithOwner: string.isRequired,
  description: string,
  url: string.isRequired,
}

export const query = graphql`
  fragment StarredRepositoriesFragment on GithubUserStarredRepositoriesNodes {
    nameWithOwner
    description
    url
  }
`
