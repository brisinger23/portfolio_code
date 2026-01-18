"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CursorTrail = () => {
    const [mounted, setMounted] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth springs for the cursor follower
    const springConfig = { damping: 25, stiffness: 200 };
    const trailX = useSpring(mouseX, springConfig);
    const trailY = useSpring(mouseY, springConfig);

    useEffect(() => {
        setMounted(true);
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    if (!mounted) return null;

    return (
        <>
            {/* Primary Glow Follower */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-blue-500/50 pointer-events-none z-50 flex items-center justify-center translate-[-50%,-50%]"
                style={{
                    x: trailX,
                    y: trailY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            >
                <div className="w-1 h-1 bg-blue-500 rounded-full" />
            </motion.div>

            {/* Larger Background Glow */}
            <motion.div
                className="fixed top-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none z-[-1] translate-[-50%,-50%]"
                style={{
                    x: trailX,
                    y: trailY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
        </>
    );
};

export default CursorTrail;
