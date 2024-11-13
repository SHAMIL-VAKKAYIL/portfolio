import React from 'react'
import { GoArrowRight } from 'react-icons/go'
import { Link } from 'react-router-dom'

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



    return (
        <div className='bg-card'>
            <div className={` items-center gap-3 border-2  border-secondary md:border-0 rounded-lg p-3 md:p-0 overflow-hidden w-full  object-fill bg-transparent  ${gridstyle}`}>
                <div className='w-full mb-2 relative bg-transparent'>
                    <img src={image} alt="" className={` ${imageStyle} w-full  rounded-lg object-cover  border-2 border-secondary `} />
                    <a href={path}>
                        <GoArrowRight size={20} color='#f0f0f0' strokeWidth={1} className='absolute top-1 right-1 bg-transparent hover:scale-125 transition-transform' />
                    </a>
                </div>
                <div className=' text-font font-nrml flex flex-col gap-2  h-full  '>
                    <div className=' flex flex-col justify-between  h-full gap-2  bg-card'>
                        <div className='bg-transparent'>
                            <a href={path}>
                                <h3 className='bg-transparent font-med md:text-xl mb-2 hover:text-primary transition-transform  '>{title}</h3>
                            </a>
                            <div className=' scrollbar overflow-y-scroll  md:border-2  border-secondary rounded-lg hover:border-primary transition-transform  p-3  2xl:h-[18vh] bg-transparent'>
                                <div>
                                    <p className=' lg:hidden xl:flex bg-card'>{description}</p>
                                </div>
                                <div className={`${descClass}`}>
                                    <p className=' lg:flex xl:hidden hidden bg-card'>{description.split('').slice(0, 200).join('')} ...</p>
                                </div>
                            </div>
                        </div>
                        {/* Techs */}
                        <div className='bg-transparent md:py-2 md:px-2'>

                            <div className=' flex bg-transparent  flex-wrap 2xl:flex-nowrap  text-font md:gap-3 gap-1 font-med md:border-2 border-secondary rounded-lg p-2 2xl:overflow-x-scroll scrollbar  '>
                                {Techs.map((item) => {
                                    return (
                                        <div key={item} className='flex  bg-transparent border-2 border-secondary hover:border-primary transition-transform rounded-xl px-2  py-1'>
                                            <p className='bg-transparent'>{item}</p>
                                        </div>
                                    )

                                })}
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCardComp
