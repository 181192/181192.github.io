import { graphql } from "gatsby"
import { shape, string, arrayOf, number, bool } from "prop-types"

export const ProfileType = {
  company: string,
  focus: string,
  focus_url: string,
  initials: string,
  tools: arrayOf(string),
  skills: arrayOf(string),
  userProfile: shape({
    fullName: string.isRequired,
    title: string.isRequired,
    description: string.isRequired,
    photo: string.isRequired,
    url: string.isRequired,
  }),
  education: arrayOf(
    shape({
      schoolName: string,
      degreeName: string,
      fieldOfStudy: string,
      startDate: string,
      endDate: string,
      durationInDays: number,
    })
  ),
  experiences: arrayOf(
    shape({
      title: string,
      company: string,
      employmentType: string,
      startDate: string,
      endDate: string,
      endDateIsPresent: bool,
      description: string,
      durationInDays: number,
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
