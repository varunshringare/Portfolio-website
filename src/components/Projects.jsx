import React from "react";
import PropTypes from "prop-types";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Projects = ({ sectionId }) => {
  return (
    <div id={sectionId} className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="m-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
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
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="md-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400"
                >
                  {tech}
                </span>
              ))}
              <div className="mt-3">
                <Link to={project.link}>
                  <button className="bg-purple-800 text-white px-2 py-1 rounded-md hover:bg-purple-900 focus:outline-none focus:ring-purple-500 focus:ring-offset-2 transform transition-transform hover:scale-110 active:scale-90">
                    View Project
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

Projects.propTypes = {
  sectionId: PropTypes.string.isRequired,
};
export default Projects;
