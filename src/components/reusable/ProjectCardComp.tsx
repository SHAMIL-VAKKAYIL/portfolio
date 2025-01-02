import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { BsEyeFill, BsGithub } from 'react-icons/bs'


interface IProjectCardComp {
    image: string
    description: string
    title: string
    live?: string
    path: string
}

function ProjectCardComp({ title, description, image, live, path }: IProjectCardComp) {

    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true })

    //!imagesection
    const imageVariant = {
        hidden: { x: -50, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8 } }
    }


    //! descsection
    const descVariant = {
        hidden: { x: 50, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8 } }
    }

    return (
        <div
            ref={containerRef}
            className='bg-transparent '>
            <div className={`p-2 bg-transparent`}>
                <motion.div
                    className='w-full mb-2 relative bg-transparent '
                    variants={imageVariant}
                    initial='hidden'
                    animate={isInView ? 'visible' : 'hidden'}

                >
                    <div className=' flex gap-2 absolute right-2 top-2 bg-transparent'>
                        <a href={path} className='border-2 border-secondary bg-secondary hover:bg-background rounded-md p-2'>
                            <BsGithub size={20} color="#F0F0F0" className="bg-transparent" />
                        </a>
                        <a href={live} className='border-2 border-secondary bg-secondary hover:bg-background rounded-md p-2'>
                            <BsEyeFill size={20} color="#F0F0F0" className="bg-transparent" />
                        </a>
                    </div>
                    <img src={image} alt="" className={`w-full  h-[20vh] 2xl:h-[18vh]  rounded-lg object-cover  `} />

                </motion.div>
                <div className=' text-font font-nrml flex flex-col gap-2  h-full bg-transparent '>
                    <div className='  '>
                        <div className='bg-transparent'>
                            <h3 className='bg-transparent font-med md:text-xl text-lg mb-2  transition-transform  '>{title}</h3>
                            <div className=' scrollbar rounded-lg hover:border-primary transition-transform h-[18vh] 2xl:h-[10vh]  overflow-y-scroll  '>
                                <motion.div
                                    variants={descVariant}
                                    initial='hidden'
                                    animate={isInView ? 'visible' : 'hidden'}
                                >
                                    <p className=''>{description}</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCardComp
