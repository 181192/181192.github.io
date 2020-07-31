import React from "react"
import StarredRepository from "./starred-repository"
import { arrayOf, shape, StarredRepositoryType } from "../../types"

const StarredRepositories = ({ starredRepositories }) => (
  <>
    <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
      My latest starred repositories
    </h5>
    <div className="flex-wrap grid col-gap-2 grid-cols-2">
    {starredRepositories[0].starredRepositories.nodes.map((repo, i) => (
      <StarredRepository key={`${repo.name}_${i}`} {...repo} />
    ))}
    </div>
  </>
)

StarredRepositories.propTypes = {
  starredRepositories: arrayOf(shape(StarredRepositoryType)),
}

export default StarredRepositories
