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
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  
  useEffect(() => {
    const checkPerformance = () => {
      const isLowPerf = window.innerWidth < 1024 || 
                       navigator.hardwareConcurrency < 4 ||
                       /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsLowPerformance(isLowPerf);
    };
    
    checkPerformance();
    window.addEventListener('resize', checkPerformance);
    return () => window.removeEventListener('resize', checkPerformance);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Optimized transforms for better performance
  const y = useTransform(scrollYProgress, [0, 1], [30 * depth, -30 * depth]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95 + depth * 0.02, 1, 0.95 + depth * 0.02]);

  // Simplified spring config for better performance
  const springConfig = { 
    stiffness: isLowPerformance ? 30 : 40, 
    damping: isLowPerformance ? 15 : 18, 
    restDelta: 0.001 
  };
  
  const springY = useSpring(y, springConfig);
  const springOpacity = useSpring(opacity, springConfig);
  const springScale = useSpring(scale, springConfig);

  return (
    <motion.div
      ref={ref}
      className={`relative perspective-1000 ${className}`}
      style={{
        y: isLowPerformance ? y : springY,
        opacity: isLowPerformance ? opacity : springOpacity,
        scale: isLowPerformance ? scale : springScale,
      }}
      initial={{ opacity: 0, y: 30 * depth, scale: 0.95 + depth * 0.02 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { 
          duration: isLowPerformance ? 0.6 : 0.8, 
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
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  
  useEffect(() => {
    const checkPerformance = () => {
      const isLowPerf = window.innerWidth < 1024 || 
                       navigator.hardwareConcurrency < 4 ||
                       /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsLowPerformance(isLowPerf);
    };
    
    checkPerformance();
    window.addEventListener('resize', checkPerformance);
    return () => window.removeEventListener('resize', checkPerformance);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Optimized transforms for better performance
  const y = useTransform(scrollYProgress, [0, 1], [60 * depth, -60 * depth]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.9]);

  return (
    <motion.section
      ref={ref}
      className={`min-h-[90vh] md:min-h-[100vh] flex items-center justify-center relative overflow-hidden py-16 md:py-24 ${className}`}
      style={{
        y: isLowPerformance ? y : y,
        opacity: isLowPerformance ? opacity : opacity,
        scale: isLowPerformance ? scale : scale,
      }}
      initial={{ opacity: 0, y: 100 * depth, scale: 0.9 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { 
          duration: isLowPerformance ? 0.8 : 1, 
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
          transform: `translateZ(${depth * 20}px)`,
          filter: `blur(${Math.abs(depth)}px)`
        }}
      />
    </motion.section>
  );
} 