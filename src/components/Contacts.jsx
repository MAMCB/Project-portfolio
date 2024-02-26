import React from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useState, useEffect } from "react";
import client from "../contentfulClient";
import github from "../../public/github-mark.png";
import linkedin from "../../public/LI-In-Bug.png";
import githubWhite from "../../public/github-mark-white.png";
import { Link } from 'react-router-dom';

const Contacts = () => {
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
        Contact me
      </h1>
      <div className="md:w-1/2 mx-auto flex flex-col justify-center p-8">
        {" "}
        {resume && documentToReactComponents(resume.contact)}
        {resume && (
          <div className="flex justify-evenly mb-8">
            <Link to={resume.githubLink} target="_blank">
              <img className="w-16 dark:bg-white rounded-full " src={github} alt="github logo" />
            </Link>
            <Link to={resume.linkedinLink} target="_blank">
              <img className="w-20" src={linkedin} alt="linkedin logo" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contacts