import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import Background from "./Background";
import Home from "./Home";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import PortfolioModal from "./PortfolioModal";
import { useState } from "react";

const CanvasComponent = () => {
   const [openModal, setOpenModal] = useState(false);
   const [modalPlacement, setModalPlacement] = useState("center");

   const handleClose = (value) => {
      setOpenModal(value);
    };
  return (
    <div className="App">
      <Home />
      <div className="flex flex-col md:flex-row  ">
        <Button
          size="text-2xl"
          className="w-40 h-12 mx-auto mt-8 md:mt-0 md:w-80 md:h-24 md:self-center slideInLeft"
          onClick={() => handleClose(true)}
        >
          Ready to explore!
        </Button>

        <PortfolioModal
          openModal={openModal}
          handleClose={handleClose}
          modalPlacement={modalPlacement}
        />

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
