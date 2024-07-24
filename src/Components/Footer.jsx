import { FaInstagramSquare,FaGithubSquare,FaTwitterSquare   } from "react-icons/fa";


function Footer() {
const fticon=[
    
{
    icon:<FaInstagramSquare className="h-8 w-auto hover:scale-110 hover:brightness-125 duration-300"/>,
    href:"https://www.instagram.com/_shamil__vakkayil_?igsh=bzh6MmxkOWo2c2t5"
},
{
    icon:<FaGithubSquare className="h-8 w-auto hover:scale-110 hover:brightness-125 duration-300"/>,
    href:"https://github.com/SHAMIL-VAKKAYIL"
},
{
    icon:<FaTwitterSquare className="h-8 w-auto hover:scale-110 hover:brightness-125 duration-300"/>,
    href:"https://x.com/Muhamme35503144?t=KwciC729-TqMwILAK1CS2w&s=09"
},
]

    return (
        <div className="  bg-[#1b1919f7]  ">
            <div className=""><br />
                <div className="flex justify-between gap-10 sm:gap p-5">
                     <div className="flex gap-3">
                        {fticon.map((item)=>{
                            return(
                                <div key={item.icon} className= " shadow-white rounded-sm text-[rgb(241,141,59)] flex justify-center item">
                                    <a href={item.href} className="  " >
                                    {item.icon}
                                    </a>
                                </div>
                            )
                        })}
                        </div>
                    <div >
                         <p className=" text-white text-xl ">MUHAMMED <span className="text-[rgb(241,141,59)]">SHAMIL</span></p>
                    </div>

                </div><br />
                    <div className="flex justify-center">
                        <p className=" text-white  mt-10 w-[95%] text-center">Copyright © 2023 - 2024 Muhammed Shamil. Design Limited</p>
                    </div><br /><br />

            </div>
        </div>
    )
}

export default Footer
