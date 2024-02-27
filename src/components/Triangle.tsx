import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh, ShaderMaterial, Vector2 } from 'three';
import RainbowMaterial from '../materials/RainbowMaterial';
import { TriangleGeometry } from '../geometries/TriangleGeometry';


const h = Math.sqrt(3) / 2;

export default function Triangle(props: Readonly<{ position: [number, number, number]; size: number; spin: number; myShader: React.RefObject<ShaderMaterial>; speedRef: React.MutableRefObject<number> }>) {
  const { position, size, spin, myShader, speedRef } = props;

  const myMesh = useRef<Mesh>(null!);

  useFrame(({ clock }) => {
    myMesh.current.rotation.z = spin * clock.getElapsedTime();
  })

  return (
    <mesh ref={myMesh} position={position} scale={size}>
      <TriangleGeometry />
      <RainbowMaterial center={new Vector2(0.5, h / 3.0)} myShader={myShader} speedRef={speedRef} />
    </mesh>
  );
}



