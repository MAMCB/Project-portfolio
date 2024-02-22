import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { useState,useEffect } from 'react'
import client from "../contentfulClient";

const AboutMe = () => {
  const [aboutMe, setAboutMe] = useState(null)

  useEffect(() => {
    client.getEntry("71siIytmGStSA74l91MqgO").then((response) => {
      console.log(response.fields)
      setAboutMe(response.fields)
    })
  }, [])
 return (
   <div>
     {aboutMe && (
       <div className="h-vh">
         <img src={aboutMe.pdf.fields.file.url} alt="personal banner" />
         <h1 className=" mx-auto text-center p-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
           About me
         </h1>
         <div className="md:w-1/2 mx-auto">
           {documentToReactComponents(aboutMe.richDescription, {
             renderNode: {
               text: (text) => text,
               paragraph: (node, children) => (
                 <p className="m-4 text-gray-900 dark:text-white">{children}</p>
               ),
             },
           })}
         </div>
       </div>
     )}
   </div>
 );
}

export default AboutMe