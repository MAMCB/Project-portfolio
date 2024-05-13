import { Environment, OrbitControls,ScrollControls, Sky } from "@react-three/drei"
import { Canvas } from "@react-three/fiber";
import ExperienceUI from "./ExperienceUI";
import { Avatar } from "../Avatar";
import PortfolioModal from "./PortfolioModal";
import { useState,useEffect } from "react";
import { Scene } from "./Scene";
import { Chair } from "./Chair";
import { Suspense } from "react";
import Loading from "./Loading";
import {isWebGLSupported} from "../checkWebGLSupport.js";



const Experience = ({darkMode}) => {
   const [openModal, setOpenModal] = useState(false);
   const [modalPlacement, setModalPlacement] = useState("center");
   const [webglSupported, setWebglSupported] = useState(true);

   const handleClose = (value) => {
     setOpenModal(value);
   };

  

    useEffect(() => {
      console.log(isWebGLSupported(), "webgl");
      setWebglSupported(isWebGLSupported());
    }, []);
  return (
    <>
      {webglSupported ? (
        <div className="App">
          <Suspense fallback={<Loading handleClose={handleClose} />}>
            <Canvas camera={{ position: [0, 2, 5], fov: 30 }}>
              {!darkMode ? (
                <Sky sunPosition={[1, 1, 1]} />
              ) : (
                <Sky sunPosition={[0, 0, 0]} />
              )}
              <directionalLight intensity={2.5} />
              <ambientLight intensity={1.5} />
              <OrbitControls />
              <ScrollControls pages={3}>
                <ExperienceUI handleClose={handleClose} />
              </ScrollControls>
              <group position-y={-1} rotation-y={-Math.PI - 1}>
                <Avatar />
                <Chair />
                <Scene />
              </group>
            </Canvas>
          </Suspense>
          <PortfolioModal
            openModal={openModal}
            handleClose={handleClose}
            modalPlacement={modalPlacement}
          />
        </div>
      ) : (
        <div>
          <p>Your Browser does not support Webgl</p>
          <PortfolioModal
            openModal={openModal}
            handleClose={handleClose}
            modalPlacement={modalPlacement}
          />
        </div>
      )}
    </>
  );
}

export default Experience