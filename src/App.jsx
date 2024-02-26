import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import NavBar from "./components/NavBar";
import MyFooter from "./components/MyFooter";
import ProjectDetail from "./components/ProjectDetail";
import Contacts from "./components/Contacts";
import AboutPortfolio from "./components/AboutPortfolio";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";

import "./App.css";


function App() {
  return (
    <>
      <Flowbite>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about-portfolio" element={<AboutPortfolio />} />
          </Routes>
        </BrowserRouter>
        <div className="App">
          <Canvas>
            <Experience />
           
          </Canvas>
        </div>

        <MyFooter />
      </Flowbite>
    </>
  );
}

export default App;
