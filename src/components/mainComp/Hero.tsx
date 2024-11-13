import { BsGithub, BsLinkedin } from "react-icons/bs"
import mypng from '../../assets/images/shamil 1.png'
import { SlLocationPin } from "react-icons/sl"
import { FaNodeJs, FaReact } from "react-icons/fa"
import { SiBootstrap, SiExpress, SiNextdotjs, SiTailwindcss } from "react-icons/si"


function Hero() {
    return (
        <div className=" mx-auto sm:w-[85%] lg:w-[70%] flex flex-col justify-center items-center gap-y-2">
            <div className="w-full flex flex-col gap-3 ">
                <div className="flex justify-end items-center ">
                    <div className="flex gap-1 ">
                        <div className="p-2 bg-card rounded-[10px] border-secondary hover:border-primary border-[2px] flex items-center justify-center ">
                            <div className="bg-transparent">
                                <BsGithub size={26} color="#F0F0F0" className="bg-transparent" />
                            </div>
                        </div>
                        <div className="bg-card  border-secondary hover:border-primary border-[2px] p-2 rounded-[10px] flex items-center justify-center ">
                            <div className="bg-transparent">
                                <BsLinkedin size={26} color="#F0F0F0" className="bg-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full gap-x-2   ">
                    <div className="bg-card border-secondary border-[2px] w-full  rounded-lg px-3 py-2">
                        <div className="flex items-center  font-bld text-2xl gap-x-3 bg-transparent mt-2">
                            <h2 className="text-font bg-transparent">MY NAME IS <span className="text-primary bg-transparent "> MUHAMMED SHAMIL</span> </h2>
                        </div>
                        <div className=" flex flex-col gap-y-1 mt-1 bg-transparent">
                            <p className="font-med text-font flex gap-x-1 bg-transparent items-end"><SlLocationPin color="#58A6FF" size={25} className="bg-transparent " />Kerala, India</p>
                            <p className="font-med text-font  bg-transparent">I’m a Mern-stack developer,</p>
                            <p className="font-med text-font  bg-transparent">I specialize in frontend development</p>
                        </div>
                        <div className="text-font text-sm bg-transparent flex justify-end ">
                            <button className="border-2 border-secondary rounded-lg font-sembld p-1 px-2 hover:border-primary bg-card">Dowenload CV</button>
                        </div>
                    </div>
                    <div className="md:flex hidden ">
                        <img src={mypng} alt="" />
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-2 bg-transparent w-full  overflow-hidden ">
                {/* Backend */}
                <div className="bg-card border-2 border-secondary rounded-lg  flex flex-col p-3">
                    <h3 className="font-bld text-primary text-xl bg-transparent ">Backend</h3>
                    <div className="bg-transparent mt-5 ">
                        <p className="bg-transparent text-font font-nrml">In backend development, I use  </p>
                        <div className="text-font font-nrml flex gap-1 bg-transparent  items-center w-full    ">
                            <FaNodeJs color="#F0F0F0" size={26} className="bg-transparent" />
                            <p className="bg-transparent underline-offset-2 underline text-primary cursor-pointer"> Node </p>,
                            <SiExpress color="#F0F0F0" size={26} className="bg-transparent" />
                            <p className="bg-transparent underline-offset-2 underline text-primary cursor-pointer"> Express</p>.
                        </div>

                    </div>

                </div>
                {/* frontend */}
                <div className="bg-card border-2 border-secondary rounded-lg  flex flex-col p-3   ">
                    <h3 className="font-bld text-primary text-xl bg-transparent ">Frontend</h3>
                    <div className="bg-transparent mt-5 ">
                        <p className="bg-transparent text-font font-nrml ">For frontend i choose  </p>
                        <div className="text-font font-nrml flex gap-1 bg-transparent items-center w-full    ">
                            <FaReact color="#F0F0F0" size={26} className="bg-transparent" />
                            <p className="bg-transparent underline-offset-2 underline text-primary cursor-pointer"> React</p>.
                        </div>
                        <p className="bg-transparent text-font font-nrml mt-2">currently i’m learning </p>
                        <div className="text-font font-nrml flex gap-1 bg-transparent items-center mt-1 ">
                            <SiNextdotjs color="#F0F0F0" size={26} className="bg-transparent" />
                            <p className="bg-transparent underline-offset-2 underline text-primary cursor-pointer"> Next.js</p>.
                        </div>
                    </div>
                </div>
                {/* ui */}
                <div className="bg-card border-2 border-secondary rounded-lg  flex flex-col p-3">
                    <h3 className="font-bld text-primary text-xl bg-transparent ">UI</h3>
                    <div className="bg-transparent mt-5 ">
                        <p className="bg-transparent text-font font-nrml ">When it comes to UI, I choose  </p>
                        <div className="text-font font-nrml flex gap-1 bg-transparent items-center w-full    ">
                            <SiTailwindcss color="#F0F0F0" size={26} className="bg-transparent" />
                            <p className="bg-transparent underline-offset-2 underline text-primary cursor-pointer"> Tailwind css</p>,
                        </div>
                        <p className="bg-transparent text-font font-nrml mt-2">Before that I used Bootstrap. </p>
                        <div className="text-font font-nrml flex gap-1 bg-transparent items-center mt-1 ">
                            <SiBootstrap color="#F0F0F0" size={26} className="bg-transparent" />
                            <p className="bg-transparent underline-offset-2 underline text-primary cursor-pointer"> Bootstrap</p>.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero
