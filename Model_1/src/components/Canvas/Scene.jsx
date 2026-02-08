import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Preload } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { Fluid } from '@whatisjery/react-fluid-distortion'
import GlassLens from './GlassLens'

export default function Scene() {
    return (
        <div className="canvas-container">
            <Canvas
                camera={{ position: [0, 0, 6], fov: 45 }}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: 'high-performance',
                    toneMapping: 3
                }}
                dpr={[1, 2]}
            >
                <Suspense fallback={null}>
                    {/* Dark Mode Lighting - from bitsandbrains portfolio */}
                    <ambientLight intensity={0.08} />

                    {/* Key Light - Orange brand glow */}
                    <spotLight
                        position={[5, 5, 5]}
                        intensity={60}
                        angle={0.6}
                        penumbra={1}
                        color="#E8940A"
                    />

                    {/* Fill Light - Red accent */}
                    <pointLight
                        position={[-4, -2, 3]}
                        intensity={30}
                        color="#C41E1E"
                    />

                    {/* Rim Light - Cool contrast */}
                    <pointLight
                        position={[0, 4, -4]}
                        intensity={15}
                        color="#4a00e0"
                    />

                    {/* Back Light - Depth */}
                    <pointLight
                        position={[-3, 2, -5]}
                        intensity={10}
                        color="#00d4ff"
                    />

                    {/* Glass Lens */}
                    <GlassLens />

                    {/* Environment for glass reflections */}
                    <Environment preset="night" />

                    {/* Fog for depth */}
                    <fog attach="fog" args={['#0c0c0c', 6, 18]} />

                    {/* Post-processing */}
                    <EffectComposer>
                        <Bloom
                            intensity={0.4}
                            luminanceThreshold={0.3}
                            luminanceSmoothing={0.9}
                            mipmapBlur
                        />
                        {/* Lusion-style Fluid Distortion */}
                        <Fluid
                            radius={0.3}
                            curl={10}
                            swirl={5}
                            distortion={1}
                            force={2}
                            pressure={0.8}
                        />
                    </EffectComposer>

                    <Preload all />
                </Suspense>
            </Canvas>
        </div>
    )
}
