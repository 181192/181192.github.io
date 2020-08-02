import { graphql } from "gatsby"
import { shape, string, arrayOf } from "prop-types"

export const RepositoryType = {
  name: string.isRequired,
  description: string,
  createdAt: string,
  nameWithOwner: string.isRequired,
  url: string.isRequired,
  sshUrl: string.isRequired,
  primaryLanguage: shape({
    name: string.isRequired,
    color: string,
  }),
  repositoryTopics: shape({
    nodes: arrayOf(
      shape({
        url: string.isRequired,
        topic: shape({
          name: string.isRequired,
        }),
      })
    ),
  }),
  languages: shape({
    nodes: arrayOf(
      shape({
        name: string.isRequired,
        color: string,
      })
    ),
  }),
}

export const query = graphql`
  fragment RepositoryFragment on GitHub_Repository {
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
    languages(first: 10, orderBy: { field: SIZE, direction: DESC }) {
      nodes {
        name
        color
      }
    }
    repositoryTopics(first: 10) {
      nodes {
        topic {
          name
        }
        url
      }
    }
  }
`
