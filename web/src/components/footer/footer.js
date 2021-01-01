import React from "react"
import { string } from "prop-types"

const Footer = ({ name }) => (
  <footer className=" pt-2">
    {/* <div className="md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 flex items-center">
      <div className="w-2/3 text-back-light font-header text-xs">
        <b>
          &copy; {new Date().getFullYear()} {name}.
        </b>{" "}
        All rights reserved.
      </div>
    </div> */}
  </footer>
)

Footer.propTypes = {
  name: string.isRequired,
}

export default Footer
