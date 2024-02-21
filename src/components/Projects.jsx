import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import client from '../contentfulClient'
import ProjectsCard from './ProjectsCard'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [documents, setDocuments] = useState([])

  useEffect(() => {
    client.getEntries().then((response) => {
      console.log(response)
      setProjects(response.items.filter(item => item.sys.contentType.sys.id === 'webDevProject'));
      setDocuments(response.items.filter(item => item.sys.contentType.sys.id === 'article'));
    });
  }, [])
 
  return (
    <div>
      <h1>My projects</h1>
      <div className=' md:flex md:justify-evenly'>
        {projects.length > 0 ? (projects.map((project) => (<ProjectsCard key={project.sys.id} project={project} />))) : <p>Loading...</p>}
      </div>
    </div>
  )
}

export default Projects