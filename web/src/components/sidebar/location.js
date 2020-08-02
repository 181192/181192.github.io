import React from "react"
import { FaMapMarkerAlt } from "react-icons/fa"
import { GitHubUserType } from "../../types"

const Location = ({ location }) => (
  <>
    <div className="inline-flex items-center bg-front mt-6 w-auto">
      <span className="text-lead border-r-2 border-back px-3">
        <FaMapMarkerAlt className="h-4 w-4" />
      </span>
      <span className="text-back font-header font-bold py-1 px-3 text-lg">
        {location}
      </span>
    </div>
  </>
)

Location.propTypes = {
  location: GitHubUserType.location,
}

export default Location
