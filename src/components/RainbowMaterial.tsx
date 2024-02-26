import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { DoubleSide, ShaderMaterial } from 'three';

import fragmentShader from "../shaders/fragment.glsl";
import vertexShader from "../shaders/vertex.glsl";

export default function RainbowMaterial() {
  const myShader = useRef<ShaderMaterial>(null!);

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0,
      },
    }), []
  );

  useFrame(({ clock }) => {
    myShader.current.uniforms.u_time.value = clock.getElapsedTime();
  });

  return (<shaderMaterial
    ref={myShader}
    fragmentShader={fragmentShader}
    vertexShader={vertexShader}
    uniforms={uniforms}
    side={DoubleSide} />
  );
}
