import { SiBootstrap, SiExpress, SiFigma, SiGit, SiJavascript, SiMongodb, SiNodedotjs, SiReact, SiRedux, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'
import { motion } from 'framer-motion'
import TechComp from '../normalComp/TechComp'

function TechStack() {
  return (
    <motion.div className='  mx-auto sm:w-[85%] lg:w-[70%] flex flex-col justify-center items-center gap-y-2 mt-2'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className='w-full  border-2 border-secondary p-3 rounded-lg bg-card'>
        <h3 className='font-bld text-white text-xl bg-transparent '>Tech stacks </h3>
        <div className='flex flex-wrap gap-5 mt-5 justify-center bg-transparent'>
          <motion.div
            className='bg-transparent'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >

            <TechComp
              title='Javascript'
              icon={SiJavascript}
            />
          </motion.div>
          <motion.div
            className='bg-transparent'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >

            <TechComp
              title='Typescript'
              icon={SiTypescript}
            />
          </motion.div>
          <motion.div
            className='bg-transparent'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >

            <TechComp
              title='React'
              icon={SiReact}
            />
          </motion.div>
          <motion.div
            className='bg-transparent'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >

            <TechComp
              title='React-Native'
              icon={TbBrandReactNative}
            />
          </motion.div>
          <motion.div
            className='bg-transparent'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >

            <TechComp
              title='Express'
              icon={SiExpress}
            />
          </motion.div>
          <motion.div
            className='bg-transparent'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >

            <TechComp
              title='Node'
              icon={SiNodedotjs}
            />
          </motion.div>
          <motion.div
            className='bg-transparent'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >

            <TechComp
              title='Mongo DB'
              icon={SiMongodb}
            />
          </motion.div>
          <motion.div
            className='bg-transparent'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >

            <TechComp
              title='Git'
              icon={SiGit}
            />
          </motion.div>
          <motion.div
            className='bg-transparent'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >

            <TechComp
              title='Redux'
              icon={SiRedux}
            />
          </motion.div>
          <motion.div
            className='bg-transparent'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >

            <TechComp
              title='Figma'
              icon={SiFigma}
            />
          </motion.div>
          <motion.div
            className='bg-transparent'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >

            <TechComp
              title='Tailwindcss'
              icon={SiTailwindcss}
            />
          </motion.div>
          <motion.div
            className='bg-transparent'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >

            <TechComp
              title='Bootstrap'
              icon={SiBootstrap}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default TechStack
