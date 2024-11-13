import React from 'react'
import { IconType } from 'react-icons'

interface ITechComp {
    title: string
    icon: IconType
}

const TechComp: React.FC<ITechComp> = ({ title, icon: Icon }) => {
    return (
        <div className='flex items-center gap-2 bg-transparent'>
            <Icon color="#F0F0F0" size={36} className="bg-transparent"/>
            <p className='text-font font-nrml flex gap-1 bg-transparent text-base'>{title}</p>
        </div>
    )
}

export default TechComp
