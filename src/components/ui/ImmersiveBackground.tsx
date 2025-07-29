'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ImmersiveBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20"
        style={{
          y: backgroundY,
          opacity,
          scale,
        }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Depth layers */}
      <div className="absolute inset-0 perspective-1000">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 border border-primary/10 rounded-full"
            style={{
              transform: `translateZ(${i * 100}px) scale(${1 - i * 0.1})`,
            }}
            animate={{
              rotateY: [0, 360],
              rotateX: [0, 180],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Ambient light effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent"
        style={{
          opacity,
        }}
      />
    </div>
  );
}

export function SpatialOverlay() {
  const { scrollYProgress } = useScroll();
  
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 0.1, 0.1, 0]);
  const overlayBlur = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-10"
      style={{
        opacity: overlayOpacity,
        filter: `blur(${overlayBlur}px)`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/5 to-transparent" />
    </motion.div>
  );
} 