import { ShaderMaterial } from 'three';
import Ring from './Ring';

interface NestedRingProps {
  myShader: React.RefObject<ShaderMaterial>;
  speedRef: React.MutableRefObject<number>;
}

export default function NestedRing(props: Readonly<NestedRingProps>) {
  const {myShader, speedRef} = props;
  return (
    <>
      <Ring items={18} radius={3} size={0.8} spin={-1} myShader={myShader} speedRef={speedRef} />
      <Ring items={12} radius={2} size={0.8} spin={1} myShader={myShader} speedRef={speedRef} />
      <Ring items={6} radius={1} size={0.8} spin={-1} myShader={myShader} speedRef={speedRef} />
    </>
  );
}
