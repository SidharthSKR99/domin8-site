import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshTransmissionMaterial, Float } from '@react-three/drei'

export default function GlassLens() {
    const meshRef = useRef()
    const innerRef = useRef()

    useFrame((state) => {
        if (meshRef.current) {
            // Subtle floating rotation
            meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15
            meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.2) * 0.08
        }
        if (innerRef.current) {
            innerRef.current.rotation.z = state.clock.elapsedTime * 0.3
        }
    })

    return (
        <Float
            speed={1.5}
            rotationIntensity={0.2}
            floatIntensity={0.4}
        >
            <group ref={meshRef} position={[2.2, 0, 0]} scale={1.5}>
                {/* Outer Glass Lens - Olivier Larose settings */}
                <mesh>
                    <sphereGeometry args={[1, 64, 64]} />
                    <MeshTransmissionMaterial
                        transmission={1}
                        thickness={0.5}
                        roughness={0}
                        chromaticAberration={0.15}
                        distortion={0.5}
                        distortionScale={0.5}
                        temporalDistortion={0}
                        ior={1.5}
                        color="#ffffff"
                        backside={true}
                        backsideThickness={0.3}
                    />
                </mesh>

                {/* Inner Pupil */}
                <mesh ref={innerRef} position={[0, 0, 0.4]} scale={0.35}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial
                        color="#0a0a0a"
                        metalness={0.95}
                        roughness={0.05}
                    />
                </mesh>

                {/* Orange Iris Ring */}
                <mesh position={[0, 0, 0.15]} scale={0.7}>
                    <torusGeometry args={[1, 0.15, 16, 64]} />
                    <meshStandardMaterial
                        color="#E8940A"
                        emissive="#E8940A"
                        emissiveIntensity={0.4}
                        metalness={0.8}
                        roughness={0.2}
                    />
                </mesh>

                {/* Highlight */}
                <mesh position={[0.3, 0.3, 0.8]} scale={0.1}>
                    <sphereGeometry args={[1, 16, 16]} />
                    <meshBasicMaterial color="#ffffff" />
                </mesh>
            </group>
        </Float>
    )
}
