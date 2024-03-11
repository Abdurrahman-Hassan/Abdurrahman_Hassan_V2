import React, { useRef, useEffect } from "react";
import { useFrame, useThree } from "react-three-fiber";
import { SphereGeometry, MeshStandardMaterial } from "three";
import { memo } from "react";
import * as THREE from "three";

const LoadingSphere = ({ img }) => {
  const sphereRef = useRef();
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  const rotationSpeed = 0.01; // Adjust this value for desired rotation speed

  // Update rotation on each render cycle using useFrame
  useFrame(() => {
    sphereRef.current.rotation.x = 6.7;

    if (sphereRef.current) {
      sphereRef.current.rotation.y += rotationSpeed;
    }
  });

  useEffect(() => {
    // Clean up the effect on component unmount
    return () => {
      // No need to cancelAnimationFrame, useFrame handles it
    };
  }, []); // Empty dependency array ensures that the effect runs only once

  const sphereGeometry = new SphereGeometry(2, 32, 32);

  const grassTexture = new MeshStandardMaterial({
    map: new THREE.TextureLoader().load(img),
    bumpScale: 100,
    roughness: 0.8,
    metalness: 0.2,
  });

  return (
    <mesh ref={sphereRef} geometry={sphereGeometry} material={grassTexture} />
  );
};

export default memo(LoadingSphere);
