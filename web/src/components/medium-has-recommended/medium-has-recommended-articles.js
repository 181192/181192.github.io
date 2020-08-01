import React from "react"
import MediumHasRecommended from "./medium-has-recommended"
import { arrayOf, shape, MediumHasRecommendedType } from "../../types"

const MediumHasRecommendedArticles = ({ mediumHasRecommendedArticles }) => (
  <>
    <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
      My latest recommendations from <a className="underline" href="https://medium.com">medium.com</a>
    </h5>
    <div className="flex-wrap">
    {mediumHasRecommendedArticles.map((article, i) => (
      <MediumHasRecommended key={`${article.name}_${i}`} {...article} />
    ))}
    </div>
  </>
)

MediumHasRecommendedArticles.propTypes = {
  mediumHasRecommendedArticles: arrayOf(shape(MediumHasRecommendedType)),
}

export default MediumHasRecommendedArticles
