

function Experience() {

const skills = [
  {
    icon:'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg' ,
    title:'C'
  
  },
  {
    icon:'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg' ,
    title:'HTML'
    
  },
  {
    icon:'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg' ,
    title:'CSS'
  
  },
  {
    icon:'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' ,
    title:'Java-script'
  
  },
  {
    icon:'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg' ,
    title:'Boostrap'
  
  },

{
  icon:'https://camo.githubusercontent.com/ed93c2b000a76ceaad1503e7eb9356591b885227e82a36a005b9d3498b303ba5/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667' ,
  title:'Figma'

},
{
  icon:'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg' ,
  title:'MongoDB'

},
{
  icon:'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg' ,
  title:'Express'

},
{
  icon:'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg' ,
  title:'Node js'

},
{
  icon:'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg' ,
  title:'React'

},
{
  icon:'https://camo.githubusercontent.com/5734d0669fe22ce04a1cb989a156cd32c379875f6bca56d5210c9432824856d9/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f7461696c77696e646373732f7461696c77696e646373732d69636f6e2e737667' ,
  title:'Tailwind-css'

},
{
  icon:'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg' ,
  title:'PgSQL'

},
]

  return (
    <div className='flex justify-center bg-[#191919] '>
    <div className="w-[80%]"><br /><br /><br />

      <h1 className=" flex justify-center text-white text-4xl mt-10">Experience</h1>
      <div className='mt-10 grid grid-cols-3 sm:grid-cols-4 gap-x-6 gap-y-10 md:grid-cols-5 lg:grid-cols-6 xl:gap-x-8'>

        {skills.map((item)=>{
          return(
            <div key={item.title} className="shadow-lg shadow-white px-5 py-2">
                
                <img src={item.icon} alt="" className="flex justify-center p-3" />
                <h3 className=" flex justify-center  text-white">{item.title}</h3>
            </div>
          )
        })}
      
          </div>
          </div>
    </div>
  )
}

export default Experience
