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

  const y = useTransform(scrollYProgress, [0, 1], [100 * depth, -100 * depth]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8 + depth * 0.1, 1, 0.8 + depth * 0.1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [15 * depth, -15 * depth]);

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const springY = useSpring(y, springConfig);
  const springOpacity = useSpring(opacity, springConfig);
  const springScale = useSpring(scale, springConfig);
  const springRotateX = useSpring(rotateX, springConfig);

  return (
    <motion.div
      ref={ref}
      className={`relative perspective-1000 ${className}`}
      style={{
        y: springY,
        opacity: springOpacity,
        scale: springScale,
        rotateX: springRotateX,
      }}
      initial={{ opacity: 0, y: 100 * depth, scale: 0.8 + depth * 0.1 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { 
          duration: 1.2, 
          delay: delay * 0.2,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }}
      viewport={{ once: true, margin: "-20%" }}
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

  const y = useTransform(scrollYProgress, [0, 1], [200 * depth, -200 * depth]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.7, 1, 1, 0.7]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-10 * depth, 10 * depth]);

  return (
    <motion.section
      ref={ref}
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${className}`}
      style={{
        y,
        opacity,
        scale,
        rotateY,
      }}
      initial={{ opacity: 0, y: 300 * depth, scale: 0.7, rotateY: -20 * depth }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        rotateY: 0,
        transition: { 
          duration: 1.5, 
          delay: delay * 0.3,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }}
      viewport={{ once: true, margin: "-10%" }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
        {children}
      </div>
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-transparent"
        style={{ 
          transform: `translateZ(${depth * 50}px)`,
          filter: `blur(${Math.abs(depth) * 2}px)`
        }}
      />
    </motion.section>
  );
} 