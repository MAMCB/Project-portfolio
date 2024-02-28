import { OrbitControls, ScrollControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import UI from "./UI";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import Banner from "../../public/Banner.png";


function Box(){
  const texture = useLoader(TextureLoader, Banner);
  const myMesh = useRef();

  // Use useFrame hook to rotate the mesh
  useFrame(({ clock }, delta) => {
    if(myMesh.current){
       
    myMesh.current.rotation.y =clock.getElapsedTime()*0.3; // Adjust rotation speed here
    }
  });
  return (
    <mesh ref={myMesh}>
      <boxGeometry args={[5, 1, 5]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

const Background = () => {
    return (
      <>
        <directionalLight color="white" position={[0, 0, 5]} intensity={5} />
        <ambientLight intensity={4} />
        <OrbitControls enableZoom={true} />
        <ScrollControls pages={3}>
          <Box />
        </ScrollControls>
      </>
    );
    }
export default Background;