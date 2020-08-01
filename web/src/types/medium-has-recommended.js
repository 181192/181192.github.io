import { graphql } from "gatsby"
import { shape, string } from "prop-types"

export const MediumHasRecommendedType = {
  title: string.isRequired,
  content: shape({
    subtitle: string.isRequired,
  }),
  author: shape({
    name: string.isRequired,
    username: string.isRequired,
  }),
  virtuals: shape({
    previewImage: shape({
      imageId: string.isRequired
    })
  }),
  url: string.isRequired,
}

export const query = graphql`
  fragment MediumHasRecommendedFragment on MediumHasRecommendedJson {
    title
    virtuals {
      previewImage {
        imageId
      }
    }
    content {
      subtitle
    }
    author {
      name
      username
    }
    url
  }
`
