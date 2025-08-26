import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Lights from './Lights';
import HumanModel from './HumanModel';
import * as THREE from 'three';

type Props = { url: string };

export default function HumanCanvas({ url }: Props) {
    return (
        <div id="people">
            <Canvas
                shadows
                camera={{ fov: 50, position: [0, 0, 0], near: 1, far: 10 }}
                onCreated={({ gl }) => {
                    gl.outputColorSpace = THREE.SRGBColorSpace;
                    gl.shadowMap.enabled = true;
                    gl.shadowMap.type = THREE.PCFSoftShadowMap;
                }}
            >

                <Lights />
                <HumanModel url={url} />

                <OrbitControls
                    enableDamping
                    enablePan={false}
                    minDistance={5}
                    maxDistance={5}
                    minPolarAngle={1.5}
                    maxPolarAngle={1.5}
                    target={[0, 2, 0]}
                />
            </Canvas>
        </div>
    );
}
