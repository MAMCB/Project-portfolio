import React from 'react'
import { Button } from 'flowbite-react';
import PortfolioModal from './PortfolioModal';
import { Scroll} from "@react-three/drei";
import { useState } from 'react';


const ExperienceUI = ({handleClose}) => {
  const [open, setOpen] = useState(true);
  const handleWindow = () => {
    setOpen(!open);
  };
    
  return (
    <Scroll html>
      {open && <div className=" p-2 background ">
        <h1 className="text-2xl md:text-4xl   font-bold ml-10 dark:text-white slideInLeft">
          I'm Miguel a Software Developer
        </h1>

        <h2 className="text-xl md:text-2xl mt-8   font-bold ml-10 dark:text-white slideInLeft">
          Come explore my coding adventures!
        </h2>
        <Button
          size="text-2xl"
          className="w-40 h-12  mt-10 ml-10 md:w-60 md:h-18 md:self-center slideInLeft"
          onClick={() => handleClose(true)}
        >
          Ready to explore!
        </Button>

       
      </div>}
      <Button className={open && "ml-2"} color="gray"  outline onClick={handleWindow}>{open?"Close":"Open"}</Button>
    </Scroll>
  );
}

export default ExperienceUI