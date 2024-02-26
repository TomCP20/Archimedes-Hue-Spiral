import { useFrame } from '@react-three/fiber';
import Triangle from './Triangle';
import { useRef } from 'react';
import { Group, ShaderMaterial } from 'three';

export default function Ring(props: Readonly<{ items: number; radius: number; size: number; spin: number; myShader: React.RefObject<ShaderMaterial>; speed:  React.MutableRefObject<number> }>) {
  const { items, radius, size, spin, myShader, speed } = props;
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
      {[...Array(items).keys()].map(i => <Triangle key={i} size={size} position={getPos(i)} spin={spin} myShader={myShader} speed={speed} />)}
    </group>
  );


}
