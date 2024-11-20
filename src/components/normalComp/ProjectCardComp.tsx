import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'


interface IProjectCardComp {
    Techs: string[]
    image: string
    description: string
    title: string
    descClass?: string
    gridstyle?: string
    imageStyle?: string
    path: string
}

function ProjectCardComp({ Techs, title, description, image, descClass, gridstyle, imageStyle, path }: IProjectCardComp) {

    const constainerRef = useRef(null)
    const isInView = useInView(constainerRef, { once: true })

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
            ref={constainerRef}
            className='bg-card'>
            <div className={` items-center gap-3 border-2  border-secondary md:border-0 rounded-lg p-3 md:p-0 overflow-hidden w-full  object-fill bg-transparent  ${gridstyle}`}>
                <motion.div
                    className='w-full mb-2 relative bg-transparent '
                    variants={imageVariant}
                    initial='hidden'
                    animate={isInView ? 'visible' : 'hidden'}

                >
                    <img src={image} alt="" className={` ${imageStyle} w-full  rounded-lg object-cover  border-2 border-secondary `} />
                    
                </motion.div>
                <div className=' text-font font-nrml flex flex-col gap-2  h-full  '>
                    <div className=' flex flex-col justify-between  h-full gap-2  bg-card'>
                        <div className='bg-transparent'>
                            <a href={path}>
                                <h3 className='bg-transparent font-med md:text-xl mb-2 hover:text-primary transition-transform  '>{title}</h3>
                            </a>
                            <motion.div
                                className=' scrollbar overflow-y-scroll  md:border-2  border-secondary rounded-lg hover:border-primary transition-transform  p-3  2xl:h-[18vh] bg-transparent'

                            >
                                <motion.div
                                    variants={descVariant}
                                    initial='hidden'
                                    animate={isInView ? 'visible' : 'hidden'}

                                >
                                    <p className=' lg:hidden xl:flex bg-card'>{description}</p>
                                </motion.div>
                                <motion.div
                                    className={`${descClass}`}
                                    variants={imageVariant}
                                    initial='hidden'
                                    animate={isInView ? 'visible' : 'hidden'}

                                >
                                    <p className=' lg:flex xl:hidden hidden bg-card'>{description.split('').slice(0, 200).join('')} ...</p>
                                </motion.div>
                            </motion.div>
                        </div>
                        {/* Techs */}
                        <motion.div
                            className='bg-transparent md:py-2'
                            variants={descVariant}
                            initial='hidden'
                            animate={isInView ? 'visible' : 'hidden'}

                        >
                            <div className=' flex bg-transparent  flex-wrap 2xl:flex-nowrap  text-font md:gap-3 gap-1 font-med md:border-2 border-secondary rounded-lg p-2 2xl:overflow-x-scroll scrollbar  '>
                                {Techs.map((item) => {
                                    return (
                                        <div key={item} className='flex  bg-transparent border-2 border-secondary hover:border-primary transition-transform rounded-xl px-2  py-1'>
                                            <p className='bg-transparent'>{item}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCardComp
