import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useState, useEffect } from "react";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import client from "../contentfulClient";
import { Button, Card, Carousel } from "flowbite-react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Resume = () => {
  const [resume, setResume] = useState(null);
  const [cv, setCv] = useState(null);
  const [certifications, setCertifications] = useState([]);
  const [onlineCourses, setOnlineCourses] = useState([]);

  useEffect(() => {
    client
      .getEntry("21zCepn2tjATuOEhueihGV")
      .then((response) => {
        console.log(response.fields);
        setResume(response.fields);
      })
      .then(() => {
        client.getEntry("22uoF9GYJyzovkVF90EYWN").then((response) => {
          console.log(response.fields);
          setCv(response.fields);
        });
      })
      .then(() => {
        client.getEntries().then((response) => {
          setCertifications(
            response.items.filter(
              (item) => item.sys.contentType.sys.id === "certifications"
            )
          );
        });
      });
  }, []);
  return (
    <div className="p-10 md:p-4">
      <h1 className=" mx-auto text-center p-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
        My CV
      </h1>
      <Tabs aria-label="Default tabs" style="default">
        <Tabs.Item active title="CV" icon={HiUserCircle}>
          {resume && (
            <div className="md:w-1/2 mx-auto">
              <h2 className=" mx-auto text-center p-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white fadeIn ">
                {resume.name}
              </h2>
              <h3 className=" mx-auto text-center pb-2  text-lg font-bold tracking-tight text-gray-900 dark:text-white fadeIn ">
                {resume.jobTitle}
              </h3>

              <p className="mb-5 ml-4 fadeIn">{resume.aboutMe}</p>
              <AnimationOnScroll
                animateIn="fadeIn"
                animateOut="fadeOut"
                animateOnce="true"
              >
                <h3 className=" mx-auto text-center pb-2 mt-20 mb-10  text-lg font-bold tracking-tight text-gray-900 dark:text-white ">
                  Education
                </h3>
              </AnimationOnScroll>
              {documentToReactComponents(resume.education, {
                renderNode: {
                  text: (text) => text,
                  paragraph: (node, children) => (
                    <AnimationOnScroll
                      animateIn="fadeIn"
                      animateOut="fadeOut"
                      animateOnce="true"
                    >
                      <p className="mt-2 text-gray-900 dark:text-white">
                        {children}
                      </p>
                    </AnimationOnScroll>
                  ),
                },
              })}
              <AnimationOnScroll
                animateIn="fadeIn"
                animateOut="fadeOut"
                animateOnce="true"
              >
                <h3 className=" mx-auto text-center mt-20 mb-10 pb-2  text-lg font-bold tracking-tight text-gray-900 dark:text-white ">
                  Work Experience
                </h3>
              </AnimationOnScroll>
              {documentToReactComponents(resume.workExperience, {
                renderNode: {
                  text: (text) => text,
                  paragraph: (node, children) => (
                    <AnimationOnScroll
                      animateIn="fadeIn"
                      animateOut="fadeOut"
                      animateOnce="true"
                    >
                      <p className="mt-2 text-gray-900 dark:text-white">
                        {children}
                      </p>
                    </AnimationOnScroll>
                  ),
                },
              })}
            </div>
          )}
        </Tabs.Item>
        <Tabs.Item title="Online courses" icon={MdDashboard}>
          This is{" "}
          <span className="font-medium text-gray-800 dark:text-white">
            Dashboard tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </Tabs.Item>
        <Tabs.Item title="Certifications" icon={HiAdjustments}>
          <div className="carousel-container">
            {certifications.length > 0 && cv && (
              <Carousel
                slide={false}
                controls={true}
                indicators={true}
                className="bg-gray-400 dark:bg-gray-600"
              >
                <Card
                  className="w-1/2  md:max-w-sm"
                  imgAlt="Meaningful alt text for an image that is not purely decorative"
                  imgSrc={cv.thumbnail.fields.file.url}
                >
                  <a href={cv.pdf.fields.file.url} target="_blank" download>
                    <Button>Open CV</Button>
                  </a>
                </Card>

                {certifications.map((certification) => (
                  <Card
                    key={certification.sys.id}
                    className="w-1/2  md:max-w-sm"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc={certification.fields.thumbnail.fields.file.url}
                  >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {certification.fields.name}
                    </h5>
                    <a
                      href={certification.fields.pdf.fields.file.url}
                      target="_blank"
                      download
                    >
                      <Button>Open certificate</Button>
                    </a>
                  </Card>
                ))}
              </Carousel>
            )}
          </div>
        </Tabs.Item>
        <Tabs.Item title="Skills" icon={HiClipboardList}>
          {resume && (
            <div className="md:w-1/2 mx-auto md:flex">
              <div>
                <AnimationOnScroll
                  animateIn="slideInLeft"
                  animateOut="fadeOut"
                  animateOnce="true"
                >
                  <h3 className=" mx-auto text-center mt-20 mb-10 pb-2  text-lg font-bold tracking-tight text-gray-900 dark:text-white ">
                    Technical Skills
                  </h3>
                </AnimationOnScroll>
                <ul className=" mx-auto flex flex-col justify-center p-8 text-center">
                  {resume.skillsLogo.map((skill) => (
                    <AnimationOnScroll
                      animateIn="slideInLeft"
                      animateOut="fadeOut"
                      animateOnce="true"
                    >
                      <li
                        key={skill.fields.name}
                        className="m-4 background w-64"
                      >
                        <div className="flex justify-evenly">
                          <h2 className="mr-4">{skill.fields.name}</h2>
                          <img
                            src={skill.fields.logo.fields.file.url}
                            alt={skill.fields.name}
                            className=" h-10"
                          />
                        </div>
                      </li>
                    </AnimationOnScroll>
                  ))}

                  {resume.technicalSkills.map((skill) => (
                    <AnimationOnScroll
                      animateIn="slideInLeft"
                      animateOut="fadeOut"
                      animateOnce="true"
                    >
                      <li key={skill} className="background m-4">
                        {skill}
                      </li>
                    </AnimationOnScroll>
                  ))}
                </ul>
              </div>
              <div>
                <AnimationOnScroll
                  animateIn="slideInLeft"
                  animateOut="fadeOut"
                  animateOnce="true"
                >
                  <h3 className=" mx-auto text-center mt-20 mb-10 pb-2  text-lg font-bold tracking-tight text-gray-900 dark:text-white ">
                    Personal Strengths
                  </h3>
                </AnimationOnScroll>
                <ul className=" mx-auto flex flex-col justify-center p-8 text-center">
                  {resume.personalStrengths.map((strength) => (
                    <AnimationOnScroll
                      animateIn="slideInLeft"
                      animateOut="fadeOut"
                      animateOnce="true"
                    >
                      <li key={strength} className="background m-4">
                        {strength}
                      </li>
                    </AnimationOnScroll>
                  ))}
                </ul>
              </div>
              <div>
                <AnimationOnScroll
                  animateIn="slideInLeft"
                  animateOut="fadeOut"
                  animateOnce="true"
                >
                  <h3 className=" mx-auto text-center mt-20 mb-10 pb-2  text-lg font-bold tracking-tight text-gray-900 dark:text-white ">
                    Languages
                  </h3>
                </AnimationOnScroll>
                <div className=" mx-auto flex flex-col justify-center p-8">
                  {documentToReactComponents(resume.languages, {
                    renderNode: {
                      text: (text) => text,
                      paragraph: (node, children) => (
                        <AnimationOnScroll
                          animateIn="fadeIn"
                          animateOut="fadeOut"
                          animateOnce="true"
                        >
                          <p className="m-4 text-gray-900 dark:text-white">
                            {children}
                          </p>{" "}
                        </AnimationOnScroll>
                      ),
                    },
                  })}
                </div>
              </div>
            </div>
          )}
        </Tabs.Item>
      </Tabs>
    </div>
  );
};

export default Resume;
