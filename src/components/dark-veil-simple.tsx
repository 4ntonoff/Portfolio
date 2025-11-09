'use client';

import { Mesh, Program, Renderer, Triangle, Vec2 } from 'ogl';
import { useEffect, useRef, FC } from 'react';

const vertex = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragment = `
  #ifdef GL_ES
  precision lowp float;
  #endif
  uniform vec2 uResolution;
  uniform float uTime;
  
  float rand(vec2 c){
    return fract(sin(dot(c,vec2(12.9898,78.233)))*43758.5453);
  }
  
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f*f*(3.0-2.0*f);
    
    float n00 = rand(i + vec2(0.0,0.0));
    float n10 = rand(i + vec2(1.0,0.0));
    float n01 = rand(i + vec2(0.0,1.0));
    float n11 = rand(i + vec2(1.0,1.0));
    
    float nx0 = mix(n00, n10, f.x);
    float nx1 = mix(n01, n11, f.x);
    return mix(nx0, nx1, f.y);
  }
  
  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    
    for(int i = 0; i < 5; i++) {
      value += amplitude * noise(p * frequency);
      amplitude *= 0.5;
      frequency *= 2.0;
    }
    return value;
  }
  
  void main(){
    vec2 uv = gl_FragCoord.xy / uResolution.xy;
    
    // Анимированная позиция
    vec2 pos = uv * 5.0 + vec2(sin(uTime * 0.3) * 0.5, cos(uTime * 0.25) * 0.5);
    
    // Движущийся фбм шум
    float n = fbm(pos + uTime * 0.1);
    
    // Движущиеся волны
    float wave1 = sin(uv.x * 8.0 + uTime * 0.5) * 0.5 + 0.5;
    float wave2 = sin(uv.y * 6.0 + uTime * 0.4) * 0.5 + 0.5;
    float wave3 = sin((uv.x + uv.y) * 7.0 + uTime * 0.3) * 0.5 + 0.5;
    
    float pattern = wave1 * 0.3 + wave2 * 0.3 + wave3 * 0.2 + n * 0.2;
    
    // Dark background with red accents
    vec3 col = vec3(0.0);
    
    // Слои красного с движением
    if (pattern > 0.35) {
      col = mix(vec3(0.0), vec3(0.12, 0.02, 0.0), (pattern - 0.35) * 2.5);
    }
    if (pattern > 0.55) {
      col = mix(vec3(0.12, 0.02, 0.0), vec3(0.22, 0.06, 0.01), (pattern - 0.55) * 4.0);
    }
    if (pattern > 0.70) {
      col = mix(vec3(0.22, 0.06, 0.01), vec3(0.35, 0.12, 0.03), (pattern - 0.70) * 3.0);
    }
    if (pattern > 0.85) {
      col = mix(vec3(0.35, 0.12, 0.03), vec3(0.45, 0.18, 0.06), (pattern - 0.85) * 2.0);
    }
    
    gl_FragColor = vec4(col, 1.0);
  }
`;

export type DarkVeilProps = {
  hueShift?: number;
  noiseIntensity?: number;
  scanlineIntensity?: number;
  speed?: number;
  scanlineFrequency?: number;
  warpAmount?: number;
  resolutionScale?: number;
};

export const DarkVeil: FC<DarkVeilProps> = ({
  hueShift = 0,
  noiseIntensity = 0,
  scanlineIntensity = 0,
  speed = 0.5,
  scanlineFrequency = 0,
  warpAmount = 0,
  resolutionScale = 1,
}) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    let animationId: number;

    try {
      const renderer = new Renderer({
        dpr: Math.min(window.devicePixelRatio, 2),
        canvas,
        antialias: true,
      });

      const gl = renderer.gl;
      if (!gl) return;

      const geometry = new Triangle(gl);
      const program = new Program(gl, {
        vertex,
        fragment,
        uniforms: {
          uTime: { value: 0 },
          uResolution: { value: new Vec2() },
          uHueShift: { value: hueShift },
          uNoise: { value: noiseIntensity },
          uScan: { value: scanlineIntensity },
          uScanFreq: { value: scanlineFrequency },
          uWarp: { value: warpAmount },
        },
      });

      const mesh = new Mesh(gl, { geometry, program });

      const handleResize = () => {
        const width = parent.clientWidth;
        const height = parent.clientHeight;
        renderer.setSize(width * resolutionScale, height * resolutionScale);
        program.uniforms.uResolution.value.set(width, height);
      };

      window.addEventListener('resize', handleResize);
      handleResize();

      const startTime = performance.now();

      const animate = () => {
        const elapsed = (performance.now() - startTime) / 1000;
        program.uniforms.uTime.value = elapsed * speed;
        program.uniforms.uHueShift.value = hueShift;
        program.uniforms.uNoise.value = noiseIntensity;
        program.uniforms.uScan.value = scanlineIntensity;
        program.uniforms.uScanFreq.value = scanlineFrequency;
        program.uniforms.uWarp.value = warpAmount;
        renderer.render({ scene: mesh });
        animationId = requestAnimationFrame(animate);
      };

      animate();

      return () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener('resize', handleResize);
      };
    } catch (error) {
      console.error('DarkVeil Error:', error);
    }
  }, [speed, resolutionScale, hueShift, noiseIntensity, scanlineIntensity, scanlineFrequency, warpAmount]);

  return (
    <canvas
      ref={ref}
      className="w-full h-full block"
      style={{
        display: 'block',
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default DarkVeil;

