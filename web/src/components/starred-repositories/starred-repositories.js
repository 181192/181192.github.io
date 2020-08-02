import React from "react"
import StarredRepository from "./starred-repository"
import { arrayOf, shape, RepositoryType, GitHubUserType } from "../../types"

const StarredRepositories = ({ starredRepositories, profile }) => (
  <>
    <h5 className="font-header font-semibold text-front text-sm uppercase mt-12 mb-3">
      My latest starred repositories on{" "}
      <a className="underline" href="https://github.com">
        github.com
      </a>
    </h5>
    <div className="flex-wrap grid col-gap-2 grid-cols-2">
      {starredRepositories.map((repo, i) => (
        <StarredRepository key={`${repo.name}_${i}`} {...repo} />
      ))}
    </div>
    <div className="text-sm text-center">
      <p>
        See more at{" "}
        <a
          className="underline"
          href={`${profile.url}?tab=stars`}
          alt="github.com stars"
          rel="noreferrer noopener"
          target="_blank"
        >
          my github profile
        </a>
      </p>
    </div>
  </>
)

StarredRepositories.propTypes = {
  starredRepositories: arrayOf(shape(RepositoryType)),
  profile: shape(GitHubUserType),
}

export default StarredRepositories
