import React from 'react'

interface IProjectCardComp {
    Techs: string[]
    image: string
    description: string
    title: string
    descClass:string
}

function ProjectCardComp({ Techs, title, description, image,descClass }: IProjectCardComp) {

    console.log(Techs);

    return (
        <div className=''>
            <div className='grid  gap-3 border-2  border-secondary md:border-0 rounded-lg p-3 md:p-0 overflow-hidden w-full  object-fill '>
                <div className='w-full'>
                    <img src={image} alt="" className=' h-[50vh] w-full  rounded-lg object-cover shadow-md shadow-gray-800' />
                </div>
                <div className=' text-font font-nrml flex flex-col gap-2 bg-transparent h-full  '>
                    <div className=' flex flex-col justify-between h-full  '>
                        <div>

                            <h3 className='bg-transparent font-med text-lg'>{title}</h3>
                            <div className=' overflow-y-scroll  md:border-2 bg-transparent border-secondary rounded-lg  p-3  '>
                                <p className='bg-transparent md:flex hidden'>{description}</p>
                                <p className='bg-transparent md:hidden'>{description.split('').slice(0,200).join('')} ...</p>
                            </div>
                        </div>
                        {/* Techs */}

                        <div className='flex bg-transparent  overflow-x-scroll text-font md:gap-3 gap-1 font-med md:border-2 border-secondary rounded-lg md:py-2 md:px-2 '>
                            {Techs.map((item) => {
                                return (
                                    <div key={item} className='flex  bg-transparent border-2 border-secondary rounded-xl px-2 md:px-3 py-1'>
                                        <p className='bg-transparent'>{item}</p>
                                    </div>
                                )

                            })}
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCardComp
