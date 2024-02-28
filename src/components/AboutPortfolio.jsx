import React from 'react'
import { Canvas } from '@react-three/fiber';
import { Scroll } from "@react-three/drei";
import { Island } from './Island';
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei";


const AboutPortfolio = () => {
 
  return (
    <div className='h-screen'>
      <Canvas>
        <PerspectiveCamera position={[0, -5, -3]}>
          <ambientLight intensity={0.5} />
          <directionalLight color="orange" position={[0, 0, 5]} intensity={5} />
          <OrbitControls enableZoom={true} />
          <ScrollControls pages={3}>
            <Scroll html>
              <div className="h-screen md:w-1/2 mx-auto">
                <h1 className=" mx-auto text-center p-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
                  About this portfolio
                </h1>
                <p className="m-4 text-gray-900 dark:text-white">
                  This portfolio was created using React, Tailwind CSS and
                  Contentful as a headless CMS.
                </p>
                <p className="m-4 text-gray-900 dark:text-white">
                  The landing page and this page animations were made using the
                  React-three-fiber library with Three.js
                </p>
              </div>
            </Scroll>
            <Island />
          </ScrollControls>
        </PerspectiveCamera>
      </Canvas>
    </div>
  );
}

export default AboutPortfolio