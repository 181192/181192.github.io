import React from "react"
import About from "../about/about"
import Projects from "../projects/projects"
import Skills from "../skills/skills"
import Summary from "../summary/summary"
import Tools from "../tools/tools"
import WorkHistory from "../work-history/work-history"

const MainContent = ({ history, projects, profile }) => {
  return (
    <main className="lg:w-2/3 lg:pl-8 xl:pl-12">
      <Summary profile={profile} />

      <div className="flex flex-wrap">
        <div className="md:w-3/4 pb-12 md:pr-8 lg:pr-12 xl:pr-20">
          {/* {profile.skills && <Skills skills={profile.skills} />} */}
          {<Skills skills={["Kubernetes & Azure", "Java & Go", "Architecture & Infra"]} />}
        </div>
        <div className="md:w-1/4 pb-12">
          {/* {profile.tools && <Tools tools={profile.tools} />} */}
          {<Tools tools={["vscode", "terminator", "kubectl"]} />}
        </div>
      </div>

      {profile.userProfile.description && <About about={profile.userProfile.description} />}
      <Projects projects={projects} />
      <WorkHistory history={history} />
    </main>
  )
}

export default MainContent
