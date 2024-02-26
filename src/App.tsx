import "./style.css"
import { useEffect, useRef, useState } from 'react';
import { ShaderMaterial } from 'three';
import { Slider } from './components/Slider';
import { Scene } from './components/Scene';

export default function App() {

  const myShader = useRef<ShaderMaterial>(null);

  const speed = useRef(1);

  const [repetitions, setRepetitions] = useState(1);

  useEffect(() => {
    if (myShader.current) {
      myShader.current.uniforms.u_repetitions.value = repetitions;
    }
  }, [repetitions])

  const [distance, setDistance] = useState(1);

  useEffect(() => {
    if (myShader.current) {
      myShader.current.uniforms.u_distance.value = distance;
    }
  }, [distance])

  const [speedText, setSpeedText] = useState(1);

  useEffect(() => {
    speed.current = speedText
  }, [speedText])

  return (
    <>
      <h1>Archemidies spiral</h1>
      <div className='parent'>
        <div className='left'>
          <Slider name={"speed"} min={0} max={10} step={0.01} val={speedText} setVal={setSpeedText} />
          <Slider name={"repetitions"} min={0} max={10} step={1} val={repetitions} setVal={setRepetitions} />
          <Slider name={"distance"} min={0} max={20} step={0.01} val={distance} setVal={setDistance} />
        </div>
        <div className='center'>
          <Scene myShader={myShader} speed={speed} />
        </div>
        <div className='right' />
      </div>
    </>
  )
}