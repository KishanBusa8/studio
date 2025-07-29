'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface SpatialContainerProps {
  children: React.ReactNode;
  className?: string;
  depth?: number;
  delay?: number;
}

export default function SpatialContainer({ 
  children, 
  className = '', 
  depth = 0,
  delay = 0 
}: SpatialContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50 * depth, -50 * depth]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9 + depth * 0.05, 1, 0.9 + depth * 0.05]);

  const springConfig = { stiffness: 50, damping: 20, restDelta: 0.001 };
  const springY = useSpring(y, springConfig);
  const springOpacity = useSpring(opacity, springConfig);
  const springScale = useSpring(scale, springConfig);

  return (
    <motion.div
      ref={ref}
      className={`relative perspective-1000 ${className}`}
      style={{
        y: springY,
        opacity: springOpacity,
        scale: springScale,
      }}
      initial={{ opacity: 0, y: 50 * depth, scale: 0.9 + depth * 0.05 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { 
          duration: 0.8, 
          delay: delay * 0.1,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }}
      viewport={{ once: true, margin: "-10%" }}
    >
      <div className="transform-gpu">
        {children}
      </div>
    </motion.div>
  );
}

export function SpatialSection({ 
  children, 
  className = '', 
  depth = 0,
  delay = 0 
}: SpatialContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100 * depth, -100 * depth]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.section
      ref={ref}
      className={`min-h-[80vh] flex items-center justify-center relative overflow-hidden ${className}`}
      style={{
        y,
        opacity,
        scale,
      }}
      initial={{ opacity: 0, y: 150 * depth, scale: 0.8 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { 
          duration: 1, 
          delay: delay * 0.2,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }}
      viewport={{ once: true, margin: "-5%" }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
        {children}
      </div>
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-transparent"
        style={{ 
          transform: `translateZ(${depth * 25}px)`,
          filter: `blur(${Math.abs(depth)}px)`
        }}
      />
    </motion.section>
  );
} 