import { Canvas } from '@react-three/fiber';
import RainbowTriangle from '../objects/RainbowTriangle';
import { ShaderMaterial } from 'three';

export function Scene(props: Readonly<{ myShader: React.RefObject<ShaderMaterial>; speedRef: React.MutableRefObject<number>; }>) {
  const { myShader, speedRef } = props;
  return (
    <Canvas orthographic camera={{ zoom: 100, position: [0, 0, 20], left: -20, right: 20, bottom: -20, top: 20 }} style={{ background: "black" }}>
      <ambientLight />
      <RainbowTriangle position={[0, 0, 0]} size={5} spin={0} myShader={myShader} speedRef={speedRef} />
    </Canvas>
  );
}
