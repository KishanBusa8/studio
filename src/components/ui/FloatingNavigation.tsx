'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CodeXml, Menu, X } from 'lucide-react';

const navItems = [
  { href: '#profile', label: 'Profile' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#blog', label: 'Blog' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function FloatingNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');
  const { scrollYProgress } = useScroll();

  const navOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const navY = useTransform(scrollYProgress, [0, 0.1], [-100, 0]);
  const navScale = useTransform(scrollYProgress, [0, 0.1], [0.8, 1]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.replace('#', ''));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Floating Navigation */}
      <motion.nav
        className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 hidden lg:block"
        style={{
          opacity: navOpacity,
          y: navY,
          scale: navScale,
        }}
      >
        <div className="flex items-center space-x-2 bg-background/80 backdrop-blur-md border border-primary/20 rounded-full px-6 py-3 shadow-2xl">
          <Link href="/" className="flex items-center gap-2 mr-4">
            <CodeXml className="h-6 w-6 text-primary" />
            <span className="font-headline text-lg font-bold text-primary">DevCard</span>
          </Link>
          
          {navItems.map((item) => (
            <motion.div
              key={item.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                size="sm"
                asChild
                className={`relative text-sm font-medium transition-all duration-300 ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground/70 hover:text-primary'
                }`}
              >
                <Link href={item.href}>
                  {item.label}
                  {activeSection === item.href.replace('#', '') && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Floating Navigation */}
      <motion.div
        className="fixed top-4 right-4 z-50 lg:hidden"
        style={{
          opacity: navOpacity,
          y: navY,
          scale: navScale,
        }}
      >
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-background/80 backdrop-blur-md border-primary/20 shadow-2xl"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            className="absolute top-12 right-0 bg-background/90 backdrop-blur-md border border-primary/20 rounded-lg shadow-2xl p-4 min-w-[200px]"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  asChild
                  className={`justify-start text-left ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground/70 hover:text-primary'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary/20 z-40"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "0%",
        }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-accent"
          style={{
            scaleX: scrollYProgress,
            transformOrigin: "0%",
          }}
        />
      </motion.div>
    </>
  );
} 