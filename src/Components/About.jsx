import mypic from '../assets/shamil.png'

function About() {
  return (
    <div id='ABOUT' className="bg-[#191919] flex justify-center ">
      <div className=" w-[80%] md:p-4 grid grid-cols-1 sm:flex sm:justify-center m-5  gap-5 p-10  ">
        <h1 className="text-4xl  text-white sm:hidden font-normal"> ABOUT <h1 className='text-[rgb(241,141,59)]'>ME</h1></h1>
        <div className='before:rounded-md before:block  before:absolute before:-inset-3 before:border-b-4 before:border-l-4 before:border-[rgb(241,141,59)] relative inline-block'>
        <div className='flex' >
            
          <img src={mypic} alt="" className='rounded-sm opacity-60 shadow-md  h-auto w-auto object-cover  ' />
        
        </div>
        </div>
        <div className="  justify-center w-[80%] ">
          <h1 className="text-4xl font-normal text-white hidden sm:flex gap-2"> ABOUT  <h1 className='text-[rgb(241,141,59)]'> ME</h1> </h1>
          <p className='text-white sm:mt-10'>Welcome to my corner of the digital realm! As a fervent explorer of the MERN stack (MongoDB, Express.js, React.js, Node.js), I thrive on architecting sleek, responsive, and feature-rich web experiences. With a knack for blending creativity with cutting-edge technology, I'm here to shape the future of the web, one line of code at a time.</p>
        </div>

      </div>
    </div>
  )
}

export default About
