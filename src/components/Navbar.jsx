import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter, FaSalesforce } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close menu after navigating
    }
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false); // Close the menu if clicked outside
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="relative mb-20 flex items-center justify-between py-6">
      {/* Menu Toggle */}
      <button
        className="mx-4 flex items-center justify-center rounded p-2 text-2xl transition-transform hover:scale-110 active:scale-125"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation menu"
      >
        <FaBars />
      </button>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <ul
          ref={menuRef}
          className="absolute top-14 left-14 z-50 w-90 rounded-lg bg-black/90 p-4 shadow-lg grid grid-cols-2 gap-2"
          aria-hidden={!isMenuOpen}
        >
          <li
            className="cursor-pointer py-2 text-lg text-white transition-colors hover:text-purple-500"
            onClick={() => handleNavigation("about")}
          >
            About Me
          </li>
          <li
            className="cursor-pointer py-2 text-lg text-white transition-colors hover:text-purple-500"
            onClick={() => handleNavigation("experience")}
          >
            Experience
          </li>
          <li
            className="cursor-pointer py-2 text-lg text-white transition-colors hover:text-purple-500"
            onClick={() => handleNavigation("projects")}
          >
            Projects
          </li>
          <li
            className="cursor-pointer py-2 text-lg text-white transition-colors hover:text-purple-500"
            onClick={() => handleNavigation("contact")}
          >
            Contact
          </li>
          <li
            className="cursor-pointer py-2 text-lg text-white transition-colors hover:text-purple-500"
            onClick={() => handleNavigation("certs")}
          >
            Certifications
          </li>
          <li
            className="cursor-pointer py-2 text-lg text-white transition-colors hover:text-purple-500"
            onClick={() => handleNavigation("contact")}
          >
            Research Paper
          </li>
        </ul>
      )}

      {/* Social Links */}
      <div className="m-8 flex items-center justify-center gap-4 text-3xl">
        <a
          href="https://github.com/varunshringare"
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-transform hover:scale-110 active:scale-125"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/varun-shringare-801019269"
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-transform hover:scale-110 active:scale-125"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/varun_shringare"
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-transform hover:scale-110 active:scale-125"
          aria-label="Twitter"
        >
          <FaSquareXTwitter />
        </a>
        <a
          href="https://www.salesforce.com/trailblazer/ife6aualzzyeaqf1jd"
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-transform hover:scale-110 active:scale-125"
          aria-label="Salesforce"
        >
          <FaSalesforce />
        </a>
        <a
          href="mailto:vdshringare@gmail.com"
          className="transform transition-transform hover:scale-110 active:scale-125"
          aria-label="Email"
        >
          <BiLogoGmail />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
