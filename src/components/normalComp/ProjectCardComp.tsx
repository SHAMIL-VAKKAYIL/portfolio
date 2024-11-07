import React from 'react'

function ProjectCardComp() {

    let Tech=['react' ,'typescript' ,'tailwind']
    return (
        <div className=''>
            <div className='grid md:grid-cols-2 gap-3 border-2 border-secondary md:border-0 rounded-lg p-3 md:p-0 overflow-hidden w-full '>
                <div className=' rounded-lg '>
                    <img src="https://images.unsplash.com/photo-1730829807497-9c5b8c9c41c4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8" alt="" className='h-full rounded-lg object-cover shadow-md shadow-gray-800'/>
                </div>
                <div className='h-full text-font font-nrml flex flex-col gap-2 bg-transparent  '>
                    <div className='md:border-2 bg-transparent border-secondary rounded-lg h-full p-3 '>
                        <p className='bg-transparent'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae quas, quos, ab quam eum ullam minus, soluta et sint dicta voluptates dolores iste facilis illo ipsam hic aspernatur magni nostrum.</p>
                    </div>
                    <div className='flex bg-transparent flex-wrap text-font gap-4 font-med md:border-2 border-secondary rounded-lg py-2 px-2 '>
                        {Tech.map((item)=>{
                            return(
                                <div key={item} className='flex  bg-transparent border-2 border-secondary rounded-xl px-3 py-1'> 
                                <p className='bg-transparent'>{item}</p>
                                </div>
                            )

                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCardComp
