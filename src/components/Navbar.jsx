import logo from "../assets/ProfileLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="  mb-20 flex items-center justify-between py-6">
      <div className="flex felx-shrink-0 items-center">
        <img className="mx-4 w-12" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-3xl">
        <a
          href="https://github.com/varunshringare"
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-transform hover:scale-110 active:scale-125"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/varun-shringare-801019269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-transform hover:scale-110 active:scale-125"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/varun_shringare"
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-transform hover:scale-110 active:scale-125"
        >
          <FaSquareXTwitter />
        </a>
        <a
          href="mailto:your-vdshringare@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-transform hover:scale-110 active:scale-125"
        >
          <BiLogoGmail />
        </a>
        <a
          href="https://www.instagram.com/varun_ds_"
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-transform hover:scale-110 active:scale-125"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
