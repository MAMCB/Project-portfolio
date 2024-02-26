import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import NavBar from "./components/NavBar";
import MyFooter from "./components/MyFooter";
import ProjectDetail from "./components/ProjectDetail";
import Contacts from "./components/Contacts";
import AboutPortfolio from "./components/AboutPortfolio";
import CanvasComponent from "./components/CanvasComponent";
import { DarkThemeToggle, Flowbite } from "flowbite-react";

import "./App.css";

function App() {
  return (
    <>
      <Flowbite>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CanvasComponent />} />
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
    </>
  );
}

export default App;
