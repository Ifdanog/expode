import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../CanvasLoader'

const Coin = () => {
    const coin = useGLTF('./coin/scene.gltf')

  return (
    <mesh>
        <hemisphereLight intensity={0.15} groundColor='black' />
        <pointLight intensity={1} />
        <ambientLight intensity={0.8} />
        <primitive 
            object={coin.scene}
            scale={5}
            position={[0, 5, 0]}
        />
    </mesh>
  )
}

const CoinCanvas = () => {
    return (
        <Canvas 
            style={{ width: '100%', height: '800px' }}
            frameloop='demand'
            shadows
            camera={{ position: [30, 0, 10], fov: 50 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls 
                    autoRotate
                    autoRotateSpeed={10}
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                /> 
                <Coin />
            </Suspense>

            <Preload all />
        </Canvas>
    )
}

export default CoinCanvas