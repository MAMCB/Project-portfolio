import { OrbitControls,ScrollControls } from "@react-three/drei"
import { Island } from "./Island"
import UI from "./UI";
import { PerspectiveCamera } from "@react-three/drei";
import LogCameraPosition from "./LogCameraPosition";



const Experience = () => {
  return (
    <>_
      <PerspectiveCamera
        position={[1.4233913844722013, -5.7173277105425128, -6.288373349251435]} // Set the initial position of the camera
        rotation={[3.0894158228185757,-0.8048316906356017,3.1039716789266847]} // Set the initial rotation of the camera
        fov={75}
        aspect={window.innerWidth / window.innerHeight}
        near={0.1}
        far={100}
      >
        <ambientLight intensity={4} />
        <OrbitControls enableZoom={false} />
        <ScrollControls pages={3}>
          <Island />
          <UI />
        </ScrollControls>
        <LogCameraPosition />
      </PerspectiveCamera>
    </>
  );
}

export default Experience