import { Environment, OrbitControls,ScrollControls, Sky } from "@react-three/drei"
import { Canvas } from "@react-three/fiber";
import ExperienceUI from "./ExperienceUI";
import { Avatar } from "../Avatar";
import PortfolioModal from "./PortfolioModal";
import { useState } from "react";
import { Scene } from "./Scene";



const Experience = ({darkMode}) => {
   const [openModal, setOpenModal] = useState(false);
   const [modalPlacement, setModalPlacement] = useState("center");

   const handleClose = (value) => {
     setOpenModal(value);
   };
  return (
    <>
      <div className="App">
        <Canvas camera={{ position: [0, 2, 5], fov: 30 }}>
          {!darkMode ? (
            <Sky sunPosition={[1, 1, 1]} />
          ) : (
            <Sky sunPosition={[0, 0, 0]} />
          )}
          <directionalLight intensity={2} />
          <ambientLight intensity={1} />
          <OrbitControls />
          <ScrollControls pages={3}>
            <ExperienceUI handleClose={handleClose} />
          </ScrollControls>
          <group position-y={-1}>
            <Avatar />
            <mesh scale={[0.8, 0.5, 0.8]} position-y={0.2}>
              <boxGeometry />
              <meshStandardMaterial color="black" />
            </mesh>
            <Scene />
          </group>
        </Canvas>
        <PortfolioModal
          openModal={openModal}
          handleClose={handleClose}
          modalPlacement={modalPlacement}
        />
      </div>
    </>
  );
}

export default Experience