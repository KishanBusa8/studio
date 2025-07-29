'use client';

import { Button } from '@/components/ui/button';
import type { SocialLink } from '@/types';
import { Github, Linkedin, Layers, Download, Mail } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const socialLinks: SocialLink[] = [
  { id: '1', name: 'GitHub', url: 'https://github.com/KishanBusa8', icon: Github },
  { id: '2', name: 'LinkedIn', url: 'https://linkedin.com/in/kishanbusa', icon: Linkedin },
  { id: '3', name: 'Stack Overflow', url: 'https://stackoverflow.com/users/10936691/kishan-busa', icon: Layers },
];

export default function ContactSection() {
  return (
    <div className="text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent spatial-depth-3"
      >
        Get In Touch
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-foreground/80 mb-12 max-w-lg mx-auto text-lg spatial-depth-2"
      >
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great.
      </motion.p>
        
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 spatial-depth-2"
      >
        <Button 
          size="lg" 
          asChild 
          className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl hover:shadow-primary/20 transition-all duration-300"
        >
          <Link href="mailto:kishanbusa08@gmail.com">
            <Mail className="mr-2 h-5 w-5" /> Email Me
          </Link>
        </Button>
        <Button 
          variant="outline" 
          size="lg" 
          asChild 
          className="border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground shadow-2xl hover:shadow-accent/20 transition-all duration-300 bg-background/80 backdrop-blur-sm"
        >
          <a href="/Kishan_Busa_Resume.pdf" download="Kishan_Busa_Resume.pdf">
            <Download className="mr-2 h-5 w-5" /> Download Resume
          </a>
        </Button>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex justify-center space-x-6 spatial-depth-1"
      >
        {socialLinks.map((link, index) => (
          <motion.div
            key={link.id}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            whileHover={{ scale: 1.2, rotate: 5 }}
          >
            <Button 
              variant="ghost" 
              size="icon" 
              asChild 
              className="w-14 h-14 rounded-full hover:bg-accent/10 transition-colors duration-300 group bg-background/60 backdrop-blur-sm border border-primary/20"
            >
              <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                <link.icon className="h-7 w-7 text-primary group-hover:text-accent transition-colors duration-300" />
              </Link>
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 