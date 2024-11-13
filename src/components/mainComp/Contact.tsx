import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { SiFacebook, SiGmail, SiInstagram, SiLinkedin } from 'react-icons/si'


function Contact() {
  return (
    <div className=" mx-auto sm:w-[85%] lg:w-[70%] flex flex-col mt-2 ">
      <div className='border-2 border-secondary rounded-lg p-3 bg-card'>
        <h3 className='font-bld text-white text-xl bg-transparent'>Get in Touch</h3>
        <div className='h-[25vh] grid md:grid-cols-2  gap-2 mt-5 bg-transparent'>
          <div className=' grid grid-cols-2 gap-2 bg-transparent'>
            <div className='border-2 border-secondary  rounded-lg w-full  bg-transparent'>
              <div className='h-full bg-transparent'>
                <a href="https://github.com/SHAMIL-VAKKAYIL" className='bg-transparent flex flex-col justify-center items-center h-full gap-2'>
                <BsGithub size={40} color='#f0f0f0' className='bg-transparent' />
                  <h2 className='hidden md:flex  font-med text-xl text-font hover:text-primary cursor-pointer transition-transform  bg-transparent text-center'>shamil-vakkayil</h2>
                </a>
              </div>
            </div>
            <div className='border-2 border-secondary  rounded-lg bg-transparent'>
              <div className='h-full  bg-transparent'>
                <a href='' className="flex flex-col items-center justify-center gap-2 bg-transparent h-full">
                  <SiLinkedin size={40} color='#f0f0f0' className='bg-transparent' />
                  <h2 className='hidden md:flex  font-med text-xl text-font hover:text-primary cursor-pointer transition-transform bg-transparent text-center'>muhammed shamil</h2>
                </a>
              </div>
            </div>
          </div>
          <div className='  flex flex-col gap-2 h-full bg-transparent'>
            <div className='border-2 border-secondary h-[40%] rounded-lg'>
              <div className=' bg-card h-full'>
                <a href="mailto: msvshamil470@gmail.com" className='bg-transparent h-full flex items-center justify-center gap-2'>
                  <SiGmail size={36} color='#f0f0f0' className=' bg-transparent ' />
                  <h2 className='hidden md:flex  font-med text-xl text-font hover:text-primary cursor-pointer transition-transform bg-transparent text-center'>msvshamil470@gmail.com</h2>
                </a>
              </div>
            </div>
            <div className=' h-[60%] bg-transparent border-2  border-secondary  rounded-lg   '>
              <div className='bg-transparent  h-full '>
                <a href="https://www.instagram.com/shamil_vakkayil?igsh=bzh6MmxkOWo2c2t5" className='bg-transparent flex flex-col justify-center items-center h-full gap-2'>
                  <SiInstagram size={36} color='#f0f0f0' className='bg-transparent' />
                  <h2 className='hidden md:flex  font-med text-xl text-font hover:text-primary cursor-pointer transition-transform bg-transparent text-center'>shamil_vakkayil</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
