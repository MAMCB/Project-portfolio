import React from 'react'
import { useProgress } from '@react-three/drei'
import { Button } from 'flowbite-react';
import { Html } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Banner from "../../public/Banner.png"
import { Spinner } from "flowbite-react";

const Loading = ({handleClose}) => {
    const { active, progress, errors, item, loaded, total } = useProgress();
  return (
    <Canvas>
      <Html center className='text-center'>
        <img src={Banner} alt="Personal banner" className="mb-4 fadeIn" />
        <h1
          className="text-lg mb-4
          slideInLeft"
        >
          Welcome to Miguel's portfolio!
        </h1>
        <h2 className="text-md mb-4 slideInLeft">
          A great experience will start soon, just need to wait a few seconds..
        </h2>
        <p className="text-md mb-4 slideInLeft">Trust me is worth it!</p>
        <Spinner aria-label="Extra large spinner example" size="xl" className='fadeIn' />
        <p className="text-md mb-4 slideInLeft">
          {Math.round(progress * 10) / 10} % loaded
        </p>
        <Button
          size="text-2xl"
          className="w-40 h-12  mt-10 ml-10 md:w-80 md:h-24 md:self-center slideInLeft"
          onClick={() => handleClose(true)}
        >
          I don't want to wait
        </Button>
      </Html>
    </Canvas>
  );
}

export default Loading