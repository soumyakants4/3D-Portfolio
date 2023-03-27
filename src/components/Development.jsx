import React from "react";
import Macbook from "./Macbook";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Development = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.5}>
        <Macbook />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Development;
