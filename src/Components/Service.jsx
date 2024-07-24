
import web from '../assets/web-development.png'
function Service() {
  return (
    <div id='Services' className='flex justify-center bg-[#191919] '>
      <div className=" sm:w-[80%]"><br /><br /><br />

        <h1 className=" flex justify-center text-white text-4xl mt-10"><h1 className='text-[rgb(241,141,59)]'>S</h1>ervice<h1 className='text-[rgb(241,141,59)]'>s</h1></h1>
        <div className='mt-10 flex  gap-x-6 gap-y-10  justify-center px-10 md:px-0'>

        <div className=" md:w-[70%] p shadow-md border-4 border-white shadow-white rounded-md bg-gray-200 overflow-hidden ">
          <img
            src={web}
            alt=""
            className="ml-3 mt-1 w-20 p-1 object-cover object-center opacity-100  rounded-md "
            />
          <p className="p-5">Am passionate and results-driven software developer with a focus on crafting seamless and innovative web applications. Specializing in the MERN (MongoDB, Express.js, React.js, Node.js) stack, I bring a wealth of experience in turning ideas into robust, user-friendly, and scalable digital solutions.</p>
        </div>
            </div>
            </div>
      </div>
    
   
  )
}

export default Service
