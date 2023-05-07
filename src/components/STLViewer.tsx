import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { STLViewerModel } from "./STLViewerModel";
import { OrbitControls } from "@react-three/drei";
import { Spinner } from "@chakra-ui/react";

interface STLViewerProps {
  url: string;
  wireframeChecked?: boolean;
  color?: string;
  loading?: boolean;
}

export const STLViewer: React.FC<STLViewerProps> = ({
  url,
  wireframeChecked,
  color,
  loading,
}) => {
  return (
    <>
      {loading ? (
        <div className="spinner-container">
          <Spinner />
        </div>
      ) : (
        <Canvas camera={{ position: [20, 10, 30] }}>
          <Suspense fallback={null}>
            <STLViewerModel
              url={url}
              wireframeChecked={wireframeChecked}
              color={color}
            />
            <OrbitControls />
          </Suspense>
        </Canvas>
      )}
    </>
  );
};
