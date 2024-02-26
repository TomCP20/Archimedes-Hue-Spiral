export function Slider(props: Readonly<{ name: string; min: number; max: number; step: number; val: number; setVal: React.Dispatch<React.SetStateAction<number>>; }>) {
  const { name, min, max, step, val, setVal } = props;
  return (
    <>
      <label htmlFor={name}>{name[0].toUpperCase() + name.slice(1)}: {val}</label><br />
      <input type="range" id={name} name={name} defaultValue="1" min={min} max={max} step={step} onChange={e => setVal(+e.target.value)} /><br />
    </>
  );
}
