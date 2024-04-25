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
          <p className='text-white sm:mt-10'>I am a self-taught freelance software developer specializing in crafting exceptional digital experiences. With expertise spanning web application , I deliver efficient, cost-effective, and high-quality solutions. My focus on speed, user-friendliness, and accessibility ensures optimal user experiences. Clients appreciate the versatility I bring to projects, seamlessly navigating both front-end and back-end development. Whether it's creating successful web apps , I am committed to exceeding expectations and bringing your digital vision to life.</p>
        </div>

      </div>
    </div>
  )
}

export default About
