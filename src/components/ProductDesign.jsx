import React from "react";
import Adidas from "./Adidas";
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
  top: 200px;
  right: 100px;

  @media only screen and (max-width: 768px) {
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    margin: auto;
  } ;
`;

const ProductDesign = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.5}>
          <Adidas />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <Desc>We Design products with 3D and ThreeJS.</Desc>
    </>
  );
};

export default ProductDesign;
