import { graphql } from "gatsby"
import { shape, string, arrayOf } from "prop-types"

export const ProfileType = {
  company: string,
  focus: string,
  focus_url: string,
  initials: string,
  userProfile: shape({
    fullName: string.isRequired,
    title: string.isRequired,
    description: string.isRequired,
    photo: string.isRequired,
    url: string.isRequired,
  }),
  education: arrayOf(
    shape({
      schoolName: string.isRequired,
      degreeName: string.isRequired,
      fieldOfStudy: string.isRequired,
      startDate: string.isRequired,
      endDate: string.isRequired,
      durationInDays: string.isRequired,
    })
  ),
  experiences: arrayOf(
    shape({
      title: string.isRequired,
      company: string.isRequired,
      employmentType: string.isRequired,
      startDate: string.isRequired,
      endDate: string.isRequired,
      endDateIsPresent: string.isRequired,
      description: string.isRequired,
      durationInDays: string.isRequired,
    })
  ),
}

export const query = graphql`
  fragment ProfileFragment on ProfileJson {
    company
    focus
    focus_url
    initials
    userProfile {
      fullName
      title
      description
      photo
      url
    }
    education {
      schoolName
      degreeName
      fieldOfStudy
      startDate
      endDate
      durationInDays
    }
    experiences {
      title
      company
      employmentType
      startDate
      endDate
      endDateIsPresent
      description
      durationInDays
    }
  }
`
