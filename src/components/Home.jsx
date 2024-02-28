import React from 'react'
import { Scroll } from "@react-three/drei";

const Home = () => {
  return (
    <Scroll html>
      <div className="  pt-10 pr-40   md:h-screen ">
        <h1 className="text-2xl md:text-6xl md:mr-96  font-bold ml-10 dark:text-white slideInLeft">
          Welcome to my portfolio
        </h1>
        <h2 className="text-xl md:text-4xl mt-8 md:mr-96  font-bold ml-10 dark:text-white slideInLeft">
          I'm Miguel a Software Developer and I'm eager to show you my work!
        </h2>
      </div>
    </Scroll>
  );
}

export default Home