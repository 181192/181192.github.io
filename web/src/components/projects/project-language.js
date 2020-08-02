import React from "react"
import { RepositoryType } from "../../types"

const ProjectLanguages = ({ languages }) => (
  <>
    {languages.nodes.map(language => (
      <li
        className="inline-block px-3 py-1 mr-1 mt-1 font-medium text-xs rounded-lg border border-back"
        key={language.name}
        style={{ backgroundColor: language.color, color: "white" }}
      >
        {language.name}
      </li>
    ))}
  </>
)

ProjectLanguages.propTypes = {
  languages: RepositoryType.languages,
}

export default ProjectLanguages
