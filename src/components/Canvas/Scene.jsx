import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import Orb from './Orb'

export default function Scene() {
    return (
        <div className="canvas-container" style={{
            height: '100vh',
            maxHeight: '100vh',
            clipPath: 'inset(0 0 0 0)'
        }}>
            <Canvas
                camera={{ position: [0, 0, 6], fov: 45 }}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: 'high-performance',
                    toneMapping: 3  // ACESFilmicToneMapping
                }}
                dpr={[1, 2]}
            >
                {/* Subtle ambient lighting */}
                <ambientLight intensity={0.2} />

                {/* Main directional light */}
                <directionalLight
                    position={[5, 5, 5]}
                    intensity={0.5}
                    color="#ffffff"
                />

                {/* Accent lights for depth */}
                <pointLight
                    position={[-5, -5, -5]}
                    intensity={0.3}
                    color="#4a00e0"
                />
                <pointLight
                    position={[5, -5, 5]}
                    intensity={0.2}
                    color="#00d4ff"
                />

                {/* The orb */}
                <Orb />

                {/* Environment for reflections */}
                <Environment preset="night" />

                {/* Subtle fog for depth */}
                <fog attach="fog" args={['#0c0c0c', 5, 15]} />
            </Canvas>
        </div>
    )
}
