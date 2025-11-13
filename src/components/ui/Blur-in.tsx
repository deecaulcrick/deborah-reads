'use client';
import { motion, useInView } from 'motion/react';
import * as React from 'react';

export const BlurIn = ({ children }: { children: React.ReactNode }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <motion.h1
            ref={ref}
            initial={{ filter: 'blur(20px)', opacity: 0 }}
            animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
            transition={{ duration: 1.2 }}
            className="mb-4 text-4xl md:text-8xl font-heading tracking-tighter text-center"
        >
            {children}
        </motion.h1>
    );
};