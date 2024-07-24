import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { HiXMark } from "react-icons/hi2";


function Navbar() {

let [open,setopen]=useState(false)

function openmenu(){
  setopen(true)

}
function closemenu(){
  setopen(false)

}

  return (

    <div  className="  fixed w-full bg-[#1b1919] text-white shadow-md z-10 flex justify-center"> 
      <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 p-5   ">
        <div className=" ">
            <h1 className="text-3xl flex gap-2  font-family: 'Rubik Doodle Shadow', monospace;">Muhammed<h1 className="text-[rgb(241,141,59)]">Shamil</h1></h1>
        </div>
        <div>
            <ul className=" hidden  lg:flex justify-end  text-lg cursor-pointer ">
                <a href="#Home" className="px-4 hover:text-[rgb(241,141,59)] hover:scale-110 duration-300 ">Home</a>
                <a href="#ABOUT" className="px-4 hover:text-[rgb(241,141,59)] hover:scale-110 duration-300  ">About</a>
                <a href="#Project" className="px-4 hover:text-[rgb(241,141,59)] hover:scale-110 duration-300  ">Project</a>
                <a href="#Services" className="px-4 hover:text-[rgb(241,141,59)] hover:scale-110 duration-300  ">Services</a>
                <a href="#Experience" className="px-4 hover:text-[rgb(241,141,59)] hover:scale-110 duration-300  ">Experience</a>
                <a href="#Contact" className="px-4 hover:text-[rgb(241,141,59)] hover:scale-110 duration-300  ">Contact</a>
            </ul>
        </div>
      </div>
            <button className=""onClick={openmenu} > <IoIosMenu className="lg:hidden w-8 h-auto text-[rgb(241,141,59)] hover:text-white hover:scale-110 duration-300"/> </button>
           { open && <div className="lg:hidden bg-[#1b1919] w-full  absolute z-10 h-screen flex-grow ">
              <button className="absolute end-0 py-5" onClick={closemenu}><HiXMark className="w-8 h-auto  text-[rgb(241,141,59)] hover:text-white hover:scale-110 duration-300"/></button>
               <div className="mt-44 flex flex-col gap-5 p-5 text-center text-3xl">
               <a href="#Home" onClick={closemenu} className="px-4 hover:text-[rgb(241,141,59)] hover:scale-110 duration-300 ">Home</a>
                <a href="#ABOUT" onClick={closemenu} className="hover:text-[rgb(241,141,59)] hover:scale-110 duration-300">About</a>
                <a href="#Project " onClick={closemenu} className="hover:text-[rgb(241,141,59)] hover:scale-110 duration-300">Project</a>
                <a href="#Services " onClick={closemenu} className="hover:text-[rgb(241,141,59)] hover:scale-110 duration-300">Services</a>
                <a href="#Experience" onClick={closemenu} className="px-4 hover:text-[rgb(241,141,59)] hover:scale-110 duration-300  ">Experience</a>
                <a href="#Contact " onClick={closemenu} className="hover:text-[rgb(241,141,59)] hover:scale-110 duration-300">Contact</a>

            </div>
           </div>}
</div>
   
  
    )
}

export default Navbar
