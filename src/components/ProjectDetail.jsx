import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import client from "../contentfulClient";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { AnimationOnScroll } from "react-animation-on-scroll";

const ProjectDetail = () => {
  const id = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    client.getEntry(id.id).then((response) => {
      console.log(response);
      setProject(response);
    });
  }, [id.id]);

  const getVideoUrl = () => {
    const videoUrl = project.fields.videoDemoEmbed;
    const urlArray = videoUrl.split("/");
    const videoId = urlArray[urlArray.length - 1];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="h-full p-8">
      {project && (
        <>
          <h1 className=" mx-auto text-center p-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white fadeIn ">
            {project.fields.name}
          </h1>

          {project.fields.videoDemoEmbed && (
            <div className="flex justify-center fadeIn">
              <iframe
                width="853"
                height="480"
                src={getVideoUrl()}
                title={project.fields.name}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          )}
         
            <p className="w-1/2 mx-auto mt-10 fadeIn">{project.fields.description}</p>
          
          <div>
            <div className="flex justify-center mt-8">
              {project.fields.deployedProjectLink && (
                
                  <Link
                    className="text-lg font-bold tracking-tight text-gray-900 dark:text-white mr-5 slideInLeft"
                    to={project.fields.deployedProjectLink}
                    target="_blank"
                  >
                    <Button>Live version</Button>
                  </Link>
               
              )}
             
                <Link
                  className="text-lg font-bold tracking-tight text-gray-900 dark:text-white ml-5 slideInLeft"
                  to={project.fields.githubRepoLink}
                  target="_blank"
                >
                  <Button>Github link</Button>
                </Link>
            
            </div>
            <AnimationOnScroll
              animateIn="fadeIn"
              animateOut="fadeOut"
              animateOnce="true"
            >
              <h2 className=" mx-auto text-center mt-20 mb-10 pb-2  text-lg font-bold tracking-tight text-gray-900 dark:text-white ">
                Technologies used
              </h2>
            </AnimationOnScroll>
            <ul className="flex flex-col md:flex-row md:flex-wrap justify-evenly">
              {project.fields.techStack.map((tech) => (
                <AnimationOnScroll
                  animateIn="slideInLeft"
                  animateOut="fadeOut"
                  animateOnce="true"
                >
                  <li
                    key={tech.fields.name}
                    className="background flex justify-evenly mt-4"
                  >
                    <h3>{tech.fields.name}</h3>
                    <img
                      className="h-10 ml-4"
                      src={tech.fields.logo.fields.file.url}
                      alt={tech.fields.name}
                    />
                  </li>
                </AnimationOnScroll>
              ))}
            </ul>
            {project.fields.contributors && (
              <AnimationOnScroll
                animateIn="fadeIn"
                animateOut="fadeOut"
                animateOnce="true"
              >
                <div className="flex justify-center mt-8">
                  <h5 className="mb-2 text-black dark:text-white">
                    Contributors:{" "}
                  </h5>
                  {documentToReactComponents(project.fields.contributors, {
                    renderNode: {
                      text: (text) => text,
                      paragraph: (node, children) => (
                        <p className="mb-2 ml-8 text-black dark:text-white">
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
                  })}
                </div>
              </AnimationOnScroll>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectDetail;
