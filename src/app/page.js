"use client";
import React from "react";
import { Canvas} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import Animation from './components/renderBoxes';
let width = 600;
let cols = 30;

export default function Home() {
  return (
    <div id="canvas-container">
      <Canvas
        camera={{
          fov: 75,
          near: 0.1,
          far: 500,
          position: [-10, 10, 5],
        }}
      >
        <axesHelper args={[5]} />
        <color attach="background" args={["black"]} />
        <ambientLight intensity={1} color={0xffffff}/>
        <pointLight color="#fff" intensity={1000} position={[10, 10, 10]} />
        <pointLight castShadow={true} position={[10, 10, 10]} isLight/>
        <Animation cols={cols} width={width} />
        <OrbitControls />
      </Canvas>
    </div>
  )
}