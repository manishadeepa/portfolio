import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Float, MeshDistortMaterial, Sphere } from "@react-three/drei";

const Computer = () => {
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#00ffff" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#bd00ff" />
      <Sphere args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color="#0a0a0a"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const ComputerCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true, alpha: true }}
      camera={{ position: [20, 3, 5], fov: 25 }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={1}
        />
        <Computer />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
