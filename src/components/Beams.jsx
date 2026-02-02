import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function BeamMesh({ beamWidth, beamHeight, beamNumber, lightColor, speed, noiseIntensity, scale, rotation }) {
    const meshRef = useRef();

    // Custom Shader Material
    const shaderMaterial = useMemo(() => new THREE.ShaderMaterial({
        uniforms: {
            uTime: { value: 0 },
            uColor: { value: new THREE.Color(lightColor) },
            uNoiseIntensity: { value: noiseIntensity },
            uSpeed: { value: speed },
            uScale: { value: scale },
            uBeamWidth: { value: beamWidth },
            uBeamHeight: { value: beamHeight },
            uBeamNumber: { value: beamNumber }
        },
        vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
        fragmentShader: `
      uniform float uTime;
      uniform vec3 uColor;
      uniform float uNoiseIntensity;
      uniform float uSpeed;
      uniform float uScale;
      uniform float uBeamWidth;
      uniform float uBeamHeight;
      uniform float uBeamNumber;
      
      varying vec2 vUv;

      // Simple pseudo-random function
      float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }

      // 2D Noise function
      float noise(vec2 st) {
          vec2 i = floor(st);
          vec2 f = fract(st);
          float a = random(i);
          float b = random(i + vec2(1.0, 0.0));
          float c = random(i + vec2(0.0, 1.0));
          float d = random(i + vec2(1.0, 1.0));
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      void main() {
        // Create beams based on x coordinate
        float beamX = vUv.x * uBeamNumber;
        float beamIndex = floor(beamX);
        float beamFract = fract(beamX);

        // Center the beam
        float dist = abs(beamFract - 0.5);
        
        // Beam shape (smooth step)
        float beamShape = 1.0 - smoothstep(0.0, uBeamWidth * 0.1, dist);
        
        // Noise animation
        float noiseVal = noise(vec2(vUv.x * 10.0, vUv.y * uScale - uTime * uSpeed));
        
        // Combine
        float opacity = beamShape * (1.0 - vUv.y) * 0.5; // Fade out at bottom
        opacity *= 1.0 + (noiseVal - 0.5) * uNoiseIntensity;
        
        // Clamp opacity
        opacity = clamp(opacity, 0.0, 1.0);

        gl_FragColor = vec4(uColor, opacity);
      }
    `,
        transparent: true,
        side: THREE.DoubleSide,
        depthWrite: false,
        blending: THREE.NormalBlending
    }), [lightColor, noiseIntensity, speed, scale, beamWidth, beamHeight, beamNumber]);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.material.uniforms.uTime.value = state.clock.getElapsedTime();
        }
    });

    return (
        <mesh ref={meshRef} rotation={[0, 0, THREE.MathUtils.degToRad(rotation)]}>
            <planeGeometry args={[40, 40]} />
            <primitive object={shaderMaterial} attach="material" />
        </mesh>
    );
}

export default function Beams({
    beamWidth = 2,
    beamHeight = 15,
    beamNumber = 12,
    lightColor = '#ffffff',
    speed = 2,
    noiseIntensity = 1.75,
    scale = 0.2,
    rotation = 0,
    className = ''
}) {
    return (
        <div className={`w-full h-full absolute inset-0 overflow-hidden ${className}`}>
            <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <BeamMesh
                    beamWidth={beamWidth}
                    beamHeight={beamHeight}
                    beamNumber={beamNumber}
                    lightColor={lightColor}
                    speed={speed}
                    noiseIntensity={noiseIntensity}
                    scale={scale}
                    rotation={rotation}
                />
            </Canvas>
        </div>
    );
}
