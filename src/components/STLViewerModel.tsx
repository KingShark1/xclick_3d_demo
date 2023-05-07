/* eslint-disable @typescript-eslint/ban-ts-comment */
// components/STLViewerModel.tsx
import React, { useEffect, useRef } from "react";
import { useLoader, useThree } from "@react-three/fiber";
// @ts-ignore
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

interface STLViewerModelProps {
  url: string;
}

export const STLViewerModel: React.FC<STLViewerModelProps> = ({ url }) => {
  const geom = useLoader(STLLoader, url);

  const ref = useRef<THREE.Mesh>(null);
  const { camera } = useThree();
  useEffect(() => {
    if (ref.current) camera.lookAt(ref.current.position);
  });

  return (
    <>
      <mesh ref={ref}>
        <primitive object={geom} attach="geometry" />
        <meshStandardMaterial color={"orange"} />
      </mesh>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
    </>
  );
};
