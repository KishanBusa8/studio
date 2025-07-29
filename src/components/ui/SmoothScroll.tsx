'use client';

import { useEffect, useRef, useState } from 'react';

export default function SmoothScroll() {
  const tickingRef = useRef(false);
  const lastScrollY = useRef(0);
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  const throttleTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash && link.origin === window.location.origin) {
        e.preventDefault();
        const targetId = link.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80; // Reduced offset
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    // Add event listener for smooth scrolling
    document.addEventListener('click', handleAnchorClick);

    // Optimized scroll behavior for 3D effect
    const handleScroll = () => {
      if (tickingRef.current) return;
      
      const currentScrollY = window.scrollY;
      const scrollDiff = Math.abs(currentScrollY - lastScrollY.current);
      
      // Only update if scroll difference is significant
      if (scrollDiff < (isLowPerformance ? 3 : 5)) return;
      
      tickingRef.current = true;
      lastScrollY.current = currentScrollY;

      requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        
        // Only update if scroll position changed significantly
        if (Math.abs(scrolled - lastScrollY.current) > 5) {
          // Add parallax effect to background elements (only on high-performance devices)
          if (!isLowPerformance) {
            const parallaxElements = document.querySelectorAll('[data-parallax]');
            
            parallaxElements.forEach((element) => {
              const speed = parseFloat(element.getAttribute('data-parallax') || '0.2');
              const yPos = -(scrolled * speed);
              (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
            });
          }
          
          lastScrollY.current = scrolled;
        }
        
        tickingRef.current = false;
      });
    };

    // Throttled scroll listener for better performance
    const throttledScroll = () => {
      if (throttleTimeoutRef.current) return;
      
      throttleTimeoutRef.current = setTimeout(() => {
        handleScroll();
        throttleTimeoutRef.current = null;
      }, isLowPerformance ? 32 : 16); // ~30fps on low-performance, ~60fps on high-performance
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('scroll', throttledScroll);
      if (throttleTimeoutRef.current) {
        clearTimeout(throttleTimeoutRef.current);
      }
    };
  }, [isLowPerformance]);

  return null;
} 