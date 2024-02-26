import { OrbitControls, ScrollControls } from "@react-three/drei";
import UI from "./UI";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import Banner from "../../public/Banner.png";
import Home from "./Home";

function Box(){
    const texture = useLoader(TextureLoader, Banner);
    return (
        <mesh>
            <boxGeometry args={[5, 1, 5]} />
            <meshStandardMaterial map={texture} />
        </mesh>
    );
}

const Background = () => {
    return (
        <>
        <ambientLight intensity={4} />
        <OrbitControls enableZoom={true} />
        <ScrollControls pages={3}>
            <Box />
            <Home />
          
        </ScrollControls>
        </>
    );
    }
export default Background;