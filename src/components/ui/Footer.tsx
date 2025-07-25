"use client";

import { useState, useEffect } from 'react';

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-border/40 bg-background/95 py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {year} DevCard. Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
