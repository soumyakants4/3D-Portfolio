import React from "react";
import Chair from "./Chair";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const WebDesign = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={1}>
        <Chair />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default WebDesign;
