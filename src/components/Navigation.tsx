import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
    theme?: 'light' | 'dark';
}

export default function Navigation({ theme = 'dark' }: NavigationProps) {
    const [isOpen, setIsOpen] = useState(false);

    // If mobile menu is open, force light theme styles for visibility against white background
    const activeTheme = isOpen ? 'light' : theme;
    const isLight = activeTheme === 'light';

    // Styles adapted from previous version to maintain consistency
    const linkBaseClass = isLight
        ? "px-6 py-2.5 bg-blue-50/80 text-feciit-dark rounded-full border border-blue-100 hover:bg-blue-100 transition-all font-medium backdrop-blur-sm"
        : "px-6 py-2.5 bg-white/5 text-white rounded-full border border-white/20 hover:bg-white/10 transition-all backdrop-blur-sm";

    const ctaBaseClass = isLight
        ? "px-6 md:px-8 py-2.5 md:py-3 bg-feciit-dark text-white rounded-full border border-transparent hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-semibold text-sm md:text-base relative z-50"
        : "px-6 md:px-8 py-2.5 md:py-3 bg-white/10 text-white rounded-full border border-white/20 hover:bg-white hover:text-feciit-dark transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] backdrop-blur-md font-semibold text-sm md:text-base relative z-50";

    const logoClass = "text-2xl md:text-3xl font-bold tracking-tighter hover:opacity-80 transition-opacity relative z-50 " + (isLight ? "text-feciit-dark" : "text-white");

    // Links configuration (Programa removed)
    const links = [
        { name: 'Evento', href: '/#evento' },
        { name: 'Ediciones', href: '/ediciones-anteriores' },
        { name: 'Talleres', href: '/talleres' },
        { name: 'Patrocinadores', href: '/patrocinadores' }
    ];

    return (
        <nav className="absolute top-0 left-0 right-0 z-50 h-20 flex items-center px-4 md:px-8">
            <div className="w-full max-w-7xl mx-auto flex items-center justify-between">

                {/* Logo */}
                <a href="/" className={logoClass}>
                    FECIIT <span className={isLight ? "text-feciit-blue font-light" : "font-light opacity-80"}>2026</span>
                </a>

                <div className="flex items-center gap-3 md:gap-4">

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-4 font-semibold text-base">
                        {links.map((item) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                className={linkBaseClass}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </div>

                    {/* Participa Button (Always Visible) */}
                    <div className="relative z-50 flex items-center">
                        <motion.a
                            href="/participa"
                            className={ctaBaseClass}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="flex items-center gap-2">
                                Entradas
                            </span>
                        </motion.a>
                        <motion.svg
                            className="absolute -bottom-8 left-1/2 -translate-x-1/2 pointer-events-none"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={isLight ? "currentColor" : "white"}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            animate={{ y: [0, -3, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        >
                            <path d="m18 15-6-6-6 6" />
                        </motion.svg>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`md:hidden relative z-50 p-2 focus:outline-none ${isLight ? "text-feciit-dark" : "text-white"}`}
                    >
                        {isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center p-8 space-y-8"
                    >
                        {links.map((item) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-3xl font-bold text-feciit-dark hover:text-feciit-blue transition-colors"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
