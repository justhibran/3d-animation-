"use client";
import { Canvas, useFrame, } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import React, { useMemo, useContext , useRef, useState } from 'react'
import { dist, map } from '../utils/utils';
import Animation from './renderBoxes';
let h;
let refmesh
export default function Box({ x, y, z, width, cW, cols, isSelected, onClick ,BoxContext}) {
  const meshRef = useRef();
  const Point = useContext(BoxContext);
 console.log(Point);
 
  useFrame(({ clock }) => {
    const d = Math.sin(dist(meshRef.current.position.x, meshRef.current.position.z, Point.x, Point.y, 0, 0));
    const offset = d * Math.sin(clock.getElapsedTime());
    meshRef.current.scale.y = map(Math.sin(offset), -1, 1, 5, cols/2);
  });
  return (
    <>
        <mesh
      ref={meshRef}
      scale={[1, 1, 1]} // Cambia tamaño al seleccionar
      position={[x - cW, y, z - cW]}
      onClick={onClick}
    >
      <boxGeometry args={[width, width, width]} />
      <meshBasicMaterial color={isSelected ? 'red' : 'white'} />
    </mesh>
    </>
  );
}