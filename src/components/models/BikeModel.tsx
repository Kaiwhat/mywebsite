import { useGLTF } from '@react-three/drei';
import { useEffect } from 'react';
import * as THREE from 'three';

type Props = { url: string };

export default function BikeModel({ url }: Props) {
    const { scene } = useGLTF(url);

    useEffect(() => {
        scene.traverse((child: any) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
    }, [scene]);

    return <primitive object={scene} />;
}

useGLTF.preload('/models/bike.glb');
