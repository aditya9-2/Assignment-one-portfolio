
import profilePic from '../assets/profilePic.jpg';

const Hero = () => {

    // Dynamic paragraph content for flexibility and easy updates
    const para = "Welcome to my portfolio! I am Aditya, a freelancer with a passion for exploring new technologies. My curiosity and enthusiasm drive me to always be learning and experimenting with the latest advancements in my field. You can see some of the work I've done in the past in the projects section of my portfolio, which will give you a sense of my skills and experience. Thank you for taking the time to visit, and I hope you find what you're looking for.";

    return (

        <div className="border-b border-neutral-900 pb-4 lg:mb-36">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Aditya Basak</h1>

                        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Web Developer</span>
                        <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{para}</p>

                        <a
                            href="/resume.pdf"
                            download="Aditya_Basak_Resume.pdf"

                            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white  dark:focus:ring-blue-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Download Resume
                            </span>
                        </a>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center lg:justify-end mt-2">
                        <img className="w-80 rounded-3xl" src={profilePic} alt="heroImage" />
                    </div>
                </div>
            </div>
        </div>

    );











}

export default Hero
Hero