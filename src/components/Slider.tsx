import { useEffect, useState } from "react";
import { Settings } from "../interfaces/Settings";

interface SliderProps {
  name: keyof Settings;
  min: number;
  max: number;
  step: number;
  ticks: number[];
  settings: React.MutableRefObject<Settings>;
}

export default function Slider(props: Readonly<SliderProps>) {
  const { name, min, max, step, ticks, settings } = props;

  const [val, setVal] = useState(1);

  useEffect(() => {
    settings.current[name] = val;
  }, [name, settings, val]);

  return (
    <p>
      <label htmlFor={name}>{name[0].toUpperCase() + name.slice(1)}: {val}</label>
      <br />
      <input type="range" id={name} name={name} list={name + "list"} value={val} min={min} max={max} step={step} onChange={e => setVal(+e.target.value)} />
      <datalist id={name + "list"}>{ticks.map(tick => <option key={tick} value={tick}></option>)}</datalist>
      <br />
      <button onClick={() => { setVal(1); }}>Reset</button>
    </p>
  );
}
