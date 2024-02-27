import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useState, useEffect } from "react";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import client from "../contentfulClient";
import { Button, Card, Carousel } from "flowbite-react";

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
    <div>
      <h1 className=" mx-auto text-center p-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
        My CV
      </h1>
      <Tabs aria-label="Default tabs" style="default">
        <Tabs.Item active title="CV" icon={HiUserCircle}>
          {resume && (
            <div className="md:w-1/2 mx-auto">
              <h2 className=" mx-auto text-center p-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white ">
                {resume.name}
              </h2>
              <h3 className=" mx-auto text-center pb-2  text-lg font-bold tracking-tight text-gray-900 dark:text-white ">
                {resume.jobTitle}
              </h3>

              <p className="mb-5 ml-4">{resume.aboutMe}</p>

              <h3 className=" mx-auto text-center pb-2 mt-20 mb-10  text-lg font-bold tracking-tight text-gray-900 dark:text-white ">
                Education
              </h3>
              {documentToReactComponents(resume.education, {
                renderNode: {
                  text: (text) => text,
                  paragraph: (node, children) => (
                    <p className="mt-2 text-gray-900 dark:text-white">
                      {children}
                    </p>
                  ),
                },
              })}
              <h3 className=" mx-auto text-center mt-20 mb-10 pb-2  text-lg font-bold tracking-tight text-gray-900 dark:text-white ">
                Work Experience
              </h3>
              {documentToReactComponents(resume.workExperience, {
                renderNode: {
                  text: (text) => text,
                  paragraph: (node, children) => (
                    <p className="mt-2 text-gray-900 dark:text-white">
                      {children}
                    </p>
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
                    <Button>Download CV</Button>
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
                      <Button>Download certificate</Button>
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
                <h3 className=" mx-auto text-center mt-20 mb-10 pb-2  text-lg font-bold tracking-tight text-gray-900 dark:text-white ">
                  Technical Skills
                </h3>
                <ul className=" mx-auto flex flex-col justify-center p-8 text-center">
                  {resume.skillsLogo.map((skill) => (
                    <li key={skill.fields.name} className="m-4 background">
                      <div className="flex justify-evenly">
                        <h2 className="mr-4">{skill.fields.name}</h2>
                        <img
                          src={skill.fields.logo.fields.file.url}
                          alt={skill.fields.name}
                          className="w-10 h-10"
                        />
                      </div>
                    </li>
                  ))}

                  {resume.technicalSkills.map((skill) => (
                    <li key={skill} className="background m-4">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className=" mx-auto text-center mt-20 mb-10 pb-2  text-lg font-bold tracking-tight text-gray-900 dark:text-white ">
                  Personal Strengths
                </h3>
                <ul className=" mx-auto flex flex-col justify-center p-8 text-center">
                  {resume.personalStrengths.map((strength) => (
                    <li key={strength} className="background m-4">
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className=" mx-auto text-center mt-20 mb-10 pb-2  text-lg font-bold tracking-tight text-gray-900 dark:text-white ">
                  Languages
                </h3>
                <div className=" mx-auto flex flex-col justify-center p-8">
                  {documentToReactComponents(resume.languages)}
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
