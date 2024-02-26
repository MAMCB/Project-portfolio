/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/Complete-Blender-Creator-Houses.glb 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Island(props) {
  const { nodes, materials } = useGLTF("./models/Complete-Blender-Creator-Houses.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[-12.347, 1.934, -1.544]} scale={0.698}>
        <mesh geometry={nodes.Cylinder.geometry} material={materials.Base} />
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials.White} />
        <mesh
          geometry={nodes.Cylinder_2.geometry}
          material={materials.Bright_Red}
        />
        <mesh
          geometry={nodes.Cylinder_3.geometry}
          material={materials.Emissive_Light}
        />
      </group>
      <mesh
        geometry={nodes.Water.geometry}
        material={materials.Water}
        scale={30}
      />
      <mesh
        geometry={nodes.Base_rocks.geometry}
        material={materials.Rock}
        scale={2.891}
      />
      <group
        position={[-0.454, 3.76, 4.756]}
        rotation={[0, -0.501, 0]}
        scale={0.302}
      >
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials.House_Yellow}
        />
        <mesh
          geometry={nodes.Cube001_2.geometry}
          material={materials.House_red}
        />
      </group>
      <group position={[1.224, 3.811, 4.911]} scale={0.302}>
        <mesh
          geometry={nodes.Cube002_1.geometry}
          material={materials.House_Yellow}
        />
        <mesh
          geometry={nodes.Cube002_2.geometry}
          material={materials.House_red}
        />
      </group>
      <group position={[2.381, 3.541, 5.085]} scale={0.302}>
        <mesh
          geometry={nodes.Cube002_1.geometry}
          material={materials.House_Yellow}
        />
        <mesh
          geometry={nodes.Cube002_2.geometry}
          material={materials.House_red}
        />
      </group>
      <group position={[3.832, 3.362, 5.592]} scale={0.302}>
        <mesh
          geometry={nodes.Cube002_1.geometry}
          material={materials.House_Yellow}
        />
        <mesh
          geometry={nodes.Cube002_2.geometry}
          material={materials.House_red}
        />
      </group>
      <group position={[0.671, 3.649, 1.853]} scale={0.302}>
        <mesh
          geometry={nodes.Cube003_1.geometry}
          material={materials.House_Yellow}
        />
        <mesh
          geometry={nodes.Cube003_2.geometry}
          material={materials.House_red}
        />
      </group>
      <group position={[-1.521, 3.626, 3.159]} scale={0.302}>
        <mesh
          geometry={nodes.Cube004_1.geometry}
          material={materials.House_Yellow}
        />
        <mesh
          geometry={nodes.Cube004_2.geometry}
          material={materials.House_red}
        />
      </group>
      <group position={[-0.521, 3.852, 3.538]} scale={0.302}>
        <mesh
          geometry={nodes.Cube004_1.geometry}
          material={materials.House_Yellow}
        />
        <mesh
          geometry={nodes.Cube004_2.geometry}
          material={materials.House_red}
        />
      </group>
      <group position={[0.233, 3.914, 3.395]} scale={0.302}>
        <mesh
          geometry={nodes.Cube005_1.geometry}
          material={materials.House_Yellow}
        />
        <mesh
          geometry={nodes.Cube005_2.geometry}
          material={materials.House_red}
        />
      </group>
      <group position={[0.343, 3.854, 6.468]} scale={0.21}>
        <mesh
          geometry={nodes.Cube006_1.geometry}
          material={materials.House_Yellow}
        />
        <mesh
          geometry={nodes.Cube006_2.geometry}
          material={materials.House_red}
        />
      </group>
      <group
        position={[1.506, 3.885, 6.1]}
        rotation={[-Math.PI, 0.003, -Math.PI]}
        scale={0.21}
      >
        <mesh
          geometry={nodes.Cube006_1.geometry}
          material={materials.House_Yellow}
        />
        <mesh
          geometry={nodes.Cube006_2.geometry}
          material={materials.House_red}
        />
      </group>
      <group position={[3.62, 3.334, 4.396]} scale={0.21}>
        <mesh
          geometry={nodes.Cube006_1.geometry}
          material={materials.House_Yellow}
        />
        <mesh
          geometry={nodes.Cube006_2.geometry}
          material={materials.House_red}
        />
      </group>
      <group position={[1.067, 3.878, 7.553]} scale={0.302}>
        <mesh
          geometry={nodes.Cube007_1.geometry}
          material={materials.House_Yellow}
        />
        <mesh
          geometry={nodes.Cube007_2.geometry}
          material={materials.House_red}
        />
      </group>
      <group
        position={[1.817, 3.648, 3.052]}
        rotation={[0, -0.501, 0]}
        scale={0.302}
      >
        <mesh
          geometry={nodes.Cube008_1.geometry}
          material={materials.House_Yellow}
        />
        <mesh
          geometry={nodes.Cube008_2.geometry}
          material={materials.House_red}
        />
      </group>
      <group
        position={[2.509, 3.412, 3.668]}
        rotation={[Math.PI, -0.515, Math.PI]}
        scale={0.302}
      >
        <mesh
          geometry={nodes.Cube008_1.geometry}
          material={materials.House_Yellow}
        />
        <mesh
          geometry={nodes.Cube008_2.geometry}
          material={materials.House_red}
        />
      </group>
      <group position={[1.321, 3.756, 4.008]} scale={0.302}>
        <mesh
          geometry={nodes.Cube009_1.geometry}
          material={materials.House_Yellow}
        />
        <mesh
          geometry={nodes.Cube009_2.geometry}
          material={materials.House_red}
        />
      </group>
      <group position={[3.832, 3.362, 5.592]} scale={0.302}>
        <mesh
          geometry={nodes.Cube010_1.geometry}
          material={materials.House_Yellow}
        />
        <mesh
          geometry={nodes.Cube010_2.geometry}
          material={materials.House_red}
        />
      </group>
      <group position={[2.675, 3.641, 6.758]} scale={0.302}>
        <mesh
          geometry={nodes.Cube010_1.geometry}
          material={materials.House_Yellow}
        />
        <mesh
          geometry={nodes.Cube010_2.geometry}
          material={materials.House_red}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/Complete-Blender-Creator-Houses.glb");
