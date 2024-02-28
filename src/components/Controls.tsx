import { useEffect, useState } from 'react';
import Slider from './Slider';
import { Settings } from '../interfaces/settings';

interface ControlsProps {
  settings: React.MutableRefObject<Settings>
}

export default function Controls(props: Readonly<ControlsProps>) {

  const { settings } = props;

  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    settings.current.speed = speed;
  }, [settings, speed]);

  const [repetitions, setRepetitions] = useState(1);

  useEffect(() => {
    settings.current.repetitions = repetitions;
  }, [settings, repetitions]);

  const [distance, setDistance] = useState(1);

  useEffect(() => {
    settings.current.distance = distance;
  }, [settings, distance]);

  return (

    <div className="controls panel">
      <h2>Controls</h2>
      <Slider name={"speed"} min={-10} max={10} step={0.01} ticks={[-10, -5, -1, 0, 1, 5, 10]} val={speed} setVal={setSpeed} />
      <Slider name={"repetitions"} min={0} max={10} step={1} ticks={[0, 1, 10]} val={repetitions} setVal={setRepetitions} />
      <Slider name={"distance"} min={-20} max={20} step={0.01} ticks={[-20, -1, 0, 1, 20]} val={distance} setVal={setDistance} />
      <button onClick={() => { setSpeed(1); setRepetitions(1); setDistance(1); }}>Reset</button>
    </div>
  );
}
