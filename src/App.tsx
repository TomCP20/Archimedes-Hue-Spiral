import { Canvas } from '@react-three/fiber'
import "./style.css"
import Triangle from './components/Triangle';
import { useEffect, useRef, useState } from 'react';
import { ShaderMaterial } from 'three';

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
    <div className='parent'>
      <div className='left'>
        <label htmlFor="speed">Speed: {speedText}</label><br />
        <input type="range" id="speed" name="speed" defaultValue="1" min="0" max="10" step="0.01" onChange={e => setSpeedText(+e.target.value)} /><br />

        <label htmlFor="repetitions">Repetitions: {repetitions}</label><br />
        <input type="range" id="repetitions" name="repetitions" defaultValue="1" min="0" max="10" step="1" onChange={e => setRepetitions(+e.target.value)} /><br />

        <label htmlFor="distance">Distance: {distance}</label><br />
        <input type="range" id="distance" name="distance" defaultValue="1" min="0" max="20" step="0.01" onChange={e => setDistance(+e.target.value)} /><br />
      </div>
      <div className='center'>
        <Canvas orthographic camera={{ zoom: 100, position: [0, 0, 20], left: -20, right: 20, bottom: -20, top: 20 }} style={{ background: "black" }} >
          <ambientLight />
          <Triangle position={[0, 0, 0]} size={5} spin={0} myShader={myShader} speed={speed} />
        </Canvas>
      </div>
      <div className='right'></div>
    </div>
  )
}

