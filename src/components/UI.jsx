import { Scroll } from '@react-three/drei'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Resume from "./Resume";
import NavBar from "./NavBar";
import MyFooter from "./MyFooter";
import ProjectDetail from "./ProjectDetail";
import Contacts from "./Contacts";
import AboutPortfolio from "./AboutPortfolio";
import { DarkThemeToggle, Flowbite } from "flowbite-react";

const UI = () => {
  return (
    <Scroll html>
      <div className='w-screen'>
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
          <MyFooter />
        </Flowbite>
      </div>
    </Scroll>
  );
}

export default UI