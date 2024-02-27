import { useFrame } from '@react-three/fiber';
import RainbowTriangle from './RainbowTriangle';
import { useRef } from 'react';
import { Group, ShaderMaterial } from 'three';

interface RingProps {
  items: number;
  radius: number;
  size: number;
  spin: number;
  myShader: React.RefObject<ShaderMaterial>;
  speedRef: React.MutableRefObject<number>;
}

export default function Ring(props: Readonly<RingProps>) {
  const { items, radius, size, spin, myShader, speedRef } = props;
  const mygroup = useRef<Group>(null!)

  useFrame(({ clock }) => {
    mygroup.current.rotation.z = -spin * clock.getElapsedTime()
  })
  

  function getPos(i: number): [number, number, number] {
    const angle = (i * 2 * Math.PI / items);
    return [radius * Math.cos(angle), radius * Math.sin(angle), 0];
  }

  return (
    <group ref={mygroup}>
      {[...Array(items).keys()].map(i => <RainbowTriangle key={i} size={size} position={getPos(i)} spin={spin} myShader={myShader} speedRef={speedRef} />)}
    </group>
  );


}
