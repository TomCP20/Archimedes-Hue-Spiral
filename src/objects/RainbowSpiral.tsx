import { useRef } from 'react';
import { Mesh, Vector2 } from 'three';
import RainbowMaterial from '../materials/RainbowMaterial';
import { Settings } from '../interfaces/Settings';



interface RainbowSpiralProps {
  position: [number, number, number];
  settings: React.MutableRefObject<Settings>
}

export default function RainbowSpiral(props: Readonly<RainbowSpiralProps>) {
  const { position, settings } = props;

  const myMesh = useRef<Mesh>(null!);

  return (
    <mesh ref={myMesh} position={position} scale={8}>
      <planeGeometry />
      <RainbowMaterial center={new Vector2(0.5, 0.5)} settings={settings} />
    </mesh>
  );
}



