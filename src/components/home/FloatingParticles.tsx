"use client";

import { useEffect, useState } from "react";

const PARTICLES = ["𝓐", "𝔅", "ℭ", "✦", "✧", "☾", "★"];

interface Particle {
    id: number;
    char: string;
    left: number;
    animationDuration: number;
    delay: number;
    size: number;
}

export const FloatingParticles = () => {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const newParticles = Array.from({ length: 8 }).map((_, i) => ({
            id: i,
            char: PARTICLES[Math.floor(Math.random() * PARTICLES.length)],
            left: Math.random() * 100,
            animationDuration: 18 + Math.random() * 20,
            delay: Math.random() * 10,
            size: 14 + Math.random() * 20,
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
            {particles.map((p) => (
                <span
                    key={p.id}
                    className="absolute bottom-[-10%] select-none text-white/[0.08] font-display"
                    style={{
                        left: `${p.left}%`,
                        fontSize: `${p.size}px`,
                        opacity: 0,
                        animation: `float ${p.animationDuration}s linear ${p.delay}s infinite`,
                    }}
                >
                    {p.char}
                </span>
            ))}
        </div>
    );
};
