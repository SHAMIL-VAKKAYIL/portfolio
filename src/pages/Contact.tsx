
function Contact() {
  return (
    <div className="h-svh flex flex-col justify-center items-center overflow-hidden">
      <div className="text-font border-2 border-secondary p-5 rounded-lg w-[90%] md:w-[60%]">
        <h2 className="font-sembld">GET IN TOUCH</h2>
        <div >
          <form action="" className="flex flex-col gap-3 font-nrml mt-8" >
            <input type="text" name="" className="h-3vh px-3 py-2 border-2 border-secondary outline-none placeholder:text-font bg-card  rounded-l-xl rounded-r-xl" placeholder="Name" id="" />
            <input type="emial" name="" className="h-3vh px-3 py-2 border-2 border-secondary outline-none placeholder:text-font bg-card  rounded-l-xl rounded-r-xl" placeholder="Email" id="" />
            <textarea name="" className="resize-none placeholder:text-font px-3 py-2 border-2 border-secondary outline-none bg-card  rounded-l-xl rounded-r-xl" cols={60} rows={4} id="" placeholder="Message"></textarea>
            <button type="submit" className="bg-gradient-to-br from-primary to-transparent rounded-r-xl rounded-l-xl py-2 font-sembld hover:bg-primary ease-in-out transform duration-300 ">Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
