"use client";
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Github, ExternalLink, Star, Download, Users } from 'lucide-react';
import type { Project } from '@/types';
import Link from 'next/link';
import { projectsData } from '@/lib/projects-data';
import { useState } from 'react';

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-16 md:py-24 animate-section-slide-up relative" style={{ animationDelay: '0.2s' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-50"></div>
      
      <div className="container mx-auto px-10 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work, demonstrating expertise in mobile app development, 
            full-stack solutions, and innovative user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => {
            const githubLink = project.links?.find(link => link.name.toLowerCase() === 'github');
            const isHovered = hoveredProject === project.id;
            
            return (
              <Card 
                key={project.id} 
                className={`flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transform transition-all duration-500 ease-out group relative ${
                  isHovered ? 'scale-[1.02] -translate-y-3 rotate-y-2' : 'hover:scale-[1.02] hover:-translate-y-2'
                }`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Project Image with Overlay */}
                <Link href={`/projects/${project.id}`} className="block relative overflow-hidden">
                  <div className="relative w-full h-48">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className={`transition-transform duration-500 ${
                        isHovered ? 'scale-110' : 'scale-100'
                      }`}
                      data-ai-hint={project.imageHint}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                  </div>
                </Link>

                <CardHeader className="pb-3">
                  <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  {/* Project Category Badge */}
                  <Badge variant="outline" className="w-fit text-xs">
                    {project.technologies[0]}
                  </Badge>
                </CardHeader>

                <CardContent className="flex-grow pb-4">
                  <CardDescription className="text-foreground/80 mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </CardDescription>
                  
                  {/* Enhanced Technology Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="font-body text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>

                  {/* Project Highlights */}
                  <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>Active Users</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      <span>High Rating</span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between items-center pt-4 border-t border-border/50">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild
                    className="group/btn relative overflow-hidden"
                  >
                    <Link href={`/projects/${project.id}`}>
                      <span className="relative z-10 flex items-center">
                        View Details 
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </span>
                      <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </Link>
                  </Button>
                  
                  <div className="flex gap-2">
                    {githubLink && (
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        asChild 
                        className="w-8 h-8 rounded-full hover:bg-accent/10 transition-colors duration-300 group"
                      >
                        <Link href={githubLink.url} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 text-primary group-hover:text-accent transition-colors duration-300" />
                        </Link>
                      </Button>
                    )}
                    
                    {/* Live Demo Button if available */}
                    {project.links?.find(link => link.name.toLowerCase().includes('app') || link.name.toLowerCase().includes('demo')) && (
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        asChild 
                        className="w-8 h-8 rounded-full hover:bg-accent/10 transition-colors duration-300 group"
                      >
                        <Link 
                          href={project.links.find(link => link.name.toLowerCase().includes('app') || link.name.toLowerCase().includes('demo'))?.url || '#'} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 text-primary group-hover:text-accent transition-colors duration-300" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardFooter>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </Card>
            );
          })}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
          >
            <Link href="#projects">
              <span className="flex items-center">
                View All Projects 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
