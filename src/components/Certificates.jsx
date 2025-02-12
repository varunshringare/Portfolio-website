import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import assoc from "../assets/AIAssociate.png";
import aspec from "../assets/AISpecialist.png";
import datacl from "../assets/DataCloud.png";
import javace from "../assets/java.png";
import pythonce from "../assets/python.png";

const certifications = [
  {
    id: 1,
    image: datacl,
    title: "Salesforce Data Cloud Consultant",
    source: "Salesforce",
  },
  {
    id: 2,
    image: assoc,
    title: "Salesforce AI Associate",
    source: "Salesforce",
  },
  {
    id: 3,
    image: aspec,
    title: "Salesforce AI Specialist",
    source: "Salesforce",
  },
  {
    id: 4,
    image: javace,
    title: "Java Programming",
    source: "Sanfoundry",
  },
  {
    id: 5,
    image: pythonce,
    title: "Python Programming",
    source: "Sanfoundry",
  },
];

const Certificates = ({ sectionId }) => {
  return (
    <section id={sectionId} className="py-12 border-b border-neutral-700">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl text-purple-100"
      >
        Certifications
      </motion.h1>
      <div className="grid gap-6 mx-auto max-w-9xl p-4 sm:grid-cols-1 md:grid-cols-2">
        {certifications.map((certification) => (
          <motion.div
            key={certification.id}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-3 rounded-md bg-neutral-900 p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={certification.image}
              alt={certification.title}
              className="h-200 w-130 rounded-lg object-cover shadow-md"
            />
            <div className="w-full text-center">
              <h6 className="mb-2 text-2xl font-semibold text-purple-100">
                {certification.title}
              </h6>
              <p className="text-neutral-400 text-lg">
                Source: {certification.source}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

Certificates.propTypes = {
  sectionId: PropTypes.string.isRequired,
};

export default Certificates;
