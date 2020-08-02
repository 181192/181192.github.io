import React from "react"
import { string } from "prop-types"

const ProfileImage = ({ url, title }) => (
  <div className="relative inline-block leading-none">
    <img
      src={url}
      alt={title}
      className="rounded-full relative z-10 h-auto w-32 sm:w-48 md:w-56 lg:w-64"
      style={{ filter: "grayscale(90%)" }}
    />
    <div className="absolute inset-0 rounded-full bg-lead z-0 transform translate-x-8"></div>
  </div>
)

ProfileImage.propTypes = {
  url: string.isRequired,
  title: string.isRequired
}

export default ProfileImage
