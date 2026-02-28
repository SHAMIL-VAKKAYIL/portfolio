import { SiApachekafka, SiApollographql, SiBootstrap, SiDocker, SiExpress, SiFigma, SiFramer, SiGit, SiGraphql, SiHandlebarsdotjs, SiJavascript, SiMongodb, SiMui, SiNodedotjs, SiPostgresql, SiReact, SiReactrouter, SiRedis, SiRedux, SiRender, SiSocketdotio, SiTailwindcss, SiTypescript, SiVercel } from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { TbBrandReactNative } from 'react-icons/tb'
import { motion, useInView } from 'framer-motion'
import TechComp from '../reusable/TechComp'
import { useRef } from 'react'

function TechStack() {

  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })

  //! container section
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }
  //! tech section
  const techVariant = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,

    }

  }

  return (
    <motion.div
      ref={containerRef}
      className='  mx-auto w-[95%] sm:w-[85%] lg:w-[70%] flex flex-col justify-center items-center gap-y-2 mt-2'
    >
      <div className='w-full  border-2 border-secondary p-3 rounded-lg bg-card'>
        <h3 className='font-bld text-white text-xl bg-transparent '>Tech stacks </h3>
        <motion.div
          className='flex flex-wrap gap-5 mt-5 justify-center bg-transparent'
          variants={containerVariant}
          initial='hidden'
          animate={isInView ? 'visible' : ' hidden'}
        >
          <motion.div
            variants={techVariant}
            className='bg-transparent'
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TechComp
              title='Javascript'
              icon={SiJavascript}
            />
          </motion.div>
          <motion.div
            variants={techVariant}
            className='bg-transparent'
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <TechComp
              title='Typescript'
              icon={SiTypescript}
            />
          </motion.div>
          <motion.div
            variants={techVariant}
            className='bg-transparent'
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TechComp
              title='React'
              icon={SiReact}
            />
          </motion.div>
          <motion.div
            variants={techVariant}
            className='bg-transparent'
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <TechComp
              title='React-Native'
              icon={TbBrandReactNative}
            />
          </motion.div>
          <motion.div
            variants={techVariant}
            className='bg-transparent'
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <TechComp
              title='Handlebars'
              icon={SiHandlebarsdotjs}
            />
          </motion.div>
          <motion.div
            variants={techVariant}
            className='bg-transparent'
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <TechComp
              title='Express'
              icon={SiExpress}
            />
          </motion.div>
          <motion.div
            variants={techVariant}
            className='bg-transparent'
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <TechComp
              title='Node'
              icon={SiNodedotjs}
            />
          </motion.div>
          <motion.div
            variants={techVariant}
            className='bg-transparent'
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <TechComp
              title='Scoket.io'
              icon={SiSocketdotio}
            />
          </motion.div>
          <motion.div
            variants={techVariant}
            className='bg-transparent'
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <TechComp
              title='Mongo DB'
              icon={SiMongodb}
            />
          </motion.div>
          <motion.div
            variants={techVariant}
            className='bg-transparent'
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <TechComp
              title='Git'
              icon={SiGit}
            />
          </motion.div>
          <motion.div
            variants={techVariant}
            className='bg-transparent'
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <TechComp
              title='Redux'
              icon={SiRedux}
            />
          </motion.div>
          <motion.div
            variants={techVariant}
            className='bg-transparent'
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <TechComp
              title='Figma'
              icon={SiFigma}
            />
          </motion.div>
          <motion.div
            variants={techVariant}
            className='bg-transparent'
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <TechComp
              title='Tailwindcss'
              icon={SiTailwindcss}
            />
          </motion.div>
          <motion.div
            variants={techVariant}
            className='bg-transparent'
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <TechComp
              title='Framer'
              icon={SiFramer}
            />
          </motion.div>
          <motion.div
            variants={techVariant}
            className='bg-transparent'
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <TechComp
              title='Bootstrap'
              icon={SiBootstrap}
            />
          </motion.div>
          <motion.div
            variants={techVariant}
            className='bg-transparent'
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <TechComp
              title='GraphQL'
              icon={SiGraphql}
            />
          </motion.div>
          <motion.div
            variants={techVariant}
            className='bg-transparent'
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, delay: 1.7 }}
          >
            <TechComp
              title=''
              icon={FaAws}
            />
          </motion.div>
          <motion.div
            variants={techVariant}
            className='bg-transparent'
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <TechComp
              title='Render'
              icon={SiRender}
            />
          </motion.div>
          <motion.div
            variants={techVariant}
            className='bg-transparent'
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, delay: 1.9 }}
          >
            <TechComp
              title='Apollo GraphQL'
              icon={SiApollographql}
            />
          </motion.div>
          <motion.div
            variants={techVariant}
            className='bg-transparent'
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, delay: 2.0 }}
          >
            <TechComp
              title='Apache Kafka'
              icon={SiApachekafka}
            />
          </motion.div>
          <motion.div
            variants={techVariant}
            className='bg-transparent'
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, delay: 2.5 }}
          >
            <TechComp
              title='React Router'
              icon={SiReactrouter}
            />
          </motion.div>

          <motion.div
            variants={techVariant}
            className='bg-transparent'
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, delay: 2.9 }}
          >
            <TechComp
              title='Postgres'
              icon={SiPostgresql}
            />
          </motion.div>
          <motion.div
            variants={techVariant}
            className='bg-transparent'
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, delay: 3.0 }}
          >
            <TechComp
              title='Redis'
              icon={SiRedis}
            />
          </motion.div>
          <motion.div
            variants={techVariant}
            className='bg-transparent'
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, delay: 3.1 }}
          >
            <TechComp
              title='Docker'
              icon={SiDocker}
            />
          </motion.div>
          <motion.div
            variants={techVariant}
            className='bg-transparent'
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, delay: 3.2 }}
          >
            <TechComp
              title='MUI'
              icon={SiMui}
            />
          </motion.div>
          <motion.div
            variants={techVariant}
            className='bg-transparent'
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, delay: 3.7 }}
          >
            <TechComp
              title='Vercel'
              icon={SiVercel}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default TechStack
