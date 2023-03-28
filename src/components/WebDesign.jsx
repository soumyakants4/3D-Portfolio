import React from "react";
import Chair from "./Chair";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

const Desc = styled.p`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  bottom: 100px;
  right: 100px;

  @media only screen and (max-width: 768px) {
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    margin: auto;
  } ;
`;

const WebDesign = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={1}>
          <Chair />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <Desc>We Design products with 3D and ThreeJS.</Desc>
    </>
  );
};

export default WebDesign;
