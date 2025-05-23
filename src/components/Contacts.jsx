import React from "react";
import PropTypes from "prop-types";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contacts = ({ sectionId }) => {
  return (
    <div id={sectionId} className="border-b border-neutral-900 pb-30">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="mb-3 my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <div className="text-center tracking-lighter text-lg">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        {/* <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p> */}
        <a
          href="mailto:your-vdshringare@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-3 border-b block pb-10"
        >
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

Contacts.propTypes = {
  sectionId: PropTypes.string.isRequired,
};

export default Contacts;
