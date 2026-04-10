import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
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
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            ref={containerRef}
            className='w-full h-full'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <motion.div
                initial={{ opacity: 0, translateY: 40 }}
                animate={{
                    opacity: isInView ? 1 : 0,
                    translateY: isInView ? 0 : 40,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`h-full relative flex flex-col bg-card/40 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(88,166,255,0.15)]`}>

                {/* Image Container with Hover Zoom */}
                <div className='relative w-full h-48 xl:h-56 overflow-hidden bg-background'>
                    <motion.img
                        src={image}
                        alt={title}
                        initial={{ scale: 1 }}
                        animate={{ scale: isHovered ? 1.05 : 1 }}
                        transition={{ duration: 0.5 }}
                        className='w-full h-full object-cover'
                    />

                    {/* Always visible action buttons */}
                    <div className='absolute top-3 right-3 flex gap-2 z-10 bg-transparent'>
                        <a
                            href={path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='flex items-center justify-center p-2.5 bg-secondary/90 hover:bg-primary text-white backdrop-blur-sm rounded-lg border border-white/20 transition-all duration-300 shadow-lg hover:scale-105'
                            title="View Github">
                            <BsGithub size={20} className="bg-transparent" />
                        </a>
                        {live && live !== '' && (
                            <a
                                href={live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='flex items-center justify-center p-2.5 bg-secondary/90 hover:bg-primary text-white backdrop-blur-sm rounded-lg border border-white/20 transition-all duration-300 shadow-lg hover:scale-105'
                                title="View Live">
                                <BsEyeFill size={20} className="bg-transparent" />
                            </a>
                        )}
                    </div>
                </div>

                {/* Content Section */}
                <div className='p-5 flex flex-col flex-grow bg-transparent z-10'>
                    <h3 className='font-sembld text-font text-xl xl:text-2xl mb-3 bg-transparent transition-colors duration-300 group-hover:text-primary'>
                        {title}
                    </h3>
                    <div className='scrollbar overflow-y-auto h-24 xl:h-32 pr-2 bg-transparent'>
                        <p className='text-font/80 font-nrml text-sm xl:text-base leading-relaxed bg-transparent'>
                            {description}
                        </p>
                    </div>
                </div>

                {/* Animated Bottom Border Accent */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: isHovered ? '100%' : '0%' }}
                    transition={{ duration: 0.4 }}
                    className='h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent mt-auto'
                />
            </motion.div>
        </div>
    )
}

export default ProjectCardComp
