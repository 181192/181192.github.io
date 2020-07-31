import React from "react"
import { arrayOf, shape, ProfileType } from "../../types"
import "./education-history.css"

const EducationHistory = ({ history }) => {
  return (
    <>
      <h5 className="font-header font-semibold text-front text-sm uppercase mt-12 mb-3 text-center">
        Education history
      </h5>
      <div className="history flex flex-col relative pt-6 pb-6">
        {history.map(({ schoolName, degreeName, fieldOfStudy, startDate, endDate }, i) => (
          <div
            className="history-entry relative w-1/2 py-4"
            key={`${schoolName}_${i}`}
          >
            <span className="dot-bg w-14 h-14 absolute bg-line inline-flex rounded-full items-center justify-center">
              <span className="dot w-5 h-5 bg-back-light rounded-full" />
            </span>
            <h4 className="subpixel-antialiased">{schoolName}</h4>

            {degreeName && (
              <h5 className="text-sm font-normal mb-1">{degreeName}</h5>
            )}
            {fieldOfStudy && (
              <h5 className="text-sm font-normal mb-1">{fieldOfStudy}</h5>
            )}
            {startDate && endDate && (
              <span className="text-sm font-medium opacity-50">{new Date(startDate).getFullYear()}-{new Date(endDate).getFullYear()}</span>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

EducationHistory.propTypes = {
  history: arrayOf(shape(ProfileType.education)),
}

export default EducationHistory
