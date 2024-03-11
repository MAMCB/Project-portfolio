import { Canvas } from "@react-three/fiber";

import Background from "./Background";




const CanvasComponent = () => {
  
  return (
    <div className="h-screen">
      <div className="mt-10 h-1/2">
        <Canvas>
          <Background />
        </Canvas>
      </div>

      <h1 className="mx-auto  text-center p-10 text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
        Loading...
      </h1>
    </div>
  );
};

export default CanvasComponent;
