import React from 'react';
import { motion } from 'framer-motion';

export default function Navigation() {
    return (
        <nav
            className="absolute top-0 left-0 right-0 z-50 h-20 flex items-center px-8"
        >
            <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
                <a href="#" className="text-3xl font-bold text-black tracking-tighter hover:opacity-80 transition-opacity">
                    FECIIT <span className="text-black font-light">2026</span>
                </a>


                <div className="hidden md:flex items-center gap-4 font-semibold text-base">
                    {['Evento', 'Programa', 'Patrocinadores'].map((item) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="px-6 py-2.5 bg-white/5 text-white rounded-full border border-white/20 hover:bg-white/10 transition-all backdrop-blur-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {item}
                        </motion.a>
                    ))}

                    <motion.a
                        href="#join"
                        className="px-8 py-3 bg-white/10 text-white rounded-full border border-white/20 hover:bg-white hover:text-feciit-dark transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] backdrop-blur-md"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Participa
                    </motion.a>
                </div>            </div>
        </nav>
    );
}
