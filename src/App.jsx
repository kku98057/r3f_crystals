import { Suspense, useState } from "react";

import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MyScene from "./components/MyScene";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  LensFlare,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { useControls } from "leva";
import Background from "./components/Background";

function App() {
  // const {
  //   luminanceThreshold,
  //   luminanceSmoothing,
  //   height,
  //   position,
  //   intensity,
  // } = useControls("effect", {
  //   luminanceThreshold: {
  //     value: 1,
  //     step: 0.1,
  //     min: 0,
  //     max: 2,
  //   },
  //   luminanceSmoothing: {
  //     value: 1,
  //     step: 0.1,
  //     min: 0,
  //     max: 2,
  //   },
  //   height: {
  //     value: 512,
  //     step: 10,
  //     min: 0,
  //     max: 512,
  //   },
  //   position: {
  //     value: [0, 0, 0],
  //     step: 0.1,
  //     min: -10,
  //     max: 10,
  //   },
  //   intensity: {
  //     value: 0.5,
  //     step: 0.1,
  //     min: 0,
  //     max: 2,
  //   },
  // });

  return (
    <Canvas camera={{ position: [0, 0, 2.5], fov: 75 }}>
      <Suspense fallback={null}>
        <ScrollControls pages={6} damping={0.5}>
          <MyScene />
        </ScrollControls>
      </Suspense>
      <Environment preset="city" />
      <directionalLight intensity={0.5} color={"#fff"} castShadow={true} />

      {/* <OrbitControls enabled={false} /> */}
      <EffectComposer multisampling={0}>
        <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={1}
          height={512}
        />
        <Bloom luminanceThreshold={1} luminanceSmoothing={1} height={512} />
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </Canvas>
  );
}

export default App;
