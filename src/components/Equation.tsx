export function Equation() {
  return <div className="equation">
    <h2>Equation</h2>
    <p>hue=(time+angle)*repetitions-radius*distance</p>
    <h3>Definitions</h3>
    <dl>
      <dt>hue</dt>
      <dd>The hue of the pixel</dd>

      <dt>time</dt>
      <dd>Every frame time is incrimented by delta*speed</dd>

      <dt>angle</dt>
      <dd>The angle of the pixels position from the negative x axis</dd>

      <dt>repetitions</dt>
      <dd>The number of times the hue gradient repeats</dd>

      <dt>radius</dt>
      <dd>The distance of the pixel from the center</dd>

      <dt>distance</dt>
      <dd>The inverse of distance between the spiral arms</dd>
    </dl>
  </div>;
}
