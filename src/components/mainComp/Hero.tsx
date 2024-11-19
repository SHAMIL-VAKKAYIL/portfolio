import { BsGithub, BsLinkedin } from "react-icons/bs"
import mypng from '../../assets/images/shamil 1.png'
import { SlLocationPin } from "react-icons/sl"
import { FaNodeJs, FaReact } from "react-icons/fa"
import { SiBootstrap, SiExpress, SiNextdotjs, SiTailwindcss } from "react-icons/si"
import { motion } from "framer-motion"



function Hero() {
    return (
        <motion.div className=" mx-auto sm:w-[85%] lg:w-[70%] flex flex-col justify-center items-center gap-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <div className="w-full flex flex-col gap-3 ">
                <motion.div className="flex justify-end items-center"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="flex gap-1 ">
                        <motion.div className="p-2 bg-card rounded-[10px] border-secondary hover:border-primary border-[2px] flex items-center justify-center "
                            whileHover={{ scale: 1.1 }}
                        >
                            <div className="bg-transparent">
                                <a href="https://github.com/SHAMIL-VAKKAYIL" className="bg-transparent">
                                    <BsGithub size={26} color="#F0F0F0" className="bg-transparent" />
                                </a>
                            </div>
                        </motion.div>
                        <motion.div className="bg-card  border-secondary hover:border-primary border-[2px] p-2 rounded-[10px] flex items-center justify-center "
                            whileHover={{ scale: 1.1 }}
                        >
                            <div className="bg-transparent">
                                <BsLinkedin size={26} color="#F0F0F0" className="bg-transparent" />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
                <div className="flex w-full gap-x-2   ">
                    <div className="bg-card border-secondary border-[2px] w-full  rounded-lg px-3 py-2">
                        <div className="flex items-center  font-bld text-2xl gap-x-3 bg-transparent mt-2">
                            <h2 className="text-font bg-transparent">MY NAME IS <span className="text-primary bg-transparent "> MUHAMMED SHAMIL</span> </h2>
                        </div>
                        <div className=" flex flex-col gap-y-1 mt-1 bg-transparent">
                            <p className="font-med text-font flex gap-x-1 bg-transparent items-end">
                                <div>
                                    <SlLocationPin color="#58A6FF" size={25} className="bg-transparent " />
                                </div>
                                Kerala, India</p>
                            <p className="font-med text-font  bg-transparent">I’m a Mern-stack developer,</p>
                            <p className="font-med text-font  bg-transparent">I specialize in frontend development</p>
                        </div>
                        <motion.div className="text-font text-sm bg-transparent flex justify-end "
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <button className="border-2 border-secondary rounded-lg font-sembld p-1 px-2 hover:border-primary bg-card">Dowenload CV</button>
                        </motion.div>
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
                            <motion.div
                                initial={{ rotate: 100, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}

                            >
                                <FaNodeJs color="#F0F0F0" size={26} className="bg-transparent" />
                            </motion.div>
                            <p className="bg-transparent underline-offset-2 underline text-primary cursor-pointer"> Node </p>,

                            <motion.div
                                initial={{ rotate: 100, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <SiExpress color="#F0F0F0" size={26} className="bg-transparent" />
                            </motion.div>

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
                            <motion.div
                                initial={{ rotate: 100, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >

                                <FaReact color="#F0F0F0" size={26} className="bg-transparent" />
                            </motion.div>
                            <p className="bg-transparent underline-offset-2 underline text-primary cursor-pointer"> React</p>.
                        </div>
                        <p className="bg-transparent text-font font-nrml mt-2">currently i’m learning </p>
                        <div className="text-font font-nrml flex gap-1 bg-transparent items-center mt-1 ">
                            <motion.div
                                initial={{ rotate: 100, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >

                                <SiNextdotjs color="#F0F0F0" size={26} className="bg-transparent" />
                            </motion.div>
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
                            <motion.div
                                initial={{ rotate: 100, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >

                                <SiTailwindcss color="#F0F0F0" size={26} className="bg-transparent" />
                            </motion.div>
                            <p className="bg-transparent underline-offset-2 underline text-primary cursor-pointer"> Tailwind css</p>,
                        </div>
                        <p className="bg-transparent text-font font-nrml mt-2">Before that I used Bootstrap. </p>
                        <div className="text-font font-nrml flex gap-1 bg-transparent items-center mt-1 ">
                            <motion.div
                                initial={{ rotate: 100, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >

                                <SiBootstrap color="#F0F0F0" size={26} className="bg-transparent" />
                            </motion.div>
                            <p className="bg-transparent underline-offset-2 underline text-primary cursor-pointer"> Bootstrap</p>.
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    )
}

export default Hero
