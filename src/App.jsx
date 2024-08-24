import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";
import Project4 from "./components/Project4";
import Project5 from "./components/Project5";
import Project6 from "./components/Project6";
import Project7 from "./components/Project7";
import Project8 from "./components/Project8";

const App = () => {
  return (
    <Router basename="/Portfolio-website">
      <div className="overflow-x-hidden text-neutral-300 antialised selection:bg-cyan-300 selection:text-cyan-900 ">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <div className="container mx-auto px-8">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Project1" element={<Project1 />}></Route>
            <Route path="/Project2" element={<Project2 />}></Route>
            <Route path="/Project3" element={<Project3 />}></Route>
            <Route path="/Project4" element={<Project4 />}></Route>
            <Route path="/Project5" element={<Project5 />}></Route>
            <Route path="/Project6" element={<Project6 />}></Route>
            <Route path="/Project7" element={<Project7 />}></Route>
            <Route path="/Project8" element={<Project8 />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
