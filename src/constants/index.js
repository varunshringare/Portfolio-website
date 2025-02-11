import project1 from "../assets/projects/Gesturepro.jpg";
import project2 from "../assets/projects/vlogo.png";
import project3 from "../assets/projects/workout.png";
import project4 from "../assets/projects/Pet.png";
import project5 from "../assets/projects/texting.jpg";
import project6 from "../assets/projects/volume.jpg";
import project7 from "../assets/projects/caterer.png";
import project8 from "../assets/projects/OpenAi.png";
import appstrailLogo from "../assets/appstrail.jpeg";
import opendest from "../assets/opendestination.jpeg";

export const HERO_CONTENT = `I am a passionate software engineer with expertise in Python programming, Java programming, ReactJS, C/C++, SQL, Machine Learning and AI, Web Development, and Power BI. My experience across various domains enables me to create robust and scalable solutions tailored to specific business needs. I strive to leverage my diverse skill set to drive innovation and deliver cutting-edge solutions that address complex challenges and push the boundaries of technology.`;

export const ABOUT_TEXT = `With an honors degree in BE Computer Engineering, my journey in technology has been both fulfilling and dynamic. My academic background laid a strong foundation, further enriched by an impactful internship at Open Destinations Pvt Ltd, where I specialized in web development. Over the years, I have honed my skills in Python, Java, ReactJS, SQL, .NET, C/C++, as well as advanced tools like scikit-learn, PyTorch, and OpenCV. My hands-on experience includes notable projects such as developing a gesture control system for drones using machine learning, creating a workout tracking app leveraging ReactJS and machine learning, and building various websites with ReactJS and Node.js. Each project has not only broadened my expertise but has also fueled my eagerness to continue learning and developing innovative solutions in the ever-evolving field of technology.`;

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
    technologies: [],
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
