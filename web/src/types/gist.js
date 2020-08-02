import { graphql } from "gatsby"
import { shape, string, number } from "prop-types"

export const GistType = {
  name: string.isRequired,
  stargazers: shape({
    totalCount: number,
  }),
  description: string,
  url: string.isRequired,
}

export const query = graphql`
  fragment GistFragment on GitHub_Gist {
    name
    stargazers {
      totalCount
    }
    description
    url
  }
`
