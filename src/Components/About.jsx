import mypic from '../assets/shamil.png'

function About() {
  return (
    <div className="bg-[#191919] flex justify-center w-full">
      <div className="md:p-44 grid grid-cols-1 sm:flex sm:justify-center m-5  gap-5 p-10  w-[90%]">
        <div className='flex' >
          <img src={mypic} alt="" className='shadow-xl border  ' />
        </div>
        <div className="flex flex-col gap-4 justify-center w-[80%] ">
          <p className="text-4xl font-normal text-white"> ABOUT ME</p>
          <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure itaque aperiam nostrum harum id possimus autem consectetur, natus deserunt temporibus tempore deleniti inventore eaque rerum at adipisci fugit debi</p>
        </div>

      </div>
    </div>
  )
}

export default About
