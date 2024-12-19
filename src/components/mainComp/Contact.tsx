import { BsGithub } from "react-icons/bs";
import { SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Contact() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  //! Variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  //! Stagger container for children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div
      ref={containerRef}
      className="mx-auto w-[95%] sm:w-[85%] lg:w-[70%] flex flex-col mt-2"
    >
      <motion.div
        className="border-2 border-secondary rounded-lg p-3 bg-card"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h3 className="font-bld text-white text-xl bg-transparent">
          Get in Touch
        </h3>
        <motion.div
          className=" flex  gap-2 mt-5 bg-transparent"
          variants={containerVariants}
        >
          <div className="flex  gap-2 bg-transparent">
            {/* GitHub Card */}
            <motion.div
              className="border-2 flex-1 border-secondary hover:border-primary rounded-lg w-full px-2"
              variants={cardVariants}
              
            >
              <a
                href="https://github.com/SHAMIL-VAKKAYIL"
                className="flex flex-col bg-transparent justify-center items-center h-full gap-2"
              >
                <BsGithub size={40} color="#f0f0f0" />
                <h2 className="hidden md:flex font-med text-xl text-font cursor-pointer transition-transform text-center">
                  shamil-vakkayil 
                </h2>
              </a>
            </motion.div>

            {/* LinkedIn Card */}
            <motion.div
              className="flex-1 border-2 border-secondary hover:border-primary rounded-lg"
              variants={cardVariants}
              
            >
              <a
                href="https://linkedin.com/in/muhammed-shamil-a21154237"
                className="flex flex-col items-center justify-center gap-2 bg-transparent h-full"
              >
                <SiLinkedin size={40} color="#f0f0f0" />
                <h2 className="hidden md:flex font-med text-xl text-font cursor-pointer transition-transform text-center">
                  muhammed shamil
                </h2>
              </a>
            </motion.div>
          </div>

          {/* Gmail and Instagram */}
          <div className="flex flex-1  flex-col gap-2 h-full bg-transparent">
            {/* Gmail Card */}
            <motion.div
              className="border-2  border-secondary hover:border-primary h-[40%] rounded-lg py-5 px-2"
              variants={cardVariants}
              
            >
              <a
                href="mailto:msvshamil470@gmail.com"
                className="flex items-center bg-transparent justify-center gap-2 h-full"
              >
                <SiGmail size={36} color="#f0f0f0" />
                <h2 className="hidden md:flex font-med text-xl text-font cursor-pointer transition-transform text-center">
                  msvshamil470@gmail.com
                </h2>
              </a>
            </motion.div>

            {/* Instagram Card */}
            <motion.div
              className="h-[60%]  border-2 border-secondary hover:border-primary rounded-lg py-5"
              variants={cardVariants}
              
            >
              <a
                href="https://www.instagram.com/shamil_vakkayil?igsh=bzh6MmxkOWo2c2t5"
                className="flex flex-col bg-transparent justify-center items-center h-full gap-2"
              >
                <SiInstagram size={36} color="#f0f0f0" />
                <h2 className="hidden md:flex font-med text-xl text-font cursor-pointer transition-transform text-center">
                  shamil_vakkayil
                </h2>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Contact;
