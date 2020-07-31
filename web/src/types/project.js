import { graphql } from "gatsby"
import { shape, string, arrayOf } from "prop-types"

export const ProjectType = {
  name: string.isRequired,
  description: string.isRequired,
  createdAt: string.isRequired,
  nameWithOwner: string.isRequired,
  url: string.isRequired,
  sshUrl: string.isRequired,
  primaryLanguage: shape({
    name: string.isRequired,
    color: string.isRequired,
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
        color: string.isRequired,
      })
    ),
  }),
}

export const query = graphql`
  fragment ProjectsFragment on GithubUserRepositoriesNodes {
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
    languages {
      nodes {
        name
        color
      }
    }
    repositoryTopics {
      nodes {
        topic {
          name
        }
        url
      }
    }
  }
`
