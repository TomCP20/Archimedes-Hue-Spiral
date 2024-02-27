interface SliderProps {
  name: string;
  min: number;
  max: number;
  step: number;
  ticks: number[];
  val: number;
  setVal: React.Dispatch<React.SetStateAction<number>>;
}

export default function Slider(props: Readonly<SliderProps>) {
  const { name, min, max, step, ticks, val, setVal } = props;
  return (
    <p>
      <label htmlFor={name}>{name[0].toUpperCase() + name.slice(1)}: {val}</label>
      <br />
      <input type="range" id={name} name={name} list={name+"list"} defaultValue="1" value={val} min={min} max={max} step={step} onChange={e => setVal(+e.target.value)} />
      <datalist id={name+"list"}>
        {ticks.map(tick => <option key={tick} value={tick}></option>)}
      </datalist>
    </p>
  );
}
