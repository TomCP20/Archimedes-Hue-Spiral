import { Canvas } from '@react-three/fiber'
import "./style.css"
import Ring from './components/Ring';

export default function App() {
  return (
    <div style={{ width: "800px", height: "800px", margin: "auto", padding: "50px 0" }}>
      <Canvas orthographic camera={{ zoom: 100, position: [0, 0, 20], left: -20, right: 20, bottom: -20, top: 20 }} style={{ background: "black" }} >
        <ambientLight />
        <Ring items={18} radius={3} size={0.8} spin={-1} />
        <Ring items={12} radius={2} size={0.8} spin={1} />
        <Ring items={6} radius={1} size={0.8} spin={-1} />
      </Canvas>
    </div>
  )
}

/*
<Ring items={18} radius={3} size={1} spin={-1}/>
<Ring items={12} radius={2} size={1} spin={1}/>
<Ring items={6} radius={1} size={1} spin={-1}/>
*/