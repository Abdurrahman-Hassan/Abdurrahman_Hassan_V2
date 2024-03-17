import React, { useEffect, useState, memo } from "react";
import { Canvas } from "@react-three/fiber";
import Sphere from "./Sphere";
import LoadingSphere from "./LoadingSphere";

const Model = ({ img }) => {
  const [winsize, setWinsize] = useState(false);

  useEffect(() => {
    if (window.screen.width.toFixed() < 640) {
      setWinsize(true);
    } else if (window.screen.width.toFixed() > 640) {
      setWinsize(false);
    }
  }, []);

  return (
    <Canvas onClick={() => setWinsize(!winsize)}>
      <ambientLight intensity={1.2} />
      {!winsize ? <Sphere img={img} /> : <LoadingSphere img={img} />}
    </Canvas>
  );
};

export default memo(Model);
