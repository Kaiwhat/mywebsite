import { useEffect, useMemo } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

type Props = {
    url: string;
    /** 指定要播放的動畫名稱；不傳則播放所有動畫 */
    actionName?: string;
    /** 迴圈模式，預設重複 */
    loop?: THREE.AnimationActionLoopStyles;
    /** 播放前漸入秒數 */
    fadeIn?: number;
    /** 結束/卸載時漸出秒數 */
    fadeOut?: number;
};

export default function HumanModel({
    url,
    actionName,
    loop = THREE.LoopRepeat,
    fadeIn = 0.3,
    fadeOut = 0.2,
}: Props) {
    const { scene, animations } = useGLTF(url);
    const root = useMemo(() => scene, [scene]); // 綁定 animations 的 root
    const { actions, names } = useAnimations(animations, root);

    useEffect(() => {
        if (!animations || animations.length === 0) return;

        // 取得要播放的動畫清單
        const targets = actionName ? [actionName] : names;

        // 啟動動畫
        targets.forEach((name) => {
            const act = actions[name];
            if (!act) return;
            act
                .reset()
                .setLoop(loop, Infinity)
                .clampWhenFinished = loop === THREE.LoopOnce;

            act.enabled = true;
            act.fadeIn(fadeIn).play();
        });

        // 卸載/切換時收尾
        return () => {
            targets.forEach((name) => {
                const act = actions[name];
                if (!act) return;
                act.fadeOut(fadeOut);
                // 可選：act.stop(); // 若不想做淡出，直接停止
            });
        };
    }, [actions, names, animations, actionName, loop, fadeIn, fadeOut]);

    // 稍微抬高避免與地面 Z-fighting（可按需移除）
    scene.position.y = 0.01;

    return <primitive object={scene} scale={[2, 2, 2]} />;
}

// 提前快取
useGLTF.preload('/models/waving.glb');
