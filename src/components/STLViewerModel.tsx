/* eslint-disable @typescript-eslint/ban-ts-comment */
// components/STLViewerModel.tsx
import React, { useEffect, useRef } from "react";
import { useLoader, useThree } from "@react-three/fiber";
// @ts-ignore
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { Center } from "@react-three/drei";

interface STLViewerModelProps {
  url: string;
  wireframeChecked?: boolean;
  color?: string;
}

export const STLViewerModel: React.FC<STLViewerModelProps> = ({
  url,
  wireframeChecked,
  color,
}) => {
  const geom = useLoader(STLLoader, url);

  const ref = useRef<THREE.Mesh>(null);
  const { camera } = useThree();
  useEffect(() => {
    if (ref.current) camera.lookAt(ref.current.position);
  });

  return (
    <Center>
      <mesh ref={ref}>
        <primitive object={geom} attach="geometry" />
        <meshStandardMaterial wireframe={wireframeChecked} color={color} />
      </mesh>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
    </Center>
  );
};
