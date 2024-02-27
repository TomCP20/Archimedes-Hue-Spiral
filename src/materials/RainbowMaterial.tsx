import { useFrame } from '@react-three/fiber';
import { useMemo } from 'react';
import { DoubleSide, ShaderMaterial, Vector2 } from 'three';

import fragmentShader from "../shaders/fragment.glsl";
import vertexShader from "../shaders/vertex.glsl";

interface RainbowMaterialProps {
  center: Vector2;
  myShader: React.RefObject<ShaderMaterial>;
  speedRef: React.MutableRefObject<number>;
}

export default function RainbowMaterial(props: Readonly<RainbowMaterialProps>) {
  const { center, myShader, speedRef } = props;

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_repetitions: {
        value: 1
      },
      u_distance: {
        value: 2.0
      },
      u_center: {
        value: center
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }), []
  );

  useFrame((_, delta ) => {
    if (myShader.current) {
      myShader.current.uniforms.u_time.value += delta * speedRef.current;
    }
  });

  return (<shaderMaterial
    ref={myShader}
    fragmentShader={fragmentShader}
    vertexShader={vertexShader}
    uniforms={uniforms}
    side={DoubleSide} />
  );
}
