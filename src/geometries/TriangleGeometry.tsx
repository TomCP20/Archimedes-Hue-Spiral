const h = Math.sqrt(3) / 2;

const positions = new Float32Array([
  0.5, -h / 3, 0,
  -0.5, -h / 3, 0,
  0, 2 * h / 3, 0
]);
const UVs = new Float32Array([
  1, 0,
  0, 0,
  0.5, h
]);

export default function TriangleGeometry() {
  return (
    <bufferGeometry>
      <bufferAttribute
        attach='attributes-position'
        array={positions}
        count={positions.length / 3}
        itemSize={3} />
      <bufferAttribute
        attach='attributes-uv'
        array={UVs}
        count={UVs.length / 3}
        itemSize={2} />
    </bufferGeometry>
  );
}
