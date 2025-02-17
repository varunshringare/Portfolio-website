import PropTypes from "prop-types";
import aboutimg from "../assets/Project.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = ({ sectionId }) => {
  return (
    <div id={sectionId} className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        A little
        <span className="text-neutral-500"> about me</span>
      </motion.h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutimg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-xl text-justify">
              {ABOUT_TEXT}
            </p>
          </div>
          {/* <a href={resume} target="_blank" rel="noopener noreferrer">
            <button className="bg-transparent border-2 border-purple-700 text-white text-xl px-8 py-3 rounded-lg shadow-lg hover:bg-purple-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-3 transform transition-transform hover:scale-105 active:scale-100">
              View resume
            </button>
          </a> */}
        </motion.div>
      </div>
    </div>
  );
};

About.propTypes = {
  sectionId: PropTypes.string.isRequired,
};

export default About;
