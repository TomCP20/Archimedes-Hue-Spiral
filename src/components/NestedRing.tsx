import Ring from './Ring';

export default function NestedRing() {
  return (
    <>
      <Ring items={18} radius={3} size={0.8} spin={-1} />
      <Ring items={12} radius={2} size={0.8} spin={1} />
      <Ring items={6} radius={1} size={0.8} spin={-1} />
    </>
  );
}
