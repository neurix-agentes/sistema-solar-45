import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

interface PlanetGLBProps {
  modelPath: string;
  size?: number;
  rotationSpeed?: number;
  isVisible?: boolean;
  glowColor?: string;
}

interface GLTFModelProps {
  modelPath: string;
  size: number;
  rotationSpeed: number;
}

const GLTFModel = ({ modelPath, size, rotationSpeed }: GLTFModelProps) => {
  const meshRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(modelPath);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <primitive 
      ref={meshRef}
      object={scene.clone()} 
      scale={size}
      position={[0, 0, 0]}
    />
  );
};

const FallbackPlanet = ({ size, rotationSpeed, glowColor = "#888888" }: { 
  size: number; 
  rotationSpeed: number; 
  glowColor?: string;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshPhongMaterial 
        color={glowColor}
        emissive={glowColor}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

const PlanetGLB = ({ 
  modelPath, 
  size = 1, 
  rotationSpeed = 0.01, 
  isVisible = true,
  glowColor = "#888888"
}: PlanetGLBProps) => {
  if (!isVisible) return null;

  return (
    <motion.div 
      className="w-full h-full"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color={glowColor} />
        
        <Suspense fallback={
          <FallbackPlanet 
            size={size} 
            rotationSpeed={rotationSpeed}
            glowColor={glowColor}
          />
        }>
          <GLTFModel
            modelPath={modelPath}
            size={size}
            rotationSpeed={rotationSpeed}
          />
        </Suspense>
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </motion.div>
  );
};

// Preload all planet models
const preloadModels = () => {
  const planetIds = ['sun', 'mercury', 'venus', 'earth', 'moon', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];
  planetIds.forEach(id => {
    useGLTF.preload(`/models/${id}.glb`);
  });
};

export { preloadModels };
export default PlanetGLB;