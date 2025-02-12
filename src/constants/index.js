import project1 from "../assets/projects/Gesturepro.jpg";
import project2 from "../assets/projects/vlogo.png";
import project3 from "../assets/projects/workout.png";
import project4 from "../assets/projects/Pet.png";
import project5 from "../assets/projects/texting.jpg";
import project6 from "../assets/projects/volume.jpg";
import project7 from "../assets/projects/caterer.png";
import project8 from "../assets/projects/chatg.jpeg";
import appstrailLogo from "../assets/appstrail.jpeg";
import opendest from "../assets/opendestination.jpeg";

export const HERO_CONTENT = `I am a passionate software engineer with expertise in Python programming, Java programming, ReactJS, C/C++, SQL, Machine Learning and Web Development. My experience across various domains enables me to create robust and scalable solutions tailored to specific business needs. I strive to leverage my diverse skill set to drive innovation and deliver solutions that address challenges and explore the world of technology.`;

export const ABOUT_TEXT = `With an honors degree in BE Computer Engineering and a passion for innovation, I have cultivated a fulfilling and dynamic journey in technology. My academic foundation, complemented by an impactful internship at Open Destinations Pvt Ltd, laid the groundwork for my expertise in Python, Java, ReactJS, SQL, .NET, C/C++, and advanced tools like scikit-learn, PyTorch, and OpenCV.

A highlight of my journey is the publication of my research paper, "Gesture Control System for Drones: Enhancing Human-Drone Interaction through Real-Time Machine Learning and Depth Sensing," in a Springer journal. This project demonstrated my ability to bridge theoretical knowledge and practical application, leveraging machine learning to enhance human-drone interaction.

Currently, I am working at Appstrail Technology as a Mulesoft and Salesforce Admin Developer, where I manage integration and automation solutions to optimize business processes. In addition, I am actively learning Apex programming to deepen my expertise in Salesforce development and further expand my technical repertoire.`;

export const EXPERIENCES = [
  {
    year: "July, 2023 - September, 2023",
    role: "Web Development Intern ",
    company: "Open Destinations Pvt Ltd.",
    description: `worked closely on the construction and development of the company’s website, gaining hands-on experience in web design and development. Additionally, I successfully created my own working website for a project, applying the skills and knowledge I acquired.`,
    technologies: ["ASP.NET", "Javascript", "C#", "SSMS", "VsExpress"],
    logo: opendest,
  },
  {
    year: "November 2024 - Present",
    role: "Associate Consultant Trainee",
    company: "Appstrail Technology.",
    description: `As an Associate Consultant Trainee, I am gaining expertise in Salesforce platform and Mulesoft. My role involves collaborating with cross-functional teams, analyzing client requirements, and contributing to the implementation of innovative solutions that drive business success.`,
    technologies: ["Salesforce", "Mulesoft", "Apex", "RAML", "Javascript"],
    logo: appstrailLogo,
  },
];

export const PROJECTS = [
  {
    title: "AI Chatbot",
    image: project8,
    description:
      "A Full Stack AI chatbot using the MERN stack (MongoDB, Express, React, Node.js) and TypeScript, featuring advanced authentication mechanisms. ",
    technologies: ["MongoDB", "Express", "React", "Openai", "Node.js"],
    link: "/Project8",
  },
  {
    title: "Gesture Control System for Drones",
    image: project1,
    description:
      "A system to fly FPV drones with ease via simple hand gestures reducing the training period and difficulty invloved with flying drones.",
    technologies: [
      "Python",
      "Vue.Js",
      "Scikit-Learn",
      "Opencv",
      "Mediapipe",
      "Arduino IDE",
    ],
    link: "/Project1",
  },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["ReactJs", "Tailwind CSS", "Framer motion", "Vite"],
    link: "/Project2",
  },
  {
    title: "Demo Landing page for Regh Caterers",
    image: project7,
    description:
      "A landing page created for Regh Caterers showcasing their services, menu and staff.",
    technologies: ["ReactJs", "Vanilla CSS"],
    link: "/Project7",
  },
  {
    title: "Fitness Tracking App",
    image: project3,
    description:
      "A personal fitness tracking app integrated with machine learning models to identify and count workout reps performed by the user.",
    technologies: ["Python", "ReactJs", "Scikit-Learn", "Opencv", "Mediapipe"],
    link: "/Project3",
  },
  {
    title: "Online Pet Supplies Store",
    image: project4,
    description:
      "A fully functional website utilized to order pet supplies implemented using the three layer business architecture.",
    technologies: ["ASP.NET", "C#", "CSS", "VsExpress", "SSMS"],
    link: "/Project4",
  },
  {
    title: "Chatting Application",
    image: project5,
    description:
      "A client-server texting platform for sending and receiving messages.",
    technologies: ["Java", "AWT", "Socket programming"],
    link: "/Project5",
  },
  {
    title: "Gesture Volume Controller",
    image: project6,
    description:
      "Well trained machine learning model used to adjust the system volume via simple hand gestures.",
    technologies: ["Python", "ReactJs", "Scikit-Learn", "Opencv", "Mediapipe"],
    link: "/Project6",
  },
];

export const CONTACT = {
  address: "Vasco, Goa-403726, India",
  phoneNo: "+91 7385084958",
  email: "vdshringare@gmail.com",
};
