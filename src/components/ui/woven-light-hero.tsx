import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import * as THREE from 'three';
import { CheckCircle2 } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface WovenLightBackgroundProps {
    className?: string;
    overlayClassName?: string;
    canvasClassName?: string;
}

export const WovenLightBackground = ({
    className = 'absolute inset-0 z-0 overflow-hidden',
    overlayClassName = 'absolute top-0 right-0 h-full w-1/2 opacity-10 pointer-events-none',
    canvasClassName = 'absolute inset-0 z-0 h-full w-full',
}: WovenLightBackgroundProps) => {
    const { theme } = useTheme();

    return (
        <div className={className}>
            <WovenCanvas key={theme} isDarkMode={theme === 'dark'} className={canvasClassName} />

            <div className={overlayClassName}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_70%)]" />
            </div>
        </div>
    );
};

// --- Main Hero Component ---
export const WovenLightHero = () => {
    const textControls = useAnimation();
    const buttonControls = useAnimation();

    useEffect(() => {
        // Add a more elegant font
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        textControls.start(i => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1 + 0.5,
                duration: 1.2,
                ease: [0.2, 0.65, 0.3, 0.9]
            }
        }));
        buttonControls.start({
            opacity: 1,
            transition: { delay: 1.5, duration: 1 }
        });

        return () => {
            document.head.removeChild(link);
        }
    }, [textControls, buttonControls]);

    const headline = "Explore Solby Features";

    return (
        <div className="relative flex h-[62vh] min-h-[460px] w-full flex-col items-center justify-center overflow-hidden bg-background">
            <WovenLightBackground />

            <div className="relative z-10 mx-auto w-full max-w-4xl px-4 pt-16 text-center pointer-events-none">
                <h1 className="text-4xl md:text-6xl lg:text-7xl text-foreground font-bold tracking-tight" style={{ textShadow: '0 0 22px rgba(59, 130, 246, 0.16)' }}>
                    {headline.split(" ").map((word, i) => (
                        <span key={i} className="inline-block">
                            {word.split("").map((char, j) => (
                                <motion.span key={j} custom={i * 5 + j} initial={{ opacity: 0, y: 50 }} animate={textControls} style={{ display: 'inline-block' }}>
                                    {char}
                                </motion.span>
                            ))}
                            {i < headline.split(" ").length - 1 && <span>&nbsp;</span>}
                        </span>
                    ))}
                </h1>
                <motion.p
                    custom={headline.length}
                    initial={{ opacity: 0, y: 30 }}
                    animate={textControls}
                    className="mx-auto mt-5 max-w-2xl text-base md:text-lg text-muted-foreground"
                >
                    Review Solby's finance, operations, analytics, and people tools in a clearer, product-first layout.
                </motion.p>
                <motion.div initial={{ opacity: 0 }} animate={buttonControls} className="mt-10 flex flex-wrap justify-center gap-4 pointer-events-none">
                </motion.div>

                {/* trust row (hero footer) */}
                <motion.div initial={{ opacity: 0 }} animate={buttonControls} className="mt-8 flex flex-wrap justify-center gap-5 text-sm text-center text-muted-foreground transition-opacity">
                    {["Finance", "Operations", "AI Analytics", "People"].map((t) => (
                        <span key={t} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            {t}
                        </span>
                    ))}
                </motion.div>
            </div>

        </div>
    );
};

// --- Three.js Canvas Component ---
const WovenCanvas = ({ isDarkMode, className }: { isDarkMode: boolean; className?: string }) => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);

        const mouse = new THREE.Vector2(0, 0);
        const clock = new THREE.Clock();

        // --- Woven Silk ---
        const particleCount = 50000;
        const positions = new Float32Array(particleCount * 3);
        const originalPositions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const velocities = new Float32Array(particleCount * 3);

        const geometry = new THREE.BufferGeometry();
        const torusKnot = new THREE.TorusKnotGeometry(1.5, 0.5, 200, 32);

        for (let i = 0; i < particleCount; i++) {
            const vertexIndex = i % torusKnot.attributes.position.count;
            const x = torusKnot.attributes.position.getX(vertexIndex);
            const y = torusKnot.attributes.position.getY(vertexIndex);
            const z = torusKnot.attributes.position.getZ(vertexIndex);

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
            originalPositions[i * 3] = x;
            originalPositions[i * 3 + 1] = y;
            originalPositions[i * 3 + 2] = z;

            const color = new THREE.Color();
            // Shift colors closer to the Solby blue/emerald greens
            const hue = Math.random() < 0.7 ? 0.6 : 0.4; // 60% blueish, 40% greenish
            color.setHSL(hue, isDarkMode ? 0.8 : 0.9, isDarkMode ? 0.6 : 0.35);
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;

            velocities[i * 3] = 0;
            velocities[i * 3 + 1] = 0;
            velocities[i * 3 + 2] = 0;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: isDarkMode ? 0.02 : 0.025,
            vertexColors: true,
            blending: isDarkMode ? THREE.AdditiveBlending : THREE.NormalBlending,
            transparent: true,
            opacity: isDarkMode ? 0.8 : 0.75,
            depthWrite: false,
        });

        const points = new THREE.Points(geometry, material);
        scene.add(points);

        const handleMouseMove = (event: MouseEvent) => {
            // Adjust mouse coordinates to be relative to the container if we want it to work cleanly within the hero section bounding box
            if (!mountRef.current) return;
            const rect = mountRef.current.getBoundingClientRect();

            mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        };
        window.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            requestAnimationFrame(animate);
            const elapsedTime = clock.getElapsedTime();

            const mouseWorld = new THREE.Vector3(mouse.x * 3, mouse.y * 3, 0);

            for (let i = 0; i < particleCount; i++) {
                const ix = i * 3;
                const iy = i * 3 + 1;
                const iz = i * 3 + 2;

                const currentPos = new THREE.Vector3(positions[ix], positions[iy], positions[iz]);
                const originalPos = new THREE.Vector3(originalPositions[ix], originalPositions[iy], originalPositions[iz]);
                const velocity = new THREE.Vector3(velocities[ix], velocities[iy], velocities[iz]);

                const dist = currentPos.distanceTo(mouseWorld);
                if (dist < 1.5) {
                    const force = (1.5 - dist) * 0.01;
                    const direction = new THREE.Vector3().subVectors(currentPos, mouseWorld).normalize();
                    velocity.add(direction.multiplyScalar(force));
                }

                // Return to original position
                const returnForce = new THREE.Vector3().subVectors(originalPos, currentPos).multiplyScalar(0.001);
                velocity.add(returnForce);

                // Damping
                velocity.multiplyScalar(0.95);

                positions[ix] += velocity.x;
                positions[iy] += velocity.y;
                positions[iz] += velocity.z;

                velocities[ix] = velocity.x;
                velocities[iy] = velocity.y;
                velocities[iz] = velocity.z;
            }
            geometry.attributes.position.needsUpdate = true;

            points.rotation.y = elapsedTime * 0.05;
            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            if (!mountRef.current) return;
            const width = window.innerWidth;
            const height = window.innerHeight * 0.8; // Match the 80vh roughly
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };
        window.addEventListener('resize', handleResize);

        // Initial size
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            if (mountRef.current && renderer.domElement && mountRef.current.contains(renderer.domElement)) {
                mountRef.current.removeChild(renderer.domElement);
                renderer.dispose();
                geometry.dispose();
                material.dispose();
            }
        };
    }, []);

    return <div ref={mountRef} className={className ?? 'absolute inset-0 z-0 h-full w-full'} />;
};
