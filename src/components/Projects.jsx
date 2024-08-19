import goloc from "../assets/projects/GOLOC.jpg";
import healthzoid from "../assets/projects/healthzoid.jpg";
import portfolio from "../assets/projects/portfolio.jpg";
import face from "../assets/projects/face.jpg";
import { motion } from "framer-motion";


const Projects = () => {

    const projectsArray = [
        {
            title: "GOLOC - A local vendor solution",
            image: goloc,
            description:
                "GOLOC, a React e-commerce app, uses Strapi API and Stripe payment gateway. GOLOC sources products from local vendors when markets have no supply and charges extra. This sets GOLOC apart from other location-based apps.",
            technologies: ["HTML", "CSS", "React", "Node.js", "Strapi"],
            link: "https://github.com/aditya9-2/GOLOC"
        },
        {
            title: "Healthzoid - Muliple disease Detection System",
            image: healthzoid,
            description:
                "It's an app covering an area to detect some common and yet diseases full of risks so that a person can be able to find the symptoms without the visit to the physician. These are the diseases: brain tumour; breast cancer; parkinson's disease; heart disease ; COVID 19 ; diabetes ; pneumonia and alzheimer's.",
            technologies: ["HTML", "CSS", "Python", "Anaconda", "Jupyter Notebook"],
            link: "https://github.com/aditya9-2/Healthzoid"
        },
        {
            title: "Portfolio Website",
            image: portfolio,
            description:
                "A personal portfolio website showcasing projects, skills, and contact information.",
            technologies: ["HTML", "CSS", "React", "Vite"],
            link: "https://google.com" // Link to change after deploy
        },
        {
            title: "Face Recognition Attendance System",
            image: face,
            description:
                "A platform for easing the work for many offices where an employee or a student can give their attendance.",
            technologies: ["Python"],
            link: "https://github.com/aditya9-2/python-basic-to-intermediate-five-projects/tree/master/faceRecognitionAttendanceSystem",
        },
    ];

    return (
        <div className="border-b border-neutral-900 pb-4">

            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className="my-20 text-center text-4xl"
            >
                Projects
            </motion.h2>
            <div>
                {projectsArray.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4">
                            <img
                                src={project.image}
                                width={150}
                                height={150}
                                alt={project.title}
                                className="mb-6 rounded"
                            />
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1.3 }}
                            className="w-full max-w-xl lg:w-3/4"
                        >
                            <h6 className="mb-2 font-semibold">{project.title}</h6>
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            <div className="mb-4">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white"
                            >
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    View Project
                                </span>
                            </a>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
