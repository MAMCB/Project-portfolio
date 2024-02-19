import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Nav from './components/Nav'
import Footer from './components/Footer'


import './App.css'

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<AboutMe />} />
      <Route path="projects" element={<Projects />} />
      <Route path="resume" element={<Resume />} />
    </Routes>
    <Nav />
      <h1>Hello Portfolio</h1>
    <Footer />
    </>
  )
}

export default App
