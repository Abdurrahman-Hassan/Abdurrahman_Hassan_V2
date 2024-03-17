import React, { useEffect, useRef, memo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { SphereGeometry, MeshStandardMaterial } from "three";
import * as THREE from "three";

const Sphere = ({ img }) => {
  const sphereRef = useRef();
  const { size, viewport, gl } = useThree();
  const aspect = size.width / viewport.width;

  useEffect(() => {
    return () => {
      gl.dispose();
    };
  });

  useFrame(({ mouse }) => {
    const mouseX = (mouse.x / aspect) * 2 - 1;

    sphereRef.current.rotation.y = 10;
    sphereRef.current.rotation.x = 6.7;
    sphereRef.current.rotation.y += mouseX * Math.PI * 100;
  });

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

export default memo(Sphere);
