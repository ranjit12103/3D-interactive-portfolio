import { Environment, useGLTF, Float, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useEffect } from 'react'
import * as THREE from 'three'

const TechIcon = ({ model }) => {

    const scene = useGLTF(model.modelPath);

     useEffect(() => {
    scene.scene.traverse((child) => {
      if (child.isMesh) {
        // 🎨 Change Interactive Developer mesh
        if (model.name === "Interactive Developer" && child.name === "Object_5") {
          child.material = new THREE.MeshStandardMaterial({ color: "#ffff" });
        }

        // 🎨 Change AWS Smile color
        if (model.name === "Cloud Developer" && (child.name === "ArrowBody_Material001_0" ||
         child.name === "ArrowHead_Material001_0")
      ) {
        child.material = new THREE.MeshStandardMaterial({
          color: "#FF9900", // AWS orange
          metalness: 0.3,
          roughness: 0.4,
        });
        }
      }
    });
  }, [model.name, scene]);



    return (
    <Canvas>
      <ambientLight intensity={0.3}/>
      <directionalLight position={[5,5,5,]} intensity={1} />
      <Environment preset='city' />

      <OrbitControls enableZoom={false} />

      <Float speed={10} rotationIntensity={1} floatIntensity={0.9}>
        <group 
          scale={model.scale} 
          rotation={model.rotation}
          position={model.name === "Cloud Developer" ? [0, -1.9, 0] : [0, 0, 0]}
          >
          <primitive object={scene.scene}/>
        </group>
      </Float>
    </Canvas>
  )}

export default TechIcon
