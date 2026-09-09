import { Canvas } from '@react-three/fiber';
import RainbowSpiral from '../objects/RainbowSpiral';
import { Settings } from '../interfaces/Settings';

interface SceneProps {
  settings: React.MutableRefObject<Settings>
}

export default function Scene(props: Readonly<SceneProps>) {
  const { settings } = props;
  return (
    <Canvas orthographic camera={{ zoom: 100, position: [0, 0, 1], left: -1, right: 1, bottom: -1, top: 1 }} style={{ background: "black" }}>
      <ambientLight />
      <RainbowSpiral position={[0, 0, 0]} settings={settings} />
    </Canvas>
  );
}
