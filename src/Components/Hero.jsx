

function Hero() {
    return (
        <div id="Home" className="bg-[#191919]  flex justify-center  h-[44rem]   ">
            <div className=" sm:w-[90%] mt-10 "><br /><br /><br />
                <div className=" flex justify-center m-5  gap-5 mt-22 p-10 ">
                    <div className="flex flex-col gap-4">
                        <p className="text-2xl text-white"><span className="text-4xl text-white font-semibold">Hello,</span>   I am</p>

                        <p className="text-3xl text-[rgb(241,141,59)]">Muhammed Shamil</p>
                        <div className="flex flex-col gap-4 font-bold">
                            <p className="text-4xl font-bold tracking-tight text-white sm:text-6xl ">Full-Stack</p>
                            <p className="text-4xl font-bold tracking-tight text-white sm:text-6xl flex md:justify-center lg:justify-normal  lg:ml-20 "> Web Developer</p>
                        </div>
                    </div>

                </div>
                <div className=" flex justify-center px-8 sm:px-0">
                    <p className="sm:w-[40%] text-white">I'm a passionate MERN-stack developer, curious to learn more about developing scalable distributed systems, loves problem solving and cares about writing readable as well as maintainable code</p>
                </div>
            </div>
        </div>
    )
}

export default Hero
