import { Canvas } from '@react-three/fiber'
import "./style.css"
import Triangle from './components/Triangle';

export default function App() {
  return (
    <>
      <label htmlFor="speed">Speed</label>
      <input type="range" id="speed" name="speed" min="0" max="10" />

      <div style={{ width: "800px", height: "800px", margin: "auto", padding: "50px 0" }}>
        <Canvas orthographic camera={{ zoom: 100, position: [0, 0, 20], left: -20, right: 20, bottom: -20, top: 20 }} style={{ background: "black" }} >
          <ambientLight />
          <Triangle position={[0, 0, 0]} size={5} spin={0} speed={2} />
        </Canvas>
      </div>
    </>
  )
}

