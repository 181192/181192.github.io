import React from "react"
import { RepositoryType } from "../../types"

const ProjectTags = ({ tags }) => (
  <>
    {tags.nodes.map(tag => (
      <li
        className="inline-block px-3 py-1 mr-1 mt-1 font-medium text-xs rounded-lg border border-back"
        key={tag.topic.name}
      >
        {tag.topic.name}
      </li>
    ))}
  </>
)

ProjectTags.propTypes = {
  tags: RepositoryType.repositoryTopics,
}

export default ProjectTags
