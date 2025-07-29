'use client';

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Github } from 'lucide-react';
import type { Project } from '@/types';
import Link from 'next/link';
import { projectsData } from '@/lib/projects-data';
import { motion } from 'framer-motion';

export default function ProjectsSection() {
  return (
    <div className="text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent spatial-depth-3"
      >
        My Works
      </motion.h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projectsData.map((project, index) => {
          const githubLink = project.links?.find(link => link.name.toLowerCase() === 'github');
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="spatial-depth-2"
            >
              <Card className="flex flex-col overflow-hidden shadow-2xl hover:shadow-primary/20 bg-background/80 backdrop-blur-sm border-primary/20 h-full">
                <Link href={`/projects/${project.id}`} className="block">
                  <div className="relative w-full h-48">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      layout="fill"
                      objectFit="fill"
                      data-ai-hint={project.imageHint}
                    />
                  </div>
                </Link>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-foreground/80 mb-4 line-clamp-3">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="secondary" className="font-body">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center pt-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/projects/${project.id}`}>
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  {githubLink && (
                    <Button variant="ghost" size="icon" asChild className="w-10 h-10 rounded-full hover:bg-accent/10 transition-colors duration-300 group">
                      <Link href={githubLink.url} target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5 text-primary group-hover:text-accent transition-colors duration-300" />
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
} 