import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import Background from "./Background";
import Home from "./Home";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

const CanvasComponent = () => {
  return (
    <div className="App">
      <Home />
      <div className="flex flex-col md:flex-row  ">
        <Link to="/projects" className=" mx-auto mt-8 md:mt-0 md:self-center slideInLeft">
          <Button size="text-2xl" className="w-40 h-12 md:w-80 md:h-24">My projects</Button>
        </Link>

        <div className="canvas  ">
          <Canvas>
            <Background />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default CanvasComponent;
