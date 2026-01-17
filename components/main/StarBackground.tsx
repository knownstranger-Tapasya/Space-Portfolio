"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";


const StarBackground = () => {
    const ref = useRef<THREE.Points>(null!);
  const [sphere] = useState(() => {
    const numPoints = 5000;
    const positions = new Float32Array(numPoints * 3);
    
    // Generate points in a sphere
    try {
      if (random && typeof random.inSphere === 'function') {
        random.inSphere(positions, { radius: 1.2 });
      } else {
        throw new Error('inSphere not available');
      }
    } catch {
      // Fallback: manually generate points if maath fails
      for (let i = 0; i < numPoints; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const radius = 1.2 * Math.cbrt(Math.random());
        const i3 = i * 3;
        positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i3 + 2] = radius * Math.cos(phi);
      }
    }
    
    // Validate that we don't have NaN values - this is critical for THREE.js
    for (let i = 0; i < positions.length; i++) {
      if (!Number.isFinite(positions[i])) {
        positions[i] = 0;
      }
    }
    
    return positions;
  });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta/10;
    ref.current.rotation.y -= delta/15;
  })


  return (
    <group rotation={[0,0, Math.PI / 4]}>
        <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled

        >
            <PointMaterial
                transparent
                color="#fff"
                size={0.002}
                sizeAttenuation={true}
                depthWrite={false}
            />
        </Points>
    </group>
  )
};

const StarsCanvas = () => (
    <div className="w-full h-auto fixed inset-0 z-[20] pointer-events-none">
        <Canvas camera={{position: [0, 0, 1]}}>
        <Suspense fallback={null}>
            <StarBackground />
        </Suspense>
        </Canvas>
    </div>
)

export default StarsCanvas;