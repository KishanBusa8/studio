'use client';

import { useEffect, useRef } from 'react';

export default function SmoothScroll() {
  const tickingRef = useRef(false);
  const lastScrollY = useRef(0);

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
      if (!tickingRef.current) {
        requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          
          // Only update if scroll position changed significantly
          if (Math.abs(scrolled - lastScrollY.current) > 5) {
            // Add parallax effect to background elements
            const parallaxElements = document.querySelectorAll('[data-parallax]');
            
            parallaxElements.forEach((element) => {
              const speed = parseFloat(element.getAttribute('data-parallax') || '0.3');
              const yPos = -(scrolled * speed);
              (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
            });
            
            lastScrollY.current = scrolled;
          }
          
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    // Throttled scroll listener
    let scrollTimeout: NodeJS.Timeout;
    const throttledScroll = () => {
      if (scrollTimeout) return;
      
      scrollTimeout = setTimeout(() => {
        handleScroll();
        scrollTimeout = null as any;
      }, 16); // ~60fps
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('scroll', throttledScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  return null;
} 