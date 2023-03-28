import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, OrbitControls } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  } ;
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  justify-content: space-between;
  display: flex;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
  } ;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  } ;
`;

const Title = styled.h1`
  font-size: 75px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  } ;
`;

const WhatWeDo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: purple;
`;

const Desc = styled.p`
  font-size: 25px;
  color: lightgray;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  } ;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  width: 100px;
  justify-content: space-between;
  background-color: purple;
  color: white;
  font-weight: 500;
  border-radius: 30px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 4;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  } ;
`;

const Img = styled.img`
  width: 600px;
  height: 700px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }

  @media only screen and (max-width: 768px) {
    height: 300px;
    width: 300px;
  } ;
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>This Is 3D :P</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>What We Do</Subtitle>
          </WhatWeDo>
          <Desc>We make 3D websites</Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.5}>
              <MeshDistortMaterial
                distort={0.5}
                speed={2}
                color="#220736"
                attach="material"
              />
            </Sphere>
          </Canvas>
          <Img src="./img/moon.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
