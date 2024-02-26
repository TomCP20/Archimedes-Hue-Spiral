import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { DoubleSide, ShaderMaterial, Vector2 } from 'three';

import fragmentShader from "../shaders/fragment.glsl";
import vertexShader from "../shaders/vertex.glsl";

export default function RainbowMaterial(props: {center: Vector2}) {
  const myShader = useRef<ShaderMaterial>(null!);

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0,
      },
      u_speed: {
        value: 2
      },
      u_repetitions: {
        value: 3
      },
      u_distance: {
        value: 2
      },
      u_center: {
        value: props.center
      }
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
