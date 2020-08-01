import React from "react"
import { ProjectType } from "../../types"
import ProjectTags from "./project-tags"
import ProjectLanguages from "./project-language"
import ProjectIcon from "./project-icon"

const Project = props => {
  const {
    description,
    nameWithOwner,
    url,
    repositoryTopics,
    languages
  } = props

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
        <ul className="pr-2">
          {repositoryTopics && <ProjectTags tags={repositoryTopics} />}
          {languages && <ProjectLanguages languages={languages} />}
        </ul>
        <ProjectIcon />
      </div>
    </div>
  )
}

Project.propTypes = ProjectType

export default Project
