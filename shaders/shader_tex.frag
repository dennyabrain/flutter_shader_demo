#include <flutter/runtime_effect.glsl>

out vec4 fragColor;
uniform vec2 u_resolution;


void main() {
    vec2 fragCoord = FlutterFragCoord();
    vec2 st = FlutterFragCoord().xy / u_resolution;

    fragColor = vec4(st.x, st.y, 0.5, 1.0);
}