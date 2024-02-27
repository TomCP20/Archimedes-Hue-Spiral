import "./style.css"
import { useRef } from 'react';
import { ShaderMaterial } from 'three';
import Scene from './components/Scene';
import Equation from "./components/Equation";
import Controls from "./components/Controls";

export default function App() {

  const myShader = useRef<ShaderMaterial>(null);

  const speedRef = useRef(1);

  return (
    <>
      <h1>Archimedes spiral</h1>
      <div className='parent'>
        <div className='left'>
          <Controls myShader={myShader} speedRef={speedRef} />
        </div>
        <div className='center'>
          <Scene myShader={myShader} speedRef={speedRef} />
        </div>
        <div className='right'>
          <Equation />
        </div>
      </div>
    </>
  )
}



