'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ImmersiveBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // Parallax transforms for different layers
  const parallaxSlow = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const parallaxMedium = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const parallaxFast = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const parallaxVeryFast = useTransform(scrollYProgress, [0, 1], ['0%', '80%']);

  // Enhanced particle counts
  const particleCount = isMobile ? 30 : 50;
  const starCount = isMobile ? 15 : 25;
  const twinkleCount = isMobile ? 20 : 35;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient background with parallax */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20"
        style={{
          y: backgroundY,
          opacity,
          scale,
        }}
      />
      
      {/* Parallax Layer 1: Slow moving particles (far background) */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: parallaxSlow }}
      >
        {[...Array(particleCount)].map((_, i) => (
          <motion.div
            key={`slow-${i}`}
            className="absolute bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 1}px`,
              height: `${1 + Math.random() * 1}px`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1.2, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Parallax Layer 2: Medium moving stars */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: parallaxMedium }}
      >
        {[...Array(starCount)].map((_, i) => (
          <motion.div
            key={`medium-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1.3, 0],
              opacity: [0, 0.7, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          >
            <div className="w-2 h-2 bg-accent/40 rounded-full shadow-lg shadow-accent/30" />
          </motion.div>
        ))}
      </motion.div>

      {/* Parallax Layer 3: Fast moving twinkling stars */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: parallaxFast }}
      >
        {[...Array(twinkleCount)].map((_, i) => (
          <motion.div
            key={`fast-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.4, 1.4, 0.4],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          >
            <div className="w-1.5 h-1.5 bg-primary/70 rounded-full shadow-md shadow-primary/40" />
          </motion.div>
        ))}
      </motion.div>

      {/* Parallax Layer 4: Very fast moving bright stars (foreground) */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: parallaxVeryFast }}
      >
        {[...Array(starCount)].map((_, i) => (
          <motion.div
            key={`veryfast-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [0.6, 1.6, 0.6],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          >
            <div className="w-2.5 h-2.5 bg-white/80 rounded-full shadow-lg shadow-white/60" />
          </motion.div>
        ))}
      </motion.div>

      {/* Parallax Layer 5: Orbital rings with different speeds */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: parallaxSlow }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`orbital-${i}`}
            className="absolute border border-primary/20 rounded-full"
            style={{
              left: '50%',
              top: '50%',
              width: `${150 + i * 80}px`,
              height: `${150 + i * 80}px`,
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 30 + i * 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </motion.div>

      {/* Parallax Layer 6: Depth layers with scroll-based movement */}
      <motion.div 
        className="absolute inset-0 perspective-1000"
        style={{ y: parallaxMedium }}
      >
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`depth-${i}`}
            className="absolute inset-0 border border-primary/25 rounded-full"
            style={{
              transform: `translateZ(${i * 60}px) scale(${1 - i * 0.06})`,
            }}
            animate={{
              rotateY: [0, 360],
              rotateX: [0, 180],
            }}
            transition={{
              duration: 35 + i * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </motion.div>

      {/* Enhanced ambient light effect with parallax */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent"
        style={{
          opacity,
          y: parallaxSlow,
        }}
      />

      {/* Parallax Layer 7: Shooting stars with scroll-based movement */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: parallaxVeryFast }}
      >
        {[...Array(isMobile ? 2 : 4)].map((_, i) => (
          <motion.div
            key={`shooting-${i}`}
            className="absolute w-1 h-1 bg-accent/90 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 250],
              y: [0, -250],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "linear",
            }}
          />
        ))}
      </motion.div>

      {/* Parallax Layer 8: Floating orbs with different speeds */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: parallaxFast }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          >
            <div className="w-3 h-3 bg-accent/30 rounded-full shadow-lg shadow-accent/20" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export function SpatialOverlay() {
  const { scrollYProgress } = useScroll();
  
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 0.1, 0.1, 0]);
  const overlayBlur = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const overlayY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-10"
      style={{
        opacity: overlayOpacity,
        filter: `blur(${overlayBlur}px)`,
        y: overlayY,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/8 to-transparent" />
    </motion.div>
  );
}
