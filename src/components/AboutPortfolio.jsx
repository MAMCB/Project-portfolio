import React from 'react'
import { Canvas } from '@react-three/fiber';
import { Scroll, Sky } from "@react-three/drei";
import { Island } from './Island';
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei";


const AboutPortfolio = ({darkMode}) => {
 
  return (
    <div className="h-screen">
      <Canvas>
        <PerspectiveCamera position={[0, -5, -3]}>
          {!darkMode ? (
            <Sky sunPosition={[1, 0, 0]} />
          ) : (
            <Sky sunPosition={[0, 0, 0]} />
          )}
          <ambientLight intensity={1.5} />
          <directionalLight
            color="orange"
            position={[0, 0, 5]}
            intensity={20}
          />
          <OrbitControls enableZoom={true} />
          <ScrollControls pages={3}>
            <Scroll html>
              <div className="h-screen md:w-1/2 mx-auto flex flex-col md:flex-row ">
                <div className='w-2/3 md:mr-24'>
                  {" "}
                  <h1 className=" mx-auto text-center p-10 text-2xl font-bold tracking-tight text-gray-900 text-white ">
                    About this portfolio
                  </h1>
                  <p className="m-4 text-gray-900 text-white">
                    This portfolio was created using React, Tailwind CSS and
                    Contentful as a headless CMS.
                  </p>
                  <p className="m-4 text-gray-900 text-white">
                    The landing page and this page animations were made using
                    the React-three-fiber library with Three.js
                  </p>
                </div>
                <div>
                  <h2 className=" mx-auto text-center p-10 text-xl font-bold tracking-tight text-gray-900 text-white ">
                    Credits:
                  </h2>
                  <ul>
                    <li>
                      <p className="m-4 text-gray-900 text-white">
                        The Office Pack by dook{" "}
                        <a href="https://creativecommons.org/licenses/by/3.0/">
                          [CC-BY]
                        </a>{" "}
                        via Poly Pizza
                      </p>
                    </li>
                    <li>
                      <p className="m-4 text-gray-900 text-white">
                        Laptop / MacBook Pro by Alex Safayan{" "}
                        <a href="https://creativecommons.org/licenses/by/3.0/">
                          [CC-BY]
                        </a>{" "}
                        via Poly Pizza
                      </p>
                    </li>
                    <li>
                      <p className="m-4 text-gray-900 text-white">
                        Bike by Zsky{" "}
                        <a href="https://creativecommons.org/licenses/by/3.0/">
                          [CC-BY]
                        </a>{" "}
                        via Poly Pizza
                      </p>
                    </li>
                    <li>
                      <p className="m-4 text-gray-900 text-white">
                        Backpack by Quaternius
                      </p>
                    </li>
                    <li>
                      <p className="m-4 text-gray-900 text-white">
                        Mountain Group by Quaternius
                      </p>
                    </li>
                    <li>
                      <p className="m-4 text-gray-900 text-white">
                        Big Tree by 3Donimus{" "}
                        <a href="https://creativecommons.org/licenses/by/3.0/">
                          [CC-BY]
                        </a>{" "}
                        via Poly Pizza
                      </p>
                    </li>
                    <li>
                      <p className="m-4 text-gray-900 text-white">
                        Pine Trees by Quaternius
                      </p>
                    </li>
                  </ul>
                </div>
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