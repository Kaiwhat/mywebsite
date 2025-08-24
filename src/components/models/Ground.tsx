export default function Ground() {
    return (
        <mesh rotation-x={-Math.PI / 2} receiveShadow>
            <planeGeometry args={[100, 100]} />
            <meshPhongMaterial color={0xcbcbcb} depthWrite={false} />
        </mesh>
    );
}
