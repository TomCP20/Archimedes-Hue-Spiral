import "./style.css"
import { useRef } from 'react';
import Scene from './components/Scene';
import Equation from "./components/Equation";
import Controls from "./components/Controls";
import { Settings } from "./interfaces/settings";


export default function App() {

  const settings = useRef<Settings>({speed: 1, repetitions: 1, distance: 1});

  return (
    <>
      <h1>Archimedes Hue Spiral</h1>
      <div className='parent'>
        <div className='left'>
          <Controls settings={settings} />
        </div>
        <div className='center'>
          <Scene settings={settings} />
        </div>
        <div className='right'>
          <Equation />
        </div>
      </div>
    </>
  )
}



