import Slider from './Slider';
import { Settings } from '../interfaces/Settings';

interface ControlsProps {
  settings: React.MutableRefObject<Settings>
}

export default function Controls(props: Readonly<ControlsProps>) {

  const { settings } = props;

  return (
    <div className="controls panel">
      <h2>Controls</h2>
      <Slider name={"speed"} min={-10} max={10} step={0.01} ticks={[-10, -5, -1, 0, 1, 5, 10]} settings={settings} />
      <Slider name={"repetitions"} min={0} max={10} step={1} ticks={[0, 1, 10]} settings={settings} />
      <Slider name={"distance"} min={-20} max={20} step={0.01} ticks={[-20, -1, 0, 1, 20]} settings={settings} />
    </div>
  );
}