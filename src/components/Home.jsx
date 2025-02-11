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
      <Hero sectionId="hero" />
      <About sectionId="about" />
      <Techno sectionId="techno" />
      <Experience sectionId="experience" />
      <Projects sectionId="projects" />
      <Contacts sectionId="contacts" />
    </div>
  );
};

export default Home;
