import { FaMapMarkedAlt,FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
       'service_lx11mqa',
       'template_vwdlq03',
      form.current, 
       'bO-N3P9Ud8PRpMVfJ')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

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

    <div id="Contact" className='flex justify-center bg-[#191919] '>
      <div className="w-[80%]"><br /><br /><br /><br />

        <h1 className=" flex justify-center text-white text-4xl mt-10"><h1 className='text-[rgb(241,141,59)]'>C</h1>ontac<h1 className='text-[rgb(241,141,59)]'>t</h1></h1><br /><br />
        <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2 xl:gap-x-8'>
          <div className="  ">
            <form ref={form} onSubmit={sendEmail} action="" method="post" className="p-5 flex flex-col gap-5 md:border md:border-[rgb(241,141,59)] ">
          <p className="text-white text-xl">Get in <span className="text-[rgb(241,141,59)]">Touch</span></p>
              <input type="text" name="user_name" placeholder="Enter your name" className=" outline-none rounded-sm p-2 bg-transparent text-white border border-[rgb(241,141,59)] " />
              <input type="email" name="user_email" id="" placeholder="Enter your email" className=" outline-none rounded-sm p-2 bg-transparent border text-white border-[rgb(241,141,59)]"/>

             <textarea name="message" id="" cols="28" rows="8" placeholder="Enter your massege..." className= " outline-none rounded-sm p-2  bg-transparent border text-white border-[rgb(241,141,59)]"></textarea>
             <input type="submit" value="SEND" className="text-white bg-[rgb(241,141,59)] px-6 py-2 rounded-sm hover:brightness-110" />
             <div></div>

            
            </form>
          </div>
        <div>
         <div className="grid grid-cols-1 gap-5  md:flex-col md:gap-16 lg:mt-10 "> 
              {
                info.map((item,index)=>{
                  return(
                    <div key={index} className="">
                      <a href={item.href} className="flex flex-col gap-3 lg:flex-row  ">

                      <div className="text-[rgb(241,141,59)] flex justify-center  " >
                       {item.icon}
                        </div>
                      <div>
                        <p className="text-white text-lg flex justify-center md:flex lg:justify-start">{item.title}</p>

                      <p className="text-white opacity-60 flex justify-center ">{item.details}</p>
                      </div>
                      </a>
                      
                    </div>
                  )
                })
              }

         </div>
        </div>

        </div>
        <br /><br /><br />
      </div>
    
    </div>

  )
}

export default Contact
