import React from 'react'
import { Canvas } from '@react-three/fiber';
import { Scroll, Sky } from "@react-three/drei";
import { Island } from './Island';
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei";
import { isWebGLSupported } from '../checkWebGLSupport';
import { useEffect, useState } from 'react';
import CreditsList from './CreditsList';


const AboutPortfolio = ({darkMode}) => {
  const [webglSupported, setWebglSupported] = useState(true);
   useEffect(() => {
     console.log(isWebGLSupported(), "webgl");
     setWebglSupported(isWebGLSupported());
   }, []);
 
  return (
    <>
      {webglSupported ? (
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
                  <CreditsList />
                </Scroll>
                <Island />
              </ScrollControls>
            </PerspectiveCamera>
          </Canvas>
        </div>
      ) : (
        <CreditsList />
      )}
    </>
  );
}

export default AboutPortfolio