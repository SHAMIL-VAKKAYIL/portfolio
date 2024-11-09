import React from 'react'
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
        <div className=''>
            <div className={`  gap-3 border-2  border-secondary md:border-0 rounded-lg p-3 md:p-0 overflow-hidden w-full  object-fill  ${gridstyle}`}>
                <div className='w-full'>
                    <img src={image} alt="" className={` ${imageStyle} w-full  rounded-lg object-cover shadow-md shadow-gray-800 `} />
                </div>
                <div className=' text-font font-nrml flex flex-col gap-2 bg-transparent h-full  '>
                    <div className=' flex flex-col justify-between h-full gap-2 '>
                        <div>
                            <a href={path}>
                                <h3 className='bg-transparent font-med md:text-xl mb-2 '>{title}</h3>
                            </a>
                            <div className=' scrollbar overflow-y-scroll  md:border-2 bg-transparent border-secondary rounded-lg  p-3  2xl:h-[18vh]'>
                                <div>
                                    <p className='bg-transparent lg:hidden xl:flex'>{description}</p>
                                </div>
                                <div className={`${descClass}`}>
                                    <p className='bg-transparent lg:flex xl:hidden hidden '>{description.split('').slice(0, 200).join('')} ...</p>
                                </div>
                            </div>
                        </div>
                        {/* Techs */}
                        <div className=''>

                            <div className='flex bg-transparent  flex-wrap 2xl:flex-nowrap  text-font md:gap-3 gap-1 font-med md:border-2 border-secondary rounded-lg md:py-2 md:px-2 2xl:overflow-x-scroll scrollbar  '>
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
