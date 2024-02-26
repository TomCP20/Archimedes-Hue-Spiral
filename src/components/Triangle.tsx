import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh, ShaderMaterial, Vector2 } from 'three';
import RainbowMaterial from '../materials/RainbowMaterial';


const h = Math.sqrt(3) / 2;

const positions = new Float32Array([
  0.5, -h / 3, 0,
  -0.5, -h / 3, 0,
  0, 2 * h / 3, 0
]);
const UVs = new Float32Array([
  1, 0,
  0, 0,
  0.5, h
]);

export default function Triangle(props: Readonly<{ position: [number, number, number]; size: number; spin: number; myShader:  React.RefObject<ShaderMaterial>; speed:  React.MutableRefObject<number> }>) {
  const { position, size, spin, myShader, speed } = props;

  const myMesh = useRef<Mesh>(null!);

  useFrame(({ clock }) => {
    myMesh.current.rotation.z = spin * clock.getElapsedTime();
  })

  return (
    <mesh ref={myMesh} position={position} scale={size}>
      <bufferGeometry>
        <bufferAttribute
          attach='attributes-position'
          array={positions}
          count={positions.length / 3}
          itemSize={3} />
        <bufferAttribute
          attach='attributes-uv'
          array={UVs}
          count={UVs.length / 3}
          itemSize={2} />
      </bufferGeometry>
      <RainbowMaterial center={new Vector2(0.5, h / 3.0)} myShader={myShader} speed={speed} />
    </mesh>
  );
}

