import express from '../assets/express.png'

function Experience() {

const skills = [
  {
    icon:'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg' ,
    title:'C'
    ,classname:'rounded-md px-5 py-2 shadow-md hover:shadow-sm hover:shadow-[#065593] shadow-[#065593] transition duration-300 ease-in-out'
  
  },
  {
    icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' ,
    title:'HTML'
    ,classname:'rounded-md px-5 py-2  shadow-md hover:shadow-sm hover:shadow-[#f16529] shadow-[#f16529] transition duration-300 ease-in-out'
    
  },
  {
    icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' ,
    title:'CSS'
    ,classname:'rounded-md px-5 py-2 shadow-md hover:shadow-sm hover:shadow-[#33a9dc]  shadow-[#33a9dc] transition duration-300 ease-in-out'
  
  },
  {
    icon:'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' ,
    title:'Java-script'
    ,classname:'rounded-md px-5 py-2  shadow-md hover:shadow-sm hover:shadow-[#f0db4f] shadow-[#f0db4f] transition duration-300 ease-in-out'
  
  },
  {
    icon:'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg' ,
    title:'Boostrap'
    ,classname:'rounded-md px-5 py-2  shadow-md hover:shadow-sm hover:shadow-[#7952b3] shadow-[#7952b3] transition duration-300 ease-in-out'
  
  },

{
  icon:'https://camo.githubusercontent.com/ed93c2b000a76ceaad1503e7eb9356591b885227e82a36a005b9d3498b303ba5/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667' ,
  title:'Figma'
  ,classname:'rounded-md px-5 py-2  shadow-md hover:shadow-sm hover:shadow-[#0acf83] shadow-[#0acf83] transition duration-300 ease-in-out'

},
{
  icon:'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg' ,
  title:'MongoDB'
  ,classname:'rounded-md px-5 py-2  shadow-md hover:shadow-sm hover:shadow-[#408434] shadow-[#408434] transition duration-300 ease-in-out'

},
{
  icon: express,
  title:'Express'
  ,classname:'rounded-md px-5 py-2  shadow-md hover:shadow-sm hover:shadow-[#ffff] shadow-[#ffff] transition duration-300 ease-in-out'

},
{
  icon:'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg' ,
  title:'Node js'
  ,classname:'rounded-md px-5 py-2  shadow-md hover:shadow-sm hover:shadow-[#83cd29] shadow-[#83cd29] transition duration-300 ease-in-out'

},
{
  icon:'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg' ,
  title:'React'
  ,classname:'rounded-md px-5 py-2  shadow-md hover:shadow-sm hover:shadow-[#61dafb] shadow-[#61dafb] transition duration-300 ease-in-out'

},
{
  icon:'https://camo.githubusercontent.com/5734d0669fe22ce04a1cb989a156cd32c379875f6bca56d5210c9432824856d9/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f7461696c77696e646373732f7461696c77696e646373732d69636f6e2e737667' ,
  title:'Tailwind-css'
  ,classname:'rounded-md px-5 py-2  shadow-md hover:shadow-sm hover:shadow-[#41a5b2] shadow-[#41a5b2] transition duration-300 ease-in-out '

},
{
  icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg' ,
  title:'PgSQL'
  ,classname:'rounded-md px-5 py-2  shadow-md hover:shadow-sm hover:shadow-[#336791] shadow-[#336791] transition duration-300 ease-in-out'

},
]

  return (
    <div id='Experience' className='flex justify-center bg-[#191919] '>
    <div className="w-[80%]"><br /><br /><br />

      <h1 className=" flex justify-center text-white text-4xl mt-10"> <h1 className='text-[rgb(241,141,59)]'>E</h1> xperienc <h1 className='text-[rgb(241,141,59)]'>e</h1></h1>
      <div className=' mt-10 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-10 md:grid-cols-4 lg:grid-cols-6 xl:gap-x-8'>

        {skills.map((item)=>{
          return(
            <div key={item.title} className={item.classname}>
                <div className='flex justify-center'>
                <img src={item.icon} alt="" className="  p-3" />
                </div>
                <div className='flex justify-center'>
                <h3 className="   text-white">{item.title}</h3>
                </div>
            </div>
          )
        })}
      
      
          </div>
          </div>
    </div>
  )
}

export default Experience
