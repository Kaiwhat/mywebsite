export default function Lights() {
    return (
        <>
            {/* 柔和天空/地面光 */}
            <hemisphereLight args={[0xffffff, 0x444444, 0.4]} />

            {/* 主光（太陽） */}
            <directionalLight
                position={[5, 6, 5]}
                intensity={2.5}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-bias={-0.0001}
            />

            {/* 邊緣光（反輪廓） */}
            <directionalLight position={[-3, 2, -4]} intensity={0.6} />

            {/* 聚光燈（營造層次） */}
            <spotLight
                color={0xfff6e5}
                position={[2, 4, 3]}
                intensity={1.2}
                angle={Math.PI / 5}
                penumbra={0.5}
                castShadow
                target-position={[0, 1, 0]}
            />
        </>
    );
}
