import React from "react"
import { StarredRepositoryType } from "../../types"
import { FaGithub } from "react-icons/fa"

const StarredRepository = props => {
  const { nameWithOwner, description, url } = props

  return (
    <div className="border-t-4 border-line relative flex flex-wrap bg-back-light p-4 lg:p-8 bg-no-repeat text-sm mb-6">
      <div className="lg:flex-1">
        <h4 className="font-bold">{nameWithOwner}</h4>
        {url && (
          <a
            className="text-front underline break-all hover:opacity-75 transition-opacity duration-150"
            href={url}
            rel="noreferrer noopener"
            target="_blank"
          >
            {url}
          </a>
        )}
        <p className="w-full py-4 whitespace-pre-line">{description}</p>
        <span className="absolute right-0 bottom-0 mb-5 mr-5 text-back">
          <FaGithub className="w-6 h-6" />
        </span>
      </div>
    </div>
  )
}

StarredRepository.propTypes = StarredRepositoryType

export default StarredRepository
