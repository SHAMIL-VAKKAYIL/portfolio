import TechComp from '../normalComp/TechComp'
import { SiBootstrap, SiExpress, SiFigma, SiGit, SiJavascript, SiMongodb, SiNodedotjs, SiReact, SiRedux, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'

function TechStack() {
  return (
    <div className='  mx-auto sm:w-[85%] lg:w-[70%] flex flex-col justify-center items-center gap-y-2 mt-2'>
      <div className='w-full  border-2 border-secondary p-3 rounded-lg '>
        <h3 className='font-bld text-white text-xl bg-transparent '>Tech stacks </h3>
        <div className='flex flex-wrap gap-5 mt-5 justify-center '>
          <TechComp
            title='Javascript'
            icon={SiJavascript}
          />
          <TechComp
            title='Typescript'
            icon={SiTypescript}
          />
          <TechComp
            title='React'
            icon={SiReact}
          />
          <TechComp
            title='React-Native'
            icon={TbBrandReactNative}
          />
          <TechComp
            title='Express'
            icon={SiExpress}
          />
          <TechComp
            title='Node'
            icon={SiNodedotjs}
          />
          <TechComp
            title='Mongo DB'
            icon={SiMongodb}
          />
          <TechComp
            title='Git'
            icon={SiGit}
          />
          <TechComp
            title='Redux'
            icon={SiRedux}
          />
          <TechComp
            title='Figma'
            icon={SiFigma}
          />
          <TechComp
            title='Tailwindcss'
            icon={SiTailwindcss}
          />
          <TechComp
            title='Bootstrap'
            icon={SiBootstrap}
          />
        </div>
      </div>
    </div>
  )
}

export default TechStack
