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



    return (
        <div
            ref={containerRef}
            className='bg-transparent '>
            <motion.div
                initial={{ opacity: 0, translateY: 100 }}
                animate={{ opacity: isInView ? 1 : 0, translateY: isInView ? 0 : 100 }}
                transition={{ duration: 0.5 }}
                className={`p-2 bg-transparent border-2 border-secondary rounded-lg `}>
                <div className='w-full mb-2 relative bg-transparent '>
                    <div className=' flex gap-2 absolute right-2 top-2 bg-transparent'>
                        <a href={path} className='border-2 border-secondary bg-secondary hover:bg-background rounded-md p-2'>
                            <BsGithub size={20} color="#F0F0F0" className="bg-transparent" />
                        </a>
                        {live === '' ? <> </> : <a href={live} className='border-2 border-secondary bg-secondary hover:bg-background rounded-md p-2'>
                            <BsEyeFill size={20} color="#F0F0F0" className="bg-transparent" />
                        </a>}
                    </div>
                    <img src={image} alt="" className={`w-full h-[12vh] xl:h-[16vh]  rounded-lg object-cover  `} />
                    <h3 className='bg-transparent font-med text-font md:text-xl text-lg mb-2  transition-transform  '>{title}</h3>
                </div>
                <div className='scrollbar text-font font-nrml flex flex-col gap-2  h-[12vh] xl:h-[16vh] bg-transparent overflow-scroll'>
                    <div className='bg-transparent'>
                        <p className=''>{description}</p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default ProjectCardComp
