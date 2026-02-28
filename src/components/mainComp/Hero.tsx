import mypng from '../../assets/images/shamil 1.png'
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { SlLocationPin } from "react-icons/sl"
import { FaNodeJs, FaReact } from "react-icons/fa"
import { SiExpress, SiTypescript, SiApachekafka, SiRedis, SiGraphql, SiPostgresql, SiTailwindcss } from "react-icons/si"
import { motion } from "framer-motion"

function Hero() {

    return (
        <motion.div className=" mx-auto w-[95%] sm:w-[85%] lg:w-[70%] flex flex-col justify-center items-center gap-y-2"

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
                                <a href="https://linkedin.com/in/muhammedshamil07" className="bg-transparent">
                                    <BsLinkedin size={26} color="#F0F0F0" className="bg-transparent" />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
                <div className="flex w-full gap-x-2   ">
                    <div className=" bg-card border-secondary border-[2px] w-full  rounded-lg px-3 py-2">
                        <div className="flex items-center  font-bld text-2xl gap-x-3 bg-transparent mt-2">
                            <h2 className="text-font bg-transparent">MY NAME IS <span className="text-primary bg-transparent "> MUHAMMED SHAMIL</span> </h2>
                        </div>
                        <div className=" flex flex-col gap-y-1 mt-1 bg-transparent">
                            <p className="font-med text-font flex gap-x-1 bg-transparent items-end">
                                <span>
                                    <SlLocationPin color="#58A6FF" size={25} className="bg-transparent " />
                                </span>
                                Kerala, India</p>
                            <p className="font-med text-font  bg-transparent">I’m a Software Engineer focused on Backend Architecture,</p>
                            <p className="font-med text-font  bg-transparent">Specializing in high-throughput distributed systems and scalable microservices. Driven by a passion for data engineering, performance optimization, and resilient infrastructure.</p>
                        </div>
                        <br />
                        <motion.div className="text-font text-sm bg-transparent flex justify-end mt-2 md:mt-0"
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <a
                                href="/shamilSoftwareEngineerResume.pdf"
                                download='shamilSoftwareEngineerResume.pdf'
                                className="border-2 border-secondary rounded-lg font-sembld p-1 px-2 hover:border-primary bg-card">Download CV</a>
                        </motion.div>
                    </div>
                    <div className="md:flex  hidden">
                        <img src={mypng} alt="" className="object-cover rounded-lg " />
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-2 bg-transparent w-full  overflow-hidden ">
                {/* Backend Engineering */}
                <div className="bg-card border-2 border-secondary rounded-lg  flex flex-col p-3   ">
                    <h3 className="font-bld text-primary text-xl bg-transparent ">Backend Engineering</h3>
                    <div className="bg-transparent mt-5 ">
                        <p className="bg-transparent text-font font-nrml ">Robust & Modular with </p>
                        <div className="text-font font-nrml flex gap-1 bg-transparent items-center w-full flex-wrap   ">
                            <motion.div
                                initial={{ rotate: 100, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <FaNodeJs color="#F0F0F0" size={26} className="bg-transparent" />
                            </motion.div>
                            <p className="bg-transparent underline-offset-2 underline text-primary cursor-pointer"> Node.js</p>,
                            <motion.div
                                initial={{ rotate: 100, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <SiExpress color="#F0F0F0" size={26} className="bg-transparent" />
                            </motion.div>
                            <p className="bg-transparent underline-offset-2 underline text-primary cursor-pointer"> Express</p>,
                            <motion.div
                                initial={{ rotate: 100, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <SiPostgresql color="#F0F0F0" size={26} className="bg-transparent" />
                            </motion.div>
                            <p className="bg-transparent underline-offset-2 underline text-primary cursor-pointer"> Postgres</p>,
                            <motion.div
                                initial={{ rotate: 100, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                <SiTypescript color="#F0F0F0" size={26} className="bg-transparent" />
                            </motion.div>
                            <p className="bg-transparent underline-offset-2 underline text-primary cursor-pointer"> TS</p>.
                        </div>
                    </div>
                </div>
                {/* Scalability */}
                <div className="bg-card border-2 border-secondary rounded-lg  flex flex-col p-3">
                    <h3 className="font-bld text-primary text-xl bg-transparent ">Scalability</h3>
                    <div className="bg-transparent mt-5 ">
                        <p className="bg-transparent text-font font-nrml">Distributed & Resilient with </p>
                        <div className="text-font font-nrml flex gap-1 bg-transparent  items-center w-full flex-wrap   ">
                            <motion.div
                                initial={{ rotate: 100, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}

                            >
                                <SiApachekafka color="#F0F0F0" size={26} className="bg-transparent" />
                            </motion.div>
                            <p className="bg-transparent underline-offset-2 underline text-primary cursor-pointer"> Kafka </p>,

                            <motion.div
                                initial={{ rotate: 100, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <SiRedis color="#F0F0F0" size={26} className="bg-transparent" />
                            </motion.div>
                            <p className="bg-transparent underline-offset-2 underline text-primary cursor-pointer"> Redis</p>,

                            <motion.div
                                initial={{ rotate: 100, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <SiGraphql color="#F0F0F0" size={26} className="bg-transparent" />
                            </motion.div>
                            <p className="bg-transparent underline-offset-2 underline text-primary cursor-pointer"> GraphQL</p>.
                        </div>

                    </div>

                </div>
                {/* Frontend */}
                <div className="bg-card border-2 border-secondary rounded-lg  flex flex-col p-3 ">
                    <h3 className="font-bld text-primary text-xl bg-transparent ">Frontend</h3>
                    <div className="bg-transparent mt-5 ">
                        <p className="bg-transparent text-font font-nrml ">Responsive & Interactive with </p>
                        <div className="text-font font-nrml flex gap-1 bg-transparent items-center w-full flex-wrap   ">
                            <motion.div
                                initial={{ rotate: 100, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <FaReact color="#F0F0F0" size={26} className="bg-transparent" />
                            </motion.div>
                            <p className="bg-transparent underline-offset-2 underline text-primary cursor-pointer"> React</p>,
                            <motion.div
                                initial={{ rotate: 100, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <SiTailwindcss color="#F0F0F0" size={26} className="bg-transparent" />
                            </motion.div>
                            <p className="bg-transparent underline-offset-2 underline text-primary cursor-pointer"> Tailwind</p>.
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    )
}

export default Hero
