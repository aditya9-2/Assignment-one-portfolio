import goloc from "../assets/projects/GOLOC.jpg";
import healthzoid from "../assets/projects/healthzoid.jpg";
import portfolio from "../assets/projects/portfolio.jpg";
import face from "../assets/projects/face.jpg";

const Projects = () => {

    const projectsArray = [
        {
            title: "GOLOC - A local vendor solution",
            image: goloc,
            description:
                "GOLOC, a React e-commerce app, uses Strapi API and Stripe payment gateway. GOLOC sources products from local vendors when markets have no supply and charges extra. This sets GOLOC apart from other location-based apps.",
            technologies: ["HTML", "CSS", "React", "Node.js", "Strapi"],
        },
        {
            title: "Task Management App",
            image: healthzoid,
            description:
                "It's an app covering an area to detect some common and yet diseases full of risks so that a person can be able to find the symptoms without the visit to the physician. These are the diseases: brain tumour; breast cancer; parkinson's disease; heart disease ; COVID 19 ; diabetes ; pneumonia and alzheimer's.",
            technologies: ["HTML", "CSS", "Python", "Anaconda", "Jupyter Notebook"],
        },
        {
            title: "Portfolio Website",
            image: portfolio,
            description:
                "A personal portfolio website showcasing projects, skills, and contact information.",
            technologies: ["HTML", "CSS", "React", "Vite"],
        },
        {
            title: "Face Recognition Attendance System",
            image: face,
            description:
                "A platform for easing the work for many offices where an employee or a student can give their attendance.",
            technologies: ["Python"],
        },
    ];

    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">Projects</h2>
            <div>
                {projectsArray.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4">
                            <img
                                src={project.image}
                                width={150}
                                height={150}
                                alt={project.title}
                                className="mb-6 rounded"
                            />
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">{project.title}</h6>
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            <div>
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
