import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
    const calculateTimeLeft = () => {
        const eventDate = new Date('2026-02-21T00:00:00');
        const now = new Date();
        const difference = +eventDate - +now;

        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    if (!mounted) return null;

    return (
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-20 max-w-7xl mx-auto px-4">
            <TimeUnit value={timeLeft.days} label="Días" delay={0.2} />
            <div className="hidden md:block h-24 w-px bg-feciit-dark/10 rotate-12"></div>
            <TimeUnit value={timeLeft.hours} label="Horas" delay={0.4} />
            <div className="hidden md:block h-24 w-px bg-feciit-dark/10 rotate-12"></div>
            <TimeUnit value={timeLeft.minutes} label="Minutos" delay={0.6} />
            <div className="hidden md:block h-24 w-px bg-feciit-dark/10 rotate-12"></div>
            <TimeUnit value={timeLeft.seconds} label="Segundos" delay={0.8} />
        </div>
    );
};

const TimeUnit = ({ value, label, delay }: { value: number, label: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: delay }}
        className="flex flex-col items-center"
    >
        <div className="relative group">
            <span className="text-[12vw] md:text-[10vw] font-bold text-feciit-dark leading-none tracking-tighter select-none tabular-nums">
                {value.toString().padStart(2, '0')}
            </span>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20 pointer-events-none mix-blend-overlay"></div>
        </div>
        <span className="text-sm md:text-xl uppercase tracking-[0.3em] text-feciit-dark/50 font-medium mt-2 md:mt-4">
            {label}
        </span>
    </motion.div>
);

export default Countdown;
