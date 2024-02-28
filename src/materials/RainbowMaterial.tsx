import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { DoubleSide, ShaderMaterial, Vector2 } from 'three';

import fragmentShader from "../shaders/fragment.glsl";
import vertexShader from "../shaders/vertex.glsl";
import { Settings } from '../interfaces/settings';

interface RainbowMaterialProps {
  center: Vector2;
  settings: React.MutableRefObject<Settings>
}

export default function RainbowMaterial(props: Readonly<RainbowMaterialProps>) {
  
  const { center, settings } = props;

  const myShader = useRef<ShaderMaterial>(null);

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
      myShader.current.uniforms.u_time.value += delta * settings.current.speed;
      myShader.current.uniforms.u_repetitions.value = settings.current.repetitions;
      myShader.current.uniforms.u_distance.value = settings.current.distance;
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
