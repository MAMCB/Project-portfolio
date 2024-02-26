import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";

function LogCameraPosition() {
  const { camera } = useThree();

  useFrame(() => {
    console.log("Camera Position:", camera.position);
    console.log("Camera Rotation:", camera.rotation);
  });

  return null;
}

export default LogCameraPosition;
