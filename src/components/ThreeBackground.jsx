import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Float, Environment } from "@react-three/drei";
import * as THREE from "three";

/* ---------- Small reusable floating sphere ---------- */
function FloatingSphere({ position, color, scale = 1, speed = 1 }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    ref.current.position.y = Math.sin(t + position[0]) * 0.5 + position[1];
    ref.current.rotation.x = Math.sin(t / 2) * 0.5;
    ref.current.rotation.y = Math.cos(t / 2) * 0.5;
  });

  return (
    <Float floatIntensity={1.5} speed={1.2}>
      <Sphere ref={ref} args={[1, 64, 64]} scale={scale} position={position}>
        <meshPhysicalMaterial
          color={color}
          transmission={0.95}   /* glass refraction */
          roughness={0.05}
          thickness={0.8}
          envMapIntensity={1.5}
          clearcoat={1}
          clearcoatRoughness={0.05}
        />
      </Sphere>
    </Float>
  );
}

/* ---------- Main Background Scene ---------- */
const ThreeBackground = () => {
  return (
    <div
      className="three-background"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -10,
        pointerEvents: "none",
      }}
    >
      <Canvas
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
        camera={{ position: [0, 0, 10], fov: 60 }}
      >
        {/* Subtle environment reflection */}
        <Environment preset="studio" />
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <directionalLight position={[-5, -3, -2]} intensity={0.6} color="#b0d0ff" />

        {/* Floating spheres (glass / stone aesthetic) */}
        <FloatingSphere position={[3, 0, -4]} color="#a3b18a" scale={1.3} speed={0.7} />
        <FloatingSphere position={[-4, 1, -3]} color="#94bda5" scale={1.0} speed={1.0} />
        <FloatingSphere position={[1, -2, -5]} color="#cfd8cc" scale={0.8} speed={0.9} />
        <FloatingSphere position={[0, 3, -6]} color="#b7c7b2" scale={1.6} speed={0.6} />

        {/* Optional very faint orbit controls for dev preview */}
        {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
