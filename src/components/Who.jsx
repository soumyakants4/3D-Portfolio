import React from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  justify-content: space-between;
  display: flex;
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 75px;
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
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  width: 120px;
  justify-content: space-between;
  background-color: purple;
  color: white;
  font-weight: 500;
  border-radius: 30px;
  cursor: pointer;
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
            <OrbitControls enableZoom={false} autoRotate />
          </Canvas>
        </Left>
        <Right>
          <Title>Welcome</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>How we Work</Subtitle>
          </WhatWeDo>
          <Desc>Small website to display our 3D Portfolio</Desc>
          <Button>See Our Works</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
