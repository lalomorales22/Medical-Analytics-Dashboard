import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Html } from '@react-three/drei';
import * as THREE from 'three';

const HumanModel = ({ activeSystem }: { activeSystem: string }) => {
  const bodyRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  const getSystemColor = (system: string) => {
    switch (system) {
      case 'nervous':
        return '#ec4899';
      case 'cardio':
        return '#f43f5e';
      case 'muscular':
        return '#f97316';
      default:
        return '#f8bbd0';
    }
  };

  return (
    <group ref={bodyRef} scale={1.5}>
      {/* Torso */}
      <mesh
        position={[0, 0, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <cylinderGeometry args={[1, 0.8, 2, 32]} />
        <meshPhongMaterial
          color={getSystemColor(activeSystem)}
          transparent
          opacity={hovered ? 0.8 : 0.6}
        />
        {hovered && (
          <Html position={[1.5, 0, 0]}>
            <div className="bg-white p-2 rounded shadow-lg text-sm">
              <p className="font-semibold">{activeSystem.charAt(0).toUpperCase() + activeSystem.slice(1)} System</p>
              <p className="text-gray-600">Click to examine</p>
            </div>
          </Html>
        )}
      </mesh>
      
      {/* Head */}
      <mesh position={[0, 1.4, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshPhongMaterial color={getSystemColor(activeSystem)} transparent opacity={0.6} />
      </mesh>

      {/* Arms */}
      <mesh position={[-1.2, 0, 0]} rotation={[0, 0, -0.3]}>
        <cylinderGeometry args={[0.2, 0.2, 2, 32]} />
        <meshPhongMaterial color={getSystemColor(activeSystem)} transparent opacity={0.6} />
      </mesh>
      <mesh position={[1.2, 0, 0]} rotation={[0, 0, 0.3]}>
        <cylinderGeometry args={[0.2, 0.2, 2, 32]} />
        <meshPhongMaterial color={getSystemColor(activeSystem)} transparent opacity={0.6} />
      </mesh>

      {/* Legs */}
      <mesh position={[-0.4, -1.5, 0]} rotation={[0, 0, 0.1]}>
        <cylinderGeometry args={[0.25, 0.25, 2, 32]} />
        <meshPhongMaterial color={getSystemColor(activeSystem)} transparent opacity={0.6} />
      </mesh>
      <mesh position={[0.4, -1.5, 0]} rotation={[0, 0, -0.1]}>
        <cylinderGeometry args={[0.25, 0.25, 2, 32]} />
        <meshPhongMaterial color={getSystemColor(activeSystem)} transparent opacity={0.6} />
      </mesh>
    </group>
  );
};

const AnatomyModel = ({ activeSystem }: { activeSystem: string }) => {
  return (
    <div className="w-full h-[600px] bg-gradient-to-b from-orange-50 to-pink-50 rounded-lg overflow-hidden shadow-lg">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, -10, -10]} angle={0.3} intensity={0.5} />
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={4}
          maxDistance={12}
        />
        <HumanModel activeSystem={activeSystem} />
      </Canvas>
    </div>
  );
};

export default AnatomyModel;