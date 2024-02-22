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
        <div className='md:w-1/2 mx-auto'>
          <h2>{resume.name}</h2>
          <h3>{resume.jobTitle}</h3>
          <p>{resume.aboutMe}</p>
          {documentToReactComponents(resume.contact)}
          {documentToReactComponents(resume.education)}
          {documentToReactComponents(resume.workExperience)}
        </div>
      )}
    </div>
  );
}

export default Resume