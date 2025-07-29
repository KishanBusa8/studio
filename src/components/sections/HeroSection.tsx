
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <div className="text-center relative z-10 mt-16 md:mt-10">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mx-auto mb-6 h-28 w-28 md:h-36 md:w-36 rounded-full overflow-hidden shadow-xl border-4 border-primary/50 group spatial-depth-2"
      >
        <Image
          src="/profile.jpeg"
          alt="Profile Picture"
          width={200}
          height={200}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 ease-out"
          data-ai-hint="professional portrait Kishan Busa"
        />
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent spatial-depth-3"
      >
        Kishan Busa
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-lg md:text-xl text-primary/90 mb-6 font-headline spatial-depth-2"
      >
        FULLSTACK MOBILE APP DEVELOPER
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-4xl mx-auto text-base md:text-xl text-left text-foreground/90 mb-8 space-y-4 spatial-depth-1"
      >
         <p>
          I am a highly skilled and results-driven FullStack Developer with over 6 years of experience in mobile application development using Flutter and React Native, and 2 years of expertise in backend and frontend development with Node.js, Nest.js, and React.js. My passion lies in creating robust, scalable solutions and ensuring seamless user experiences across mobile and web platforms.
        </p>
        <p>
          With a deep understanding of the entire application lifecycle, I specialize in Use Case Analysis, Functional Specifications, Knowledge Transfer, and Business Analysis. My expertise in MVC and MVVM architecture and state management techniques like Flutter recommends MVVM, Stacked, BLoC, GetX, and Provider patterns, ensuring the development of responsive, high-performance applications.
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Button 
          variant="outline" 
          size="lg" 
          asChild 
          className="border-accent/50 text-accent hover:bg-accent hover:text-neutral-900 group spatial-depth-4 bg-background/80 backdrop-blur-sm"
        >
          <Link href="#projects">
            View My Work <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform duration-200" />
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}
