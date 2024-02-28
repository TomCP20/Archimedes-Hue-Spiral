import Ring from './Ring';
import { Settings } from '../interfaces/Settings';

interface NestedRingProps {
  settings: React.MutableRefObject<Settings>;
}

export default function NestedRing(props: Readonly<NestedRingProps>) {
  const {settings} = props;
  return (
    <>
      <Ring items={18} radius={3} size={0.8} spin={-1} settings={settings}  />
      <Ring items={12} radius={2} size={0.8} spin={1} settings={settings}  />
      <Ring items={6} radius={1} size={0.8} spin={-1} settings={settings}  />
    </>
  );
}
