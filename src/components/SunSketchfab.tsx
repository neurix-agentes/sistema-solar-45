import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

interface SunSketchfabProps {
  isVisible?: boolean;
  modelPath?: string; // Path to .glb file
}

const SunModel = ({ modelPath = "/assets/planets/sun.glb" }: { modelPath?: string }) => {
  const meshRef = useRef<THREE.Group>(null);
  
  try {
    const { scene } = useGLTF(modelPath);

    useFrame((state) => {
      if (meshRef.current) {
        meshRef.current.rotation.y += 0.005; // Slow rotation for the sun
        meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
      }
    });

    return (
      <group ref={meshRef}>
        <primitive object={scene} scale={1.5} />
      </group>
    );
  } catch (error) {
    // Fallback to simple sphere if GLB fails to load
    return (
      <group ref={meshRef}>
        <mesh>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshStandardMaterial 
            color="#FFA500" 
            emissive="#FF6B00" 
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>
    );
  }
};

// Handle GLB loading errors gracefully
const SunModelWithErrorBoundary = ({ modelPath }: { modelPath?: string }) => {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  // Fallback sphere sun
  return (
    <group ref={meshRef}>
      <mesh>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial 
          color="#FFA500" 
          emissive="#FF6B00" 
          emissiveIntensity={0.3}
        />
      </mesh>
    </group>
  );
};

const SunSketchfab = ({ isVisible = true, modelPath }: SunSketchfabProps) => {
  if (!isVisible) return null;

  return (
    <motion.div 
      className="w-full h-full relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="absolute inset-0 rounded-full opacity-30 animate-pulse"
           style={{ boxShadow: "0 0 100px #FFA500" }} />
      
      <div className="w-full h-full">
        <Canvas
          camera={{ position: [0, 0, 4], fov: 50 }}
          className="w-full h-full"
        >
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={2} color="#FFA500" />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#FF6B00" />
          <pointLight position={[0, 0, 0]} intensity={3} color="#FFFF00" />
          
          <Suspense fallback={null}>
            <SunModelWithErrorBoundary modelPath={modelPath} />
          </Suspense>
          
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.3}
          />
        </Canvas>
      </div>
      
      {/* Glow overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 rounded-full bg-gradient-radial from-sun-glow/20 via-transparent to-transparent animate-pulse" />
      </div>
    </motion.div>
  );
};

export default SunSketchfab;