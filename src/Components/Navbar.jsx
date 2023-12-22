

function Navbar() {
  return (

    <div className=" fixed w-full bg-[#191919] text-white shadow-md z-10 flex justify-center"> 
      <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 p-5   border-b border-white ">
        <div className="">
            <h1 className="text-xl">Shamil</h1>
        </div>
        <div>
            <ul className="hidden  md:flex justify-end  text-lg cursor-pointer ">
                <li className="px-4 hover:text-[rgb(241,141,59)] hover:scale-110 duration-300  ">Home</li>
                <li className="px-4 hover:text-[rgb(241,141,59)] hover:scale-110 duration-300  ">About</li>
                <li className="px-4 hover:text-[rgb(241,141,59)] hover:scale-110 duration-300  ">Project</li>
                <li className="px-4 hover:text-[rgb(241,141,59)] hover:scale-110 duration-300  ">Services</li>
                <li className="px-4 hover:text-[rgb(241,141,59)] hover:scale-110 duration-300  ">Contact</li>
            </ul>
        </div>
      </div>
           
    </div>
  
  )
}

export default Navbar
