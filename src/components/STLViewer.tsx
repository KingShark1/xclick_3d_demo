import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { STLViewerModel } from "./STLViewerModel";
import { OrbitControls } from "@react-three/drei";

interface STLViewerProps {
  url: string;
}

export const STLViewer: React.FC<STLViewerProps> = ({ url }) => {
  return (
    <Canvas camera={{ position: [20, 10, 30] }}>
      <Suspense fallback={null}>
        <STLViewerModel url={url} />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};
