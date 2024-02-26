import { OrbitControls,ScrollControls } from "@react-three/drei"
import { Island } from "./Island"
import UI from "./UI";



const Experience = () => {
  return (
    <>
      <ambientLight intensity={4} />
      <OrbitControls />
      <ScrollControls>
        <Island />
        <UI />
      </ScrollControls>
    </>
  );
}

export default Experience