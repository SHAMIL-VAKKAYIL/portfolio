import ProjectCardComp from "../normalComp/ProjectCardComp"

function Project() {
  return (
    <div className=" mx-auto sm:w-[85%] lg:w-[70%] flex flex-col   gap-y-2">
      <div className="border-2 border-secondary p-3 mt-3 rounded-lg">
        <div className='  bg-transparent rounded-lg '>
            <h3 className='font-bld text-white text-xl bg-transparent'>Projects</h3>
        </div>
        <div className="mt-5 flex flex-col gap-7">
            <ProjectCardComp />
            <ProjectCardComp />
            <ProjectCardComp />
            <ProjectCardComp />
        </div>
      </div>
    </div>
  )
}

export default Project
