import { Link } from "react-router-dom"
import ProjectCardComp from "../normalComp/ProjectCardComp"

function ProjectComp() {
  return (
    <div className=" mx-auto sm:w-[85%] lg:w-[70%] flex flex-col   gap-y-2">
      <div className="border-2 border-secondary p-3 mt-3 rounded-lg">
        <div className='  bg-transparent rounded-lg '>
          <h3 className='font-bld text-white text-xl bg-transparent'>Projects</h3>
        </div>
        <div className="mt-5 flex flex-col gap-7">
          {/* <ProjectCardComp />
            <ProjectCardComp />
            <ProjectCardComp />
            <ProjectCardComp /> */}
        </div>
        <Link to='/projects'>
          <h3 className="font-bld text-white text-xl bg-transparent">More</h3>
        </Link>
      </div>
    </div>
  )
}

export default ProjectComp
