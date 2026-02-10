import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CountdownProps {
    size?: 'small' | 'large';
}

const Countdown = ({ size = 'large' }: CountdownProps) => {
    const calculateTimeLeft = () => {
        const eventDate = new Date('2026-03-03T00:00:00');
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

    const gapClass = size === 'large' ? 'gap-8 md:gap-20' : 'gap-3 md:gap-8';
    const separatorHeight = size === 'large' ? 'h-24' : 'h-12';

    return (
        <div className={`flex flex-wrap items-center justify-center ${gapClass} max-w-7xl mx-auto px-4`}>
            <TimeUnit value={timeLeft.days} label="Días" delay={0.2} size={size} />
            <div className={`hidden md:block ${separatorHeight} w-px bg-feciit-dark/10 rotate-12`}></div>
            <TimeUnit value={timeLeft.hours} label="Horas" delay={0.4} size={size} />
            <div className={`hidden md:block ${separatorHeight} w-px bg-feciit-dark/10 rotate-12`}></div>
            <TimeUnit value={timeLeft.minutes} label="Minutos" delay={0.6} size={size} />
            <div className={`hidden md:block ${separatorHeight} w-px bg-feciit-dark/10 rotate-12`}></div>
            <TimeUnit value={timeLeft.seconds} label="Segundos" delay={0.8} size={size} />
        </div>
    );
};

interface TimeUnitProps {
    value: number;
    label: string;
    delay: number;
    size: 'small' | 'large';
}

const TimeUnit = ({ value, label, delay, size }: TimeUnitProps) => {
    const numberSize = size === 'large' ? 'text-[12vw] md:text-[10vw]' : 'text-[6vw] md:text-[3.5vw] text-white';
    const labelSize = size === 'large' ? 'text-sm md:text-xl text-feciit-dark/50' : 'text-[10px] md:text-sm text-white/70';
    const labelSpacing = size === 'large' ? 'mt-2 md:mt-4 tracking-[0.3em]' : 'mt-1 md:mt-2 tracking-[0.2em]';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: delay }}
            className="flex flex-col items-center"
        >
            <div className="relative group">
                <span className={`${numberSize} font-bold leading-none tracking-tighter select-none tabular-nums`}>
                    {value.toString().padStart(2, '0')}
                </span>
            </div>
            <span className={`${labelSize} uppercase ${labelSpacing} font-medium`}>
                {label}
            </span>
        </motion.div>
    );
};

export default Countdown;
