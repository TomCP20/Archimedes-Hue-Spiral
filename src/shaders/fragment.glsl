varying vec2 vUv;

uniform float u_time;
uniform float u_speed;
uniform float u_repetitions;
uniform float u_distance;
uniform vec2 u_center;

#define M_PI 3.1415926535897932384626433832795
#define H 0.86602540378

vec3 hueToRGB(float hue)
{
    hue = fract(hue);
    float r = abs(hue * 6.0 - 3.0) - 1.0;
    float g = 2.0 - abs(hue * 6.0 - 2.0);
    float b = 2.0 - abs(hue * 6.0 - 4.0);
    vec3 rgb = vec3(r,g,b);
    rgb = saturate(rgb);
    return rgb;
}

void main() {
  vec2 pos = vUv - u_center;
  float angle = (u_time * u_speed + atan(pos.y, pos.x)) / (2.0 * M_PI);
  float radius = length(pos);
  vec3 rgb = hueToRGB(angle*u_repetitions-radius*u_distance);
  gl_FragColor = vec4(rgb, 1.0);
}