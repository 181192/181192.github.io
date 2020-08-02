import React from "react"
import MediumHasRecommended from "./medium-has-recommended"
import { arrayOf, shape, MediumHasRecommendedType } from "../../types"
import { graphql, useStaticQuery } from "gatsby"

const MediumHasRecommendedArticles = ({ mediumHasRecommendedArticles }) => {
  const { url: mediumUrl } = useStaticQuery(graphql`
    query {
      socialYaml(name: { eq: "medium" }) {
        name
        url
      }
    }
  `).socialYaml

  return (
    <>
      <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
        My latest recommendations from{" "}
        <a
          className="underline"
          href="https://medium.com"
          alt="medium.com"
          rel="noreferrer noopener"
          target="_blank"
        >
          medium.com
        </a>
      </h5>
      <div className="flex-wrap">
        {mediumHasRecommendedArticles.map((article, i) => (
          <MediumHasRecommended key={`${article.name}_${i}`} {...article} />
        ))}
      </div>
      {mediumUrl && (
        <p>
          See more at{" "}
          <a
            className="underline"
            href={`${mediumUrl}/has-recommended`}
            alt="medium.com profile"
            rel="noreferrer noopener"
            target="_blank"
          >{`${mediumUrl}/has-recommended`}</a>
        </p>
      )}
    </>
  )
}

MediumHasRecommendedArticles.propTypes = {
  mediumHasRecommendedArticles: arrayOf(shape(MediumHasRecommendedType)),
}

export default MediumHasRecommendedArticles
