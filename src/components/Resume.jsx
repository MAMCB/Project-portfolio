import React from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useState, useEffect } from "react";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import client from "../contentfulClient";

const Resume = () => {
  const [resume, setResume] = useState(null);

  useEffect(() => {
    client.getEntry("21zCepn2tjATuOEhueihGV").then((response) => {
      console.log(response.fields);
      setResume(response.fields);
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
          This is{" "}
          <span className="font-medium text-gray-800 dark:text-white">
            Settings tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </Tabs.Item>
        <Tabs.Item title="Skills" icon={HiClipboardList}>
          {resume && (
            <div className="md:w-1/2 mx-auto md:flex">
              <div className="background">
                <h3 className=" mx-auto text-center mt-20 mb-10 pb-2  text-lg font-bold tracking-tight text-gray-900 dark:text-white ">
                  Technical Skills
                </h3>
                <ul className=" mx-auto flex flex-col justify-center p-8 text-center">
                  {resume.technicalSkills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                  
                </ul>
              </div>
              <div className="background">
                <h3 className=" mx-auto text-center mt-20 mb-10 pb-2  text-lg font-bold tracking-tight text-gray-900 dark:text-white ">
                  Personal Strengths
                </h3>
                <ul className=" mx-auto flex flex-col justify-center p-8 text-center">
                  {resume.personalStrengths.map((strength) => (
                    <li key={strength}>{strength}</li>
                  ))}
                </ul>
              </div>
              <div className="background">
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
        <Tabs.Item disabled title="Disabled">
          Disabled content
        </Tabs.Item>
      </Tabs>
    </div>
  );
}

export default Resume