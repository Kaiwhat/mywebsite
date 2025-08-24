import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Lights from './Lights';
import Ground from './Ground';
import BikeModel from './BikeModel';
import * as THREE from 'three';

export default function BikeCanvas() {
    return (
        <div id="bike">
            <Canvas
                shadows
                camera={{ fov: 50, position: [10, 5, 10], near: 1, far: 50 }}
                onCreated={({ gl }) => {
                    gl.outputColorSpace = THREE.SRGBColorSpace;
                    gl.shadowMap.enabled = true;
                    gl.shadowMap.type = THREE.PCFSoftShadowMap;
                }}
            >
                <color attach="background" args={[0xa0a0a0]} />

                <Lights />
                <Ground />
                <BikeModel url="/models/bike.glb" />

                <OrbitControls
                    enableDamping
                    enablePan={false}
                    minDistance={5}
                    maxDistance={20}
                    minPolarAngle={0.5}
                    maxPolarAngle={1.5}
                    target={[0, 2, 0]}
                />
            </Canvas>
        </div>
    );
}
