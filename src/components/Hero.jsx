
import profilePic from '../assets/profilePic.jpg';

const Hero = () => {

    // Dynamic paragraph content for flexibility and easy updates
    const para = "Welcome to my portfolio! I am Aditya, a freelancer with a passion for exploring new technologies. My curiosity and enthusiasm drive me to always be learning and experimenting with the latest advancements in my field. You can see some of the work I've done in the past in the projects section of my portfolio, which will give you a sense of my skills and experience. Thank you for taking the time to visit, and I hope you find what you're looking for.";

    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap lg:flex-nowrap">
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:justify-center p-8">
                    <h1 className="pb-4 text-4xl font-thin tracking-tight lg:text-6xl">
                        Aditya Basak
                    </h1>
                    <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                        Front-end Developer
                    </span>
                    <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                        {para}
                    </p>
                </div>
                <div className="flex justify-center w-full lg:w-1/2 lg:justify-end p-8">
                    <img src={profilePic} alt="heroImage" className="w-52 lg:w-72 rounded-2xl" />
                </div>
            </div>
        </div>
    );









    // const para = "Welcome to my portfolio! I am Aditya, a freelancer with a passion for exploring new technologies. My curiosity and enthusiasm drive me to always be learning and experimenting with the latest advancements in my field. You can see some of the work I've done in the past in the projects section of my portfolio, which will give you a sense of my skills and experience.Thank you for taking the time to visit, and I hope you find what you're looking for.";

    // return <div className="border-b border-neutral-900 pb-4 lg:mb-35">

    //     <div className="flex flex-wrap">
    //         <div className="w-full lg:1/2 bg-green-500">
    //             <div className="flex flex-col items-center lg:items-start">
    //                 <h1 className="pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl">
    //                     Aditya Basak
    //                 </h1>

    //                 <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
    //                     Front-end Developer
    //                 </span>
    //                 <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
    //                     {para}
    //                 </p>

    //             </div>

    //         </div>

    //         <div className='flex justify-end w-full lg:w-1/2 lg:p-8'>
    //             <div className="flex justify-center">
    //                 <img src={profilePic} alt="heroImage" className="w-52" />
    //             </div>
    //         </div>


    //     </div>
    // </div>

}

export default Hero
Hero