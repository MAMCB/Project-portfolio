import React from 'react'
import { Button } from 'flowbite-react';
import PortfolioModal from './PortfolioModal';
import { Scroll} from "@react-three/drei";
import { useState } from 'react';


const ExperienceUI = ({handleClose}) => {
    
  return (
    <Scroll html>
      <div className=" p-5  ">
        <h1 className="text-2xl md:text-6xl md:mr-96  font-bold ml-10 dark:text-white slideInLeft">
          I'm Miguel a Software Developer
        </h1>

        <h2 className="text-xl md:text-4xl mt-8 md:mr-96  font-bold ml-10 dark:text-white slideInLeft">
          Come explore my coding adventures!
        </h2>
        <Button
          size="text-2xl"
          className="w-40 h-12  mt-10 ml-10 md:w-80 md:h-24 md:self-center slideInLeft"
          onClick={() => handleClose(true)}
        >
          Ready to explore!
        </Button>

       
      </div>
    </Scroll>
  );
}

export default ExperienceUI