import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh, Vector2 } from 'three';
import RainbowMaterial from '../materials/RainbowMaterial';
import TriangleGeometry from '../geometries/TriangleGeometry';
import { Settings } from '../interfaces/settings';


const h = Math.sqrt(3) / 2;

interface RainbowTriangleProps {
  position: [number, number, number];
  size: number;
  spin: number;
  settings: React.MutableRefObject<Settings>
}

export default function RainbowTriangle(props: Readonly<RainbowTriangleProps>) {
  const { position, size, spin, settings } = props;

  const myMesh = useRef<Mesh>(null!);

  useFrame(({ clock }) => {
    myMesh.current.rotation.z = spin * clock.getElapsedTime();
  })

  return (
    <mesh ref={myMesh} position={position} scale={size}>
      <TriangleGeometry />
      <RainbowMaterial center={new Vector2(0.5, h / 3.0)} settings={settings} />
    </mesh>
  );
}



