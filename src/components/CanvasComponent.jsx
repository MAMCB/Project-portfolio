import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import Background from "./Background";

const CanvasComponent = () => {
  return (
    <div className="App">
      <Canvas>
        <Background />
      </Canvas>
    </div>
  );
};

export default CanvasComponent;
