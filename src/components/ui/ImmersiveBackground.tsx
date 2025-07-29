'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ImmersiveBackground() {
  const { scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.4, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Optimized star counts for performance
  const smallStarCount = 100;
  const mediumStarCount = 100;
  const largeStarCount = 100;
  const shootingStarCount = 100;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-accent/15"
        style={{
          y: backgroundY,
          opacity,
          scale,
        }}
      />
      
      {/* Small Twinkling Stars */}
      {isClient && (
        <div className="absolute inset-0">
          {[...Array(smallStarCount)].map((_, i) => (
            <motion.div
              key={`small-${i}`}
              className="absolute w-1 h-1 bg-white/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Medium Stars with Pulse */}
      {isClient && (
        <div className="absolute inset-0">
          {[...Array(mediumStarCount)].map((_, i) => (
            <motion.div
              key={`medium-${i}`}
              className="absolute w-1.5 h-1.5 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 0.9, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Large Bright Stars */}
      {isClient && (
        <div className="absolute inset-0">
          {[...Array(largeStarCount)].map((_, i) => (
            <motion.div
              key={`large-${i}`}
              className="absolute w-2 h-2 bg-primary/50 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Shooting Stars */}
      {isClient && (
        <div className="absolute inset-0">
          {[...Array(shootingStarCount)].map((_, i) => (
            <motion.div
              key={`shooting-${i}`}
              className="absolute w-1 h-1 bg-white/60 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, isMobile ? 100 : 200],
                y: [0, isMobile ? -50 : -100],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: isMobile ? 3 + Math.random() * 2 : 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 8,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Background Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-primary/3 via-transparent to-transparent"
        style={{
          opacity,
        }}
      />
    </div>
  );
}

export function SpatialOverlay() {
  const { scrollYProgress } = useScroll();
  
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 0.05, 0.05, 0]);
  const overlayBlur = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-10"
      style={{
        opacity: overlayOpacity,
        filter: `blur(${overlayBlur}px)`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-transparent" />
    </motion.div>
  );
}
