import React from 'react';
import { motion } from 'framer-motion';

// Note: In Astro + React, images often need to be passed as props or handled via public folder if direct import is tricky with Vite
// For simplicity/reliability with dynamic motion, we'll assume the image is processed or use a direct path if in public, 
// OR we can import it in the parent Astro file and pass it down.
// Let's rely on standard img tag since the user requested "5thedition.png" which we know is in assets.
// To use it here without import issues, we'll accept it as a prop from the Astro parent.

interface HeroProps {
    logoSrc: string; // "5thedition.png"
}

export default function Hero({ logoSrc }: HeroProps) {
    return (
        <section className="relative h-[120vh] w-full overflow-hidden">
            {/* Background Gradient: Planet-like effect from Black -> Blue -> White */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at bottom right, #000000 0%, #000814 15%, #001a3d 30%, #003d7a 50%, #086cc5 70%, #4a9fe8 85%, #ffffff 100%)'
                }}
            />

            {/* Elliptical White Line - very thin at 35% of gradient */}
            <div
                className="absolute inset-0 z-[1] pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at bottom right, transparent 0%, transparent 34.95%, white 35%, transparent 35.05%, transparent 100%)'
                }}
            />

            {/* Abstract Liquid Glass Shapes */}
            <motion.div
                animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                    x: [0, 50, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none"
            />
            <motion.div
                animate={{
                    rotate: -360,
                    scale: [1, 1.2, 1],
                    y: [0, -50, 0]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-1/3 right-1/3 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none"
            />

            {/* Content Container - positioned at end of screen viewport */}
            <div className="relative h-screen w-full flex flex-col justify-end p-8 md:p-16">
                <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">

                    {/* Bottom Left: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="space-y-6 text-left"
                    >
                        {/* Mobile Logo 5th Edition - shown only on mobile above pill */}
                        <motion.img
                            src={logoSrc}
                            alt="5th Edition"
                            className="w-24 mb-4 md:hidden block drop-shadow-xl ml-auto"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="inline-block px-8 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-xl font-medium tracking-wide shadow-lg"
                        >
                            Todo tiene su ciencia
                        </motion.div>

                        <h1 className="text-8xl md:text-[10rem] font-bold tracking-tighter text-white leading-none drop-shadow-xl space-y-0">
                            <span className="block">FECIIT</span>
                        </h1>
                    </motion.div>

                    {/* Bottom Right: Logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, delay: 0.4, type: "spring" }}
                        className="relative hidden md:block"
                    >
                        <div className="absolute inset-0 bg-feciit-blue/30 blur-2xl rounded-full -z-10" />
                        <img
                            src={logoSrc}
                            alt="5th Edition"
                            className="w-32 md:w-48 h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
