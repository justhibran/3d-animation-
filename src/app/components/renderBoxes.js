"use client";
import { createRoot } from 'react-dom/client'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import React, { useEffect, createContext, useRef, useState, useMemo } from 'react'
import Box from './Box';


export default function Animation({ cols, width }) {
  const [selectedBox, setSelectedBox] = useState(null);
  const [Point, setPoint] = useState({ x: 0, z: 0 });
  const toggleSelection = (id, x, z) => {
    setPoint({ x: x, z: z }); // Actualiza el estado correctamente
    setSelectedBox(id);

  };
  const BoxContext = createContext();
  const boxes = useMemo(() => {
    const cellCount = Math.floor(width / cols);
    return Array.from({ length: cellCount }).flatMap((_, y) =>
      Array.from({ length: cellCount }).map((_, x) => {
        const id = `${x}-${y}`;

        return (
          <BoxContext.Provider key={id}  value={Point}>
            <Box
              key={id}
              y={0}
              x={x * (cols / 80)}
              z={y * (cols / 80)}
              width={cols / 80}
              cW={width / 160}
              cols={cols}
              BoxContext={BoxContext}
              isSelected={selectedBox === id}
              onClick={() => toggleSelection(id, x * (cols / 80), y * (cols / 80))}
            />
          </BoxContext.Provider>
        );
      })
    );
  })

  return <>{boxes}</>;
}