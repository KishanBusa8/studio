'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { educationData } from '@/lib/education-data';
import { GraduationCap, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EducationSection() {
  return (
    <div className="text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent spatial-depth-3"
      >
        Education
      </motion.h2>
      
      <div className="max-w-2xl mx-auto space-y-6">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              transition: { duration: 0.3 }
            }}
            className="spatial-depth-2"
          >
            <Card className="overflow-hidden shadow-2xl hover:shadow-primary/20 bg-background/80 backdrop-blur-sm border-primary/20">
              <CardContent className="p-6 flex flex-col sm:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <Image
                    src={edu.logoUrl}
                    alt={edu.logoHint}
                    width={80}
                    height={80}
                    className="rounded-full object-contain border-2 border-border p-1"
                    data-ai-hint={edu.logoHint}
                  />
                </div>
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-xl font-bold font-headline text-primary">{edu.institution}</h3>
                  <p className="text-md text-foreground/80 flex items-center justify-center sm:justify-start gap-2 mt-1">
                    <GraduationCap className="w-5 h-5 text-accent" />
                    {edu.degree}
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center justify-center sm:justify-start gap-2 mt-2">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 