import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {

    const location = useLocation()
    const [activelink, setactivelink] = useState<string>(location.pathname)
    console.log(activelink);
    
    
    return (
        <div className='mt-[3%]  font-sembld text-font flex justify-center  w-full   '>
            <div className='flex gap-4 object-cover justify-between  items-center py-1 px-1 fixed z-10   border-[2px] border-secondary bg-[#00000080]  rounded-l-full rounded-r-full'>
                <Link onClick={()=>setactivelink('/')} to={'/'} className={` rounded-l-full rounded-r-full px-2  m-auto  ${activelink == '/'?'bg-gradient-to-l from-primary to-transparent ':'bg-transparent'}`} >Home</Link >
                <Link onClick={()=>setactivelink('/projects')} to={'/projects'} className={`rounded-l-full rounded-r-full px-2  m-auto ${activelink == '/projects'?'bg-gradient-to-l from-primary to-transparent  ':'bg-transparent'}`} >Projects</Link >
                <Link onClick={()=>setactivelink('/contact')} to={'/contact'} className={`rounded-l-full rounded-r-full px-2  m-auto ${activelink == '/contact'?'bg-gradient-to-l from-primary to-transparent ':'bg-transparent'}`} >Contact</Link >
            </div>
        </div>
    )
}

export default Navbar
