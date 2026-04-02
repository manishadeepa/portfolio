import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Icosahedron, MeshDistortMaterial } from "@react-three/drei";

const Earth = () => {
  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
        color="#00ffff"
      />
      <pointLight intensity={1} />
      
      {/* Abstract Animated Sphere Structure */}
      <Icosahedron args={[2.5, 3]} scale={1.1}>
        <MeshDistortMaterial
          color="#0a0a0a"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
          wireframe={true}
        />
      </Icosahedron>
      
      {/* Core glowing sphere */}
      <Icosahedron args={[2.3, 2]} scale={1}>
        <meshBasicMaterial
          color="#00ffff"
          wireframe={false}
          transparent={true}
          opacity={0.05}
        />
      </Icosahedron>
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true, alpha: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={1.5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
