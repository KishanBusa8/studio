"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark' >('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark'  || 'dark';
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = window.document.documentElement;
  
    root.classList.toggle('dark', theme === 'dark');
    
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    const themes: ('light' | 'dark' )[] = ['light', 'dark'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-9 h-9">
        <Sun className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="w-9 h-9 rounded-full hover:bg-accent/10 transition-colors duration-300 group"
      title={`Current theme: ${theme}`}
    >
      {theme === 'light' && <Sun className="h-4 w-4 text-primary group-hover:text-accent transition-colors duration-300" />}
      {theme === 'dark' && <Moon className="h-4 w-4 text-primary group-hover:text-accent transition-colors duration-300" />}
    </Button>
  );
} 