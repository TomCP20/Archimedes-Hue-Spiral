import { Canvas } from '@react-three/fiber';
import RainbowTriangle from '../objects/RainbowTriangle';
import { Settings } from '../interfaces/Settings';

interface SceneProps {
  settings: React.MutableRefObject<Settings>
}

export default function Scene(props: Readonly<SceneProps>) {
  const { settings } = props;
  return (
    <Canvas orthographic camera={{ zoom: 100, position: [0, 0, 20], left: -20, right: 20, bottom: -20, top: 20 }} style={{ background: "black" }}>
      <ambientLight />
      <RainbowTriangle position={[0, 0, 0]} size={5} spin={0} settings={settings} />
    </Canvas>
  );
}
