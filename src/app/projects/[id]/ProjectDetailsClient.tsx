'use client'

import { useState } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, ArrowLeft, Github, Building } from 'lucide-react';
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
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            
            <Button variant="ghost" asChild className="mb-8">
              <Link href="/#projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>

            <article>
              <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-primary">{project.title}</h1>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="font-body">{tech}</Badge>
                ))}
              </div>

              {galleryImages.length > 0 && (
                <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {galleryImages.map((image, index) => (
                     <div key={index} className="relative aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer" onClick={() => openGallery(index)}>
                      <Image 
                        src={image.url}
                        alt={`${project.title} - Screenshot ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint={image.hint}
                        className="hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              )}
              
              <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90 space-y-6">
                <p className="text-xl leading-relaxed text-muted-foreground">{project.description}</p>
                {project.longDescription && <p>{project.longDescription}</p>}
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-12">
                 {projectLinks.map((link) => {
                  const Icon = getLinkIcon(link.name);
                  const isPrimary = link.name.toLowerCase() !== 'github' && link.name.toLowerCase() !== 'company';
                  return (
                    <Button key={link.id} asChild size="lg" variant={isPrimary ? "default" : "outline"} className={!isPrimary ? 'border-accent text-accent hover:bg-accent hover:text-accent-foreground' : ''}>
                      <Link href={link.url} target="_blank" rel="noopener noreferrer">
                        <Icon className="mr-2" /> {link.name}
                      </Link>
                    </Button>
                  );
                 })}
              </div>

            </article>
          </div>
        </div>
      </div>
    </>
  );
}
