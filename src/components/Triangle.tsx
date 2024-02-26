import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';
import RainbowMaterial from './RainbowMaterial';


const h = Math.sqrt(3)/2;

const positions = new Float32Array([
  0.5, -h/3, 0,
  -0.5, -h/3, 0,
  0, 2*h/3, 0
]);
const UVs = new Float32Array([
  1, 0,
  0, 0,
  0.5, 1
]);

export default function Triangle(props: Readonly<{ position: [number, number, number]; size: number; spin: number; }>) {
  const myMesh = useRef<Mesh>(null!);


  useFrame(({ clock }) => {
    myMesh.current.rotation.z = props.spin * clock.getElapsedTime();
  })

  return (
    <mesh ref={myMesh} position={props.position} scale={props.size}>
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
      <RainbowMaterial />
    </mesh>
  );
}

