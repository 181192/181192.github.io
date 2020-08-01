import React from "react"
import { MediumHasRecommendedType } from "../../types"
import { FaMedium } from "react-icons/fa"

const MediumHasRecommended = props => {
  const { title, content, author, url, virtuals } = props

  return (
    <div className="border-t-4 border-line relative flex flex-wrap bg-back-light p-4 lg:p-8 bg-no-repeat text-sm mb-6">
      <div className="w-full pb-4 lg:w-2/5 lg:pr-8 lg:pb-0">
        <img
          src={
            "https://miro.medium.com/freeze/fit/c/300/150/" +
            virtuals.previewImage.imageId
          }
          alt={title}
        />
      </div>
      <div className="lg:flex-1 h-full">
        <h4 className="font-bold">
          <a
            className="text-front underline break-all hover:opacity-75 transition-opacity duration-150"
            href={url}
            rel="noreferrer noopener"
            target="_blank"
          >
            {title}
          </a>
        </h4>
        <p className="py-4">{content.subtitle}</p>
        <p className="text-xs italic">By {author.name}</p>
        <span className="absolute right-0 bottom-0 mb-5 mr-5 text-back">
        <FaMedium className="w-6 h-6" />
      </span>
      </div>
    </div>
  )
}

MediumHasRecommended.propTypes = MediumHasRecommendedType

export default MediumHasRecommended
