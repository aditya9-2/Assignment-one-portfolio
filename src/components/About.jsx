import aboutPic from '../assets/aboutPic.jpg'
import { motion } from 'framer-motion'
const About = () => {



    const aboutPara = `I am a dedicated and versatile Web developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;
    return (
        <div className="border-b border-neutral-900 pb-4">

            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl"
            >About <span className="text-neutral-500">Me</span>
            </motion.h2>

            <div className="flex flex-wrap">

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2 lg:p-8"
                >

                    <div className="flex items-center justify-center lg:justify-start">
                        <img className="w-80 rounded-3xl" src={aboutPic} alt="aboutimg" />
                    </div>

                </motion.div>

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2"
                >
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{aboutPara}</p>
                    </div>
                </motion.div>
            </div>

        </div>
    )
}

export default About
