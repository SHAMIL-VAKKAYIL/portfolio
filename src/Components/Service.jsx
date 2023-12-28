
import web from '../assets/domain.png'
function Service() {
  return (
    <div id='Services' className='flex justify-center bg-[#191919] '>
      <div className=" sm:w-[80%]"><br /><br /><br />

        <h1 className=" flex justify-center text-white text-4xl mt-10"><h1 className='text-[rgb(241,141,59)]'>S</h1>ervice<h1 className='text-[rgb(241,141,59)]'>s</h1></h1>
        <div className='mt-10 flex  gap-x-6 gap-y-10  justify-center'>

        <div className=" w-[70%] gap-5 shadow-md border-4 border-white shadow-white rounded-md bg-gray-200 overflow-hidden ">
          <img
            src={web}
            alt=""
            className="w-24 object-cover object-center opacity-100 hover:scale-110 transition duration-300 ease-in-out rounded-md "
            />
          <p className="p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veritatis optio quod debitis fugiat officia beatae sequi maiores enim, iste doloribus omnis impedit nihil accusantium voluptatum magnam voluptate necessitatibus ipsam?</p>
        </div>
            </div>
            </div>
      </div>
    
   
  )
}

export default Service
