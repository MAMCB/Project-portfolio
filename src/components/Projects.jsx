import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import client from '../contentfulClient'
import ProjectsCard from './ProjectsCard'
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";


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
      <h1 className=" mx-auto text-center p-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
        My projects
      </h1>
      <Tabs aria-label="Default tabs" style="default">
        <Tabs.Item active title="Web Applications" icon={HiUserCircle}>
          <div className=" md:flex md:justify-evenly">
            {projects.length > 0 ? (
              projects.map((project) => (
                <ProjectsCard key={project.sys.id} project={project} />
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </Tabs.Item>
        <Tabs.Item title="Games" icon={MdDashboard}>
          This is{" "}
          <span className="font-medium text-gray-800 dark:text-white">
            Dashboard tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </Tabs.Item>
        <Tabs.Item title="Articles" icon={HiAdjustments}>
          This is{" "}
          <span className="font-medium text-gray-800 dark:text-white">
            Settings tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </Tabs.Item>
        <Tabs.Item title="Contacts" icon={HiClipboardList}>
          This is{" "}
          <span className="font-medium text-gray-800 dark:text-white">
            Contacts tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </Tabs.Item>
        <Tabs.Item disabled title="Disabled">
          Disabled content
        </Tabs.Item>
      </Tabs>
    </div>
  );
}

export default Projects