import { FaMapMarkedAlt,FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";

function Contact() {


const info=[{
  icon:<FaMapMarkedAlt className="h-8 w-auto hover:scale-110 hover:brightness-125 duration-300" />,
  title:'Address',
  href:'https://maps.app.goo.gl/rgD9BaV82k5C4eQy7',
  details:' India, Kerala, Malappuram'
},
{
  icon:<FaPhoneAlt className="h-8 w-auto hover:scale-110 hover:brightness-125 duration-300" />,
  title:'Phone',
  href:"tel:+919747403048",
  details:'+91 9747403048'
},
{
  icon:<MdMail className="h-8 w-auto hover:scale-110 hover:brightness-125 duration-300" />,
  title:'Email',
  href:'mailto: muhammedshamil470@gmail.com',
  details:' muhammedshamil470@gmail.com'
}]

  return (

    <div className='flex justify-center bg-[#191919] '>
      <div className="w-[80%]"><br /><br /><br /><br />

        <h1 className=" flex justify-center text-white text-4xl mt-10">Contact</h1><br /><br />
        <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2 xl:gap-x-8'>
          <div className="  ">
          <p className="text-white text-xl">Get in <span className="text-[rgb(241,141,59)]">Touch</span></p>
            <form action="" className="p-10 flex flex-col gap-5 border border-[rgb(241,141,59)] ">
              <input type="text" name="name" placeholder="Enter your name" className="rounded-sm p-2 bg-transparent text-white border border-[rgb(241,141,59)] " />
              <input type="email" name="email" id="" placeholder="Enter your email" className="rounded-sm p-2 bg-transparent border text-white border-[rgb(241,141,59)]"/>

             <textarea name="msg" id="" cols="28" rows="8" placeholder="Enter your massege..." className="rounded-sm p-2  bg-transparent border text-white border-[rgb(241,141,59)]"></textarea>
             <div></div>
             <div className="flex justify-end ">
             <input type="submit" value="SEND" className="text-white bg-[rgb(241,141,59)] px-6 py-2 rounded-sm hover:brightness-110" />
             </div>
            </form>
          </div>
        <div>
         <div className="grid grid-cols-1 gap-5  md:flex-col md:gap-16 lg:mt-10 "> 
              {
                info.map((item,index)=>{
                  return(
                    <div key={index} className="">
                      <a href={item.href} className="flex flex-col gap-3 md:flex-row  ">

                      <div className="text-[rgb(241,141,59)] flex justify-center  " >
                       {item.icon}
                        </div>
                      <div>
                        <h1 className="text-white text-lg flex justify-center md:flex md:justify-start">{item.title}</h1>

                      <p className="text-white opacity-60 flex justify-center">{item.details}</p>
                      </div>
                      </a>
                      
                    </div>
                  )
                })
              }

         </div>
        </div>

        </div>
      </div>
    </div>

  )
}

export default Contact
