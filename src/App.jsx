import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Resume from './components/Resume'
import NavBar from './components/NavBar'
import MyFooter from './components/MyFooter'
import { DarkThemeToggle, Flowbite } from "flowbite-react";


import './App.css'

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
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
      
      
      <MyFooter />
    </Flowbite>

    </>
  );
}

export default App
