import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Github } from 'lucide-react';
import type { Project } from '@/types';
import Link from 'next/link';
import { projectsData } from '@/lib/projects-data';


export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 animate-section-slide-up" style={{ animationDelay: '0.2s' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Experience</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => {
            const githubLink = project.links?.find(link => link.name.toLowerCase() === 'github');
            return (
              <Card key={project.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.04] hover:-translate-y-2 transform transition-all duration-300 ease-out">
                <Link href={`/projects/${project.id}`} className="block">
                  <div className="relative w-full h-48">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
