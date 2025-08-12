'use client'

import { useState } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ExternalLink, ArrowLeft, Github, Building, Calendar, Users, Star, Download, Code2, Smartphone, Server } from 'lucide-react';
import Link from 'next/link';
import { ImageGallery } from '@/components/ui/ImageGallery';
import type { Project, ProjectImage, ProjectLink as ProjectLinkType } from '@/types';

type ProjectDetailsClientProps = {
  project: Project;
};

// Helper to get the icon for a link
const getLinkIcon = (linkName: string) => {
  const name = linkName.toLowerCase();
  if (name === 'github') return Github;
  if (name === 'company') return Building;
  return ExternalLink;
};

// Helper to get technology category icon
const getTechIcon = (tech: string) => {
  const techLower = tech.toLowerCase();
  if (techLower.includes('flutter') || techLower.includes('react native') || techLower.includes('mobile')) {
    return Smartphone;
  }
  if (techLower.includes('node') || techLower.includes('backend') || techLower.includes('api')) {
    return Server;
  }
  return Code2;
};

export default function ProjectDetailsClient({ project }: ProjectDetailsClientProps) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const galleryImages: ProjectImage[] = project.gallery ?? [];
  const projectLinks = project.links ?? [];

  const openGallery = (index: number) => {
    setSelectedIndex(index);
    setGalleryOpen(true);
  };

  return (
    <>
      {galleryImages.length > 0 && (
        <ImageGallery
          isOpen={galleryOpen}
          onClose={() => setGalleryOpen(false)}
          images={galleryImages}
          startIndex={selectedIndex}
        />
      )}
      
      <div className="bg-background min-h-screen animate-fade-in">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-50"></div>
        
        <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
          <div className="max-w-5xl mx-auto">
            
            {/* Back Button */}
            <Button variant="ghost" asChild className="mb-8 group hover:bg-primary/10">
              <Link href="/#projects">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
                Back to Projects
              </Link>
            </Button>

            <article className="space-y-8">
              {/* Project Header */}
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {project.title}
                </h1>
                
                <p className="text-xl text-muted-foreground mb-6 max-w-3xl">
                  {project.description}
                </p>
                
                {/* Technology Stack */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
                  {project.technologies.map((tech) => {
                    const TechIcon = getTechIcon(tech);
                    return (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="font-body bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200 flex items-center gap-1"
                      >
                        <TechIcon className="w-3 h-3" />
                        {tech}
                      </Badge>
                    );
                  })}
                </div>
              </div>

              {/* Project Gallery */}
              {galleryImages.length > 0 && (
                <Card className="overflow-hidden border-0 shadow-xl bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
                      <Image 
                        src={project.imageUrl}
                        alt={project.title}
                        width={32}
                        height={32}
                        className="rounded-lg"
                      />
                      Project Screenshots
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {galleryImages.map((image, index) => (
                        <div 
                          key={index} 
                          className="relative aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group border border-border/50 hover:border-primary/30"
                          onClick={() => openGallery(index)}
                        >
                          <Image 
                            src={image.url}
                            alt={`${project.title} - ${image.hint || `Screenshot ${index + 1}`}`}
                            layout="fill"
                            objectFit="cover"
                            data-ai-hint={image.hint}
                            className="group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <ExternalLink className="w-8 h-8 text-white" />
                            </div>
                          </div>
                          {image.hint && (
                            <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                              {image.hint}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {/* Project Details */}
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  <Card className="border-0 shadow-xl bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
                        <Code2 className="w-6 h-6" />
                        Project Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90 space-y-6">
                        {project.longDescription && (
                          project.longDescription.split('\n').map((paragraph, index) => (
                            paragraph.trim() !== '' && (
                              <p key={index} className="leading-relaxed text-foreground/80">
                                {paragraph}
                              </p>
                            )
                          ))
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Project Stats */}
                  <Card className="border-0 shadow-xl bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
                        <Star className="w-5 h-5" />
                        Project Stats
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Technologies</span>
                        <span className="font-semibold text-primary">{project.technologies.length}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Screenshots</span>
                        <span className="font-semibold text-primary">{galleryImages.length}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Links</span>
                        <span className="font-semibold text-primary">{projectLinks.length}</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Project Links */}
                  {projectLinks.length > 0 && (
                    <Card className="border-0 shadow-xl bg-card/50 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
                          <ExternalLink className="w-5 h-5" />
                          Project Links
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {projectLinks.map((link) => {
                          const Icon = getLinkIcon(link.name);
                          const isPrimary = link.name.toLowerCase() !== 'github' && link.name.toLowerCase() !== 'company';
                          return (
                            <Button 
                              key={link.id} 
                              asChild 
                              size="lg" 
                              variant={isPrimary ? "default" : "outline"} 
                              className={`w-full justify-start ${
                                !isPrimary ? 'border-accent text-accent hover:bg-accent hover:text-accent-foreground' : ''
                              }`}
                            >
                              <Link href={link.url} target="_blank" rel="noopener noreferrer">
                                <Icon className="mr-2 w-4 h-4" /> 
                                {link.name}
                              </Link>
                            </Button>
                          );
                        })}
                      </CardContent>
                    </Card>
                  )}

                  {/* Technology Categories */}
                  <Card className="border-0 shadow-xl bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
                        <Code2 className="w-5 h-5" />
                        Tech Stack
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {project.technologies.map((tech) => {
                          const TechIcon = getTechIcon(tech);
                          return (
                            <div key={tech} className="flex items-center gap-3 p-2 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors duration-200">
                              <TechIcon className="w-4 h-4 text-primary" />
                              <span className="text-sm font-medium text-foreground">{tech}</span>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Call to Action */}
              <Card className="border-0 shadow-xl bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">Interested in this project?</h3>
                  <p className="text-muted-foreground mb-6">
                    Let's discuss how we can work together on similar projects or explore new opportunities.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                      <Link href="/#contact">
                        Get In Touch
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                      <Link href="/#projects">
                        View More Projects
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
