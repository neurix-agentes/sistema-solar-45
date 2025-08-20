import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

interface Planet3DProps {
  color: string;
  glowColor: string;
  size?: number;
  rotationSpeed?: number;
  isVisible?: boolean;
}

const PlanetMesh = ({ color, glowColor, size = 1, rotationSpeed = 0.01 }: Planet3DProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group>
      {/* Main planet sphere */}
      <Sphere
        ref={meshRef}
        args={[size, 64, 64]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.1 : 1}
      >
        <meshPhongMaterial 
          color={color}
          shininess={100}
          specular={glowColor}
        />
      </Sphere>
      
      {/* Atmospheric glow */}
      <Sphere args={[size * 1.05, 32, 32]}>
        <meshBasicMaterial 
          color={glowColor}
          transparent
          opacity={0.2}
          side={THREE.BackSide}
        />
      </Sphere>
      
      {/* Outer glow */}
      <Sphere args={[size * 1.15, 16, 16]}>
        <meshBasicMaterial 
          color={glowColor}
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  );
};

const Planet3D = ({ color, glowColor, size = 1, rotationSpeed = 0.01, isVisible = true }: Planet3DProps) => {
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
        
        <PlanetMesh 
          color={color} 
          glowColor={glowColor} 
          size={size} 
          rotationSpeed={rotationSpeed}
        />
        
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

export default Planet3D;