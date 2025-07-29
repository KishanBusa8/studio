'use client';

import { useEffect } from 'react';

export default function SmoothScroll() {
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
          const offsetTop = targetElement.offsetTop - 100; // Account for floating nav
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    // Add event listener for smooth scrolling
    document.addEventListener('click', handleAnchorClick);

    // Custom scroll behavior for 3D effect
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Add parallax effect to background elements
          const scrolled = window.pageYOffset;
          const parallaxElements = document.querySelectorAll('[data-parallax]');
          
          parallaxElements.forEach((element) => {
            const speed = parseFloat(element.getAttribute('data-parallax') || '0.5');
            const yPos = -(scrolled * speed);
            (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
          });
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
} 