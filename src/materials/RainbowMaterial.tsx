import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { DoubleSide, ShaderMaterial, Vector2 } from 'three';

import fragmentShader from "../shaders/fragment.glsl";
import vertexShader from "../shaders/vertex.glsl";

export default function RainbowMaterial(props: Readonly<{ center: Vector2, speed: number }>) {
  const { center, speed } = props;

  const myShader = useRef<ShaderMaterial>(null!);

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_speed: {
        value: 1.0
      },
      u_repetitions: {
        value: 3.0
      },
      u_distance: {
        value: 2.0
      },
      u_center: {
        value: center
      }
    }), [center]
  );

  useFrame(({ clock }) => {
    myShader.current.uniforms.u_time.value = clock.getElapsedTime();
    myShader.current.uniforms.u_speed.value = speed;
  });

  return (<shaderMaterial
    ref={myShader}
    fragmentShader={fragmentShader}
    vertexShader={vertexShader}
    uniforms={uniforms}
    side={DoubleSide} />
  );
}
