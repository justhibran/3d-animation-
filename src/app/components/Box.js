"use client";
import { Canvas, useFrame, } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import React, { useMemo, useContext, useRef, useState } from 'react'
import { dist, map } from '../utils/utils';
import Animation from './renderBoxes';
import { MeshBasicMaterial } from 'three';
let h;
let refmesh
export default function Box({ x, y, z, width, cW, cols, isSelected, onClick, BoxContext }) {
  const meshRef = useRef();
  const Point = useContext(BoxContext);

  useFrame(({ clock }) => {
    const d = Math.sin(dist(meshRef.current.position.x, meshRef.current.position.z, Point.x, Point.z, 0, 0));
    const offset = d * Math.sin(clock.getElapsedTime());
    meshRef.current.position.y = map(Math.sin(offset), -1, 1, 0, 5);
  });
  return (
    <>
      <pointLight color="#fff" intensity={1000000} position={[10, 70, 10]} />
      <mesh
        ref={meshRef}
        scale={[1, 1, 1]} // Cambia tamaño al seleccionar
        position={[x, y, z]}
        onClick={onClick}
      >
        <boxGeometry args={[width, width, width]} />
        <meshBasicMaterial attach="material" color={isSelected ? 'red' : 0xf1f1f1} />
      </mesh>
    </>
  );
}