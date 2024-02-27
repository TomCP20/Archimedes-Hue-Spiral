import { ShaderMaterial } from 'three';
import Ring from './Ring';

export default function NestedRing(props: Readonly<{myShader:  React.RefObject<ShaderMaterial>; speed:  React.MutableRefObject<number>}>) {
  const {myShader, speed} = props;
  return (
    <>
      <Ring items={18} radius={3} size={0.8} spin={-1} myShader={myShader} speed={speed} />
      <Ring items={12} radius={2} size={0.8} spin={1} myShader={myShader} speed={speed} />
      <Ring items={6} radius={1} size={0.8} spin={-1} myShader={myShader} speed={speed} />
    </>
  );
}
