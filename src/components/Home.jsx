import React from 'react'
import { Scroll } from "@react-three/drei";

const Home = () => {
  return (
    <Scroll html>
      <div className=" p-10   md:h-screen ">
        <h1 className="text-6xl md:ml-96  font-bold ml-10 dark:text-white">
          Welcome to my portfolio
        </h1>
      </div>
    </Scroll>
  );
}

export default Home