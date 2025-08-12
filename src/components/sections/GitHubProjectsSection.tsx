import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Github } from 'lucide-react';
import type { GitHubProject } from '@/types';
import Link from 'next/link';
import { githubProjectsData } from '@/lib/github-projects-data';

export default function GitHubProjectsSection() {
  return (
    <section id="github-projects" className="py-16 md:py-24 animate-section-slide-up" style={{ animationDelay: '0.2s' }}>
      <div className="container mx-auto px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Source Contributions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my open-source projects on GitHub. Each repository showcases different technologies, 
            problem-solving approaches, and my commitment to building quality software.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {githubProjectsData.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transform transition-all duration-300 ease-out border-border/50">
              <CardHeader className="pb-4">
                <CardTitle className="font-headline text-xl mb-3 line-clamp-1">{project.name}</CardTitle>
                <CardDescription className="text-foreground/80 line-clamp-3 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow pb-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-body text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="font-body text-xs">
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
                </div>
                
              </CardContent>
              
              <CardFooter className="flex justify-center items-center pt-4 border-t border-border/50">
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
} 