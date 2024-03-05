import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import client from '../contentfulClient'
import ProjectsCard from './ProjectsCard'
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { Carousel,Card,Button } from 'flowbite-react';
import { Label, Select } from "flowbite-react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";


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

  const setGameFilter = (e) => {
    if (e.target.value === "all") {
      setGameProjectsToShow(gameProjects);
    } else if (e.target.value === "multiplayer") {
      setGameProjectsToShow(
        gameProjects.filter((project) => project.fields.multiplayer === true)
      );
    } else {
      setGameProjectsToShow(
        gameProjects.filter((project) =>
          project.fields.techStack.find(
            (programmingLanguage) =>
              programmingLanguage.fields.name.toLowerCase() ===
              e.target.value.toLowerCase()
          )
        )
      );
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
                className="bg-gray-400 dark:bg-gray-600 project-carousel "
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
          <div className="max-w-md mx-auto mb-4">
            <div className="mb-2 block">
              <Label htmlFor="gameFilter" value="Filter projects" />
            </div>
            <Select id="gameFilter" onChange={setGameFilter}>
              <option value={"all"}>All</option>
              <option value={"multiplayer"}>Multiplayer</option>
              {programmingLanguages.map((language) => (
                <option value={language.fields.name} key={language.sys.id}>
                  {language.fields.name}
                </option>
              ))}
            </Select>
          </div>
          <div>
            {gameProjectsToShow.length > 0 ? (
              <Carousel
                className="bg-gray-400 dark:bg-gray-600 project-carousel "
                slide={true}
                controls={true}
                indicators={true}
              >
                {gameProjectsToShow.map((project) => (
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
        <Tabs.Item title="Articles" icon={HiAdjustments}>
          <div>
            {documents.length > 0 ? (
              documents
                .filter((document) => document.fields.portfolioArticle === true)
                .map((document) => (
                  <Carousel
                    className="bg-gray-400 dark:bg-gray-600 article-carousel"
                    slide={true}
                    controls={true}
                    indicators={true}
                  >
                    <Card
                      className="w-2/3 max-w-xl mx-auto mt-10 fadeIn"
                      key={document.sys.id}
                    >
                      <img
                        src={document.fields.thumbnail.fields.file.url}
                        alt={document.fields.name}
                        className="w-1/2 mx-auto rounded-lg"
                      />
                      <h2 className="mx-auto">{document.fields.name}</h2>{" "}
                      {documentToReactComponents(
                        document.fields.richDescription,
                        {
                          renderNode: {
                            text: (text) => text,
                            paragraph: (node, children) => (
                              <p className=" w-2/3 md:1/2 mx-auto text-center   fadeIn">
                                {children}
                              </p>
                            ),
                            "embedded-entry-inline": (node) => {
                              const { data } = node;
                              const { target, title } = data.target.fields;
                              return (
                                <div>
                                  <a
                                    href={target}
                                    title={title}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {title}
                                  </a>
                                </div>
                              );
                            },
                            // Add the 'a' tag renderer to handle links
                            hyperlink: (node, children) => {
                              const { data } = node;
                              const { uri } = data;
                              return (
                                <a
                                  href={uri}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {children}
                                </a>
                              );
                            },
                          },
                        }
                      )}
                      <a
                        className="mx-auto"
                        href={document.fields.pdf.fields.file.url}
                        target="_blank"
                        download
                      >
                        <Button>Open article</Button>
                      </a>
                    </Card>
                  </Carousel>
                ))
            ) : (
              <p className="mb-2 mx-auto p-10 text-black dark:text-white">
                No articles found
              </p>
            )}
          </div>
        </Tabs.Item>
      </Tabs>
    </div>
  );
}

export default Projects