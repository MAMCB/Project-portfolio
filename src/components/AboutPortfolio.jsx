import React from 'react'

const AboutPortfolio = () => {
  return (
    <div className="h-screen md:w-1/2 mx-auto">
      <h1 className=" mx-auto text-center p-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
        About this portfolio
      </h1>
      <p className="m-4 text-gray-900 dark:text-white">
        This portfolio was created using React, Tailwind CSS and Contentful as a
        headless CMS.
      </p>
      <p className="m-4 text-gray-900 dark:text-white">
        The landing page animation was made using the React-three-fiber library
        with Three.js
      </p>
    </div>
  );
}

export default AboutPortfolio