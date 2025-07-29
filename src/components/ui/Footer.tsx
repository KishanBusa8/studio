"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="border-t border-primary/20 bg-background/80 backdrop-blur-md py-8 relative z-30"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.p 
          className="text-sm text-foreground/70"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          &copy; {year} Made with ❤️
          <br />Built by developer, for developers.
        </motion.p>
      </div>
    </motion.footer>
  );
}
