import React from "react"
import StarredRepository from "./starred-repository"
import { arrayOf, shape, RepositoryType } from "../../types"

const StarredRepositories = ({ starredRepositories }) => (
  <>
    <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
      My latest starred repositories on <a className="underline" href="https://github.com">github.com</a>
    </h5>
    <div className="flex-wrap grid col-gap-2 grid-cols-2">
    {starredRepositories.map((repo, i) => (
      <StarredRepository key={`${repo.name}_${i}`} {...repo} />
    ))}
    </div>
  </>
)

StarredRepositories.propTypes = {
  starredRepositories: arrayOf(shape(RepositoryType)),
}

export default StarredRepositories
