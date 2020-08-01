import React from "react"
import { ProfileType } from "../../types"

const ProfileImage = ({ image, name }) => (
  <div className="relative inline-block leading-none">
    <img
      src={image}
      alt={name}
      className="rounded-full relative z-10"
      style={{ filter: "grayscale(90%)" }}
    />
    <div className="absolute inset-0 rounded-full bg-lead z-0 transform translate-x-8"></div>
  </div>
)

ProfileImage.propTypes = {
  image: ProfileType.userProfile.photo,
  name: ProfileType.userProfile.fullName,
}

export default ProfileImage
