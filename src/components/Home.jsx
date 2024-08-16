import React from "react";
import Hero from "./Hero";
import About from "./About";
import Techno from "./Techno";
import Experience from "./Experience";
import Projects from "./Projects";
import Contacts from "./Contacts";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Techno />
      <Experience />
      <Projects />
      <Contacts />
    </div>
  );
};

export default Home;
