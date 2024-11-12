import React from 'react'
import { SiFacebook, SiGmail, SiInstagram, SiLinkedin, SiX } from 'react-icons/si'


function Contact() {
  return (
    <div className=" mx-auto sm:w-[85%] lg:w-[70%] flex flex-col gap-y-2">
      <div className='h-[40vh]  mt-2 grid md:grid-cols-2  gap-2'>
        <div className=' flex flex-col gap-2'>
          <div className='border-2 border-secondary h-[70%] rounded-lg w-full  bg-transparent'>
            <div className='bg-transparent flex flex-col justify-center items-center h-full'>
              <img src="" alt="" className='rounded-full object-cover h-20 w-20 bg-secondary ' />
              <h2 className='font-sembld text-2xl text-font '>SHAMIL-VAKKAYIL</h2>
            </div>
          </div>
          <div className='border-2 border-secondary h-[30%] rounded-lg'>
            <div className='h-full flex items-center justify-center gap-2'>
              <SiLinkedin size={24} color='#f0f0f0' className='h-[50%] w-[10%] ' />
              <h2 className='font-sembld text-lg text-font hover:text-primary cursor-pointer transition-transform '>msvshamil470@gmail.com</h2>
            </div>
          </div>
        </div>
        <div className='  flex flex-col gap-2'>
          <div className='border-2 border-secondary h-[30%] rounded-lg'>
            <div className='h-full flex items-center justify-center gap-2'>
              <SiGmail size={24} color='#f0f0f0' className='h-[50%] w-[10%] ' />
              <h2 className='font-sembld text-lg text-font hover:text-primary cursor-pointer transition-transform '>msvshamil470@gmail.com</h2>
            </div>
          </div>
          <div className='h-[70%] grid grid-cols-2 gap-2'>
            <div className='bg-transparent border-2  border-secondary  rounded-lg   '>
              <div className='bg-transparent  h-full flex flex-col justify-center items-center gap-4'>
                <SiInstagram size={24} color='#f0f0f0' className='bg-transparent' />
                <h2 className='font-sembld text-font hover:text-primary cursor-pointer transition-transform '>msvshamil470@gmail.com</h2>

              </div>
            </div>
            <div className='bg-transparent border-2 border-secondary  rounded-lg   '>
              <div className='bg-transparent  h-full flex flex-col justify-center items-center gap-4 '>
                <SiFacebook size={24} color='#f0f0f0' className='bg-transparent' />
                <h2 className='font-sembld  text-font hover:text-primary cursor-pointer transition-transform '>msvshamil470@gmail.com</h2>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
