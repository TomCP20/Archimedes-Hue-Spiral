import { Canvas } from '@react-three/fiber';
import Triangle from './Triangle';
import { ShaderMaterial } from 'three';

export function Scene(props: Readonly<{ myShader: React.RefObject<ShaderMaterial>; speed: React.MutableRefObject<number>; }>) {
  const { myShader, speed } = props;
  return (
    <Canvas orthographic camera={{ zoom: 100, position: [0, 0, 20], left: -20, right: 20, bottom: -20, top: 20 }} style={{ background: "black" }}>
      <ambientLight />
      <Triangle position={[0, 0, 0]} size={5} spin={0} myShader={myShader} speed={speed} />
    </Canvas>
  );
}
