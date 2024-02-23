import React from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useState, useEffect } from "react";
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
                <p className="mt-2 text-gray-900 dark:text-white">{children}</p>
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
                <p className="mt-2 text-gray-900 dark:text-white">{children}</p>
              ),
            },
          })}
        </div>
      )}
    </div>
  );
}

export default Resume