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

  const particleCount = isMobile ? 15 : 25;

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
      
      {isClient && (
        <div className="absolute inset-0">
          {[...Array(particleCount)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {isClient && !isMobile && (
        <div className="absolute inset-0 perspective-1000">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 border border-primary/5 rounded-full"
              style={{
                transform: `translateZ(${i * 50}px) scale(${1 - i * 0.05})`,
              }}
              animate={{
                rotateY: [0, 360],
              }}
              transition={{
                duration: 30 + i * 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      )}

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
