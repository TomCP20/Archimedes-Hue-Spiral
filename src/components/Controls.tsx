import { useEffect, useState } from 'react';
import { ShaderMaterial } from 'three';
import { Slider } from './Slider';

export function Controls(props: Readonly<{ myShader: React.RefObject<ShaderMaterial>; speedRef: React.MutableRefObject<number>; }>) {

  const { myShader, speedRef } = props;

  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    speedRef.current = speed;
  }, [speed, speedRef]);

  const [repetitions, setRepetitions] = useState(1);

  useEffect(() => {
    if (myShader.current) {
      myShader.current.uniforms.u_repetitions.value = repetitions;
    }
  }, [myShader, repetitions]);

  const [distance, setDistance] = useState(1);

  useEffect(() => {
    if (myShader.current) {
      myShader.current.uniforms.u_distance.value = distance;
    }
  }, [distance, myShader]);

  return (

    <div className="controls">
      <h2>Controls</h2>
      <Slider name={"speed"} min={-10} max={10} step={0.01} ticks={[-10, -1, 0, 1, 10]} val={speed} setVal={setSpeed} />
      <Slider name={"repetitions"} min={0} max={10} step={1} ticks={[0, 1, 10]} val={repetitions} setVal={setRepetitions} />
      <Slider name={"distance"} min={-20} max={20} step={0.01} ticks={[-20, -1, 0, 1, 20]} val={distance} setVal={setDistance} />
      <button onClick={() => { setSpeed(1); setRepetitions(1); setDistance(1); }}>Reset</button>
    </div>
  );
}
