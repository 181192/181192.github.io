import React from "react"
import { ProfileType } from "../../types"

const Header = ({ initials }) => (
  <header className="flex justify-between p-4 lg:px-8">
    {/* <span className="inline-flex w-14 h-14 lg:mt-4 font-header font-bold text-xl justify-center items-center text-center text-front border-2 border-solid border-front rounded-full">
      {initials}
    </span> */}
  </header>
)

Header.propTypes = {
  initials: ProfileType.initials,
}

export default Header
