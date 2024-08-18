
// import logo from "../assets/abLogo.png";
// // use Recat-icons for icons
// import { FaLinkedin, FaGithub } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// const Navbar = () => {
//     return <nav className="mb-20 flex items-center justify-between py-6">

//         <div className="flex flex-shrink-0 items-center">
//             <img src={logo} alt="LOGO" className="mx-2 w-10" />
//         </div>

//         <div className="m-8 flex items-center justify-center gap-4 text-2xl">
//             <FaLinkedin />
//             <FaGithub />
//             <FaXTwitter />
//         </div>

//     </nav>
// }

// export default Navbar


import logo from "../assets/abLogo.png";
// Use React-icons for icons
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img src={logo} alt="LOGO" className="mx-2 w-10" />
            </div>

            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a
                    href="https://www.linkedin.com/in/aadityabasak20"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/aditya9-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://x.com/aadityaa027"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                >
                    <FaXTwitter />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;

