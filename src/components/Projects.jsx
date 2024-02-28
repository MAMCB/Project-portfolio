import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import client from '../contentfulClient'
import ProjectsCard from './ProjectsCard'
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { Carousel } from 'flowbite-react';
import { Label, Select } from "flowbite-react";


const Projects = () => {

  const [webProjects, setWebProjects] = useState([])
  const [gameProjects, setGameProjects] = useState([])
  const [webProjectsToShow, setWebProjectsToShow] = useState([])
  const [gameProjectsToShow, setGameProjectsToShow] = useState([])
  const [documents, setDocuments] = useState([])
  const [programmingLanguages, setProgrammingLanguages] = useState([])

  useEffect(() => {
    client.getEntries().then((response) => {
      console.log(response)
      setWebProjects(response.items.filter(item => item.sys.contentType.sys.id === 'webDevProject'));
      setDocuments(response.items.filter(item => item.sys.contentType.sys.id === 'article'));
      setGameProjects(response.items.filter(item => item.sys.contentType.sys.id === 'gameDevProject'));
      setProgrammingLanguages(response.items.filter(item => item.sys.contentType.sys.id === 'programmingLanguages'));
    });
  }, [])

  useEffect(() => {
    setWebProjectsToShow(webProjects)
  }, [webProjects])

  useEffect(() => {
    setGameProjectsToShow(gameProjects)
  }, [gameProjects])

  const setFilter = (e) => {
    if (e.target.value === "all") {
      setWebProjectsToShow(webProjects);}
    else if (e.target.value === "fullstack") {
      setWebProjectsToShow(webProjects.filter(project => project.fields.fullstack === true));}
    else {
      setWebProjectsToShow(webProjects.filter(project => project.fields.techStack.find((programmingLanguage)=>programmingLanguage.fields.name.toLowerCase() === e.target.value.toLowerCase())));
    }
  }
 
  return (
    <div className="p-10 md:p-4">
      <h1 className=" mx-auto text-center p-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
        My projects
      </h1>
      <Tabs aria-label="Default tabs" style="default">
        <Tabs.Item active title="Web Applications" icon={HiUserCircle}>
          <div className="max-w-md mx-auto mb-4">
            <div className="mb-2 block">
              <Label htmlFor="webFilter" value="Filter projects" />
            </div>
            <Select id="webFilter" onChange={setFilter}>
              <option value={"all"}>All</option>
              <option value={"fullstack"}>Fullstack</option>
              {programmingLanguages.map((language) => (
                <option value={language.fields.name} key={language.sys.id}>
                  {language.fields.name}
                </option>
              ))}
            </Select>
          </div>
          <div>
            {webProjectsToShow.length > 0 ? (
              <Carousel
                className="bg-gray-400 dark:bg-gray-600 "
                slide={true}
                controls={true}
                indicators={true}
              >
                {webProjectsToShow.map((project) => (
                  <ProjectsCard key={project.sys.id} project={project} />
                ))}
              </Carousel>
            ) : (
              <p className="mb-2 mx-auto p-10 text-black dark:text-white">
                No project found with that technology
              </p>
            )}
          </div>
        </Tabs.Item>
        <Tabs.Item title="Games" icon={MdDashboard}>
          <div className="flex justify-center">
            <iframe
              width="853"
              height="480"
              src="https://www.youtube.com/embed/WwgKwg2hdNA"
              title="Ongoing game projects"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
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