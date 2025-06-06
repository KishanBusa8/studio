import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '@/types';
import Link from 'next/link';

const projectsData: Project[] = [
  {
    id: '1',
    title: 'EcoInsight Dashboard',
    description: 'A comprehensive platform for visualizing environmental data, helping organizations make sustainable decisions. Features real-time analytics and customizable reports.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'D3.js'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'dashboard data',
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: '2',
    title: 'Mobile Fitness Companion',
    description: 'A cross-platform mobile app that tracks workouts, offers personalized training plans, and connects users with a fitness community.',
    technologies: ['React Native', 'Firebase', 'GraphQL'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'fitness app',
    liveLink: '#',
  },
  {
    id: '3',
    title: 'AI-Powered Code Reviewer',
    description: 'A tool that leverages machine learning to provide automated code reviews, identifying potential bugs and suggesting improvements for code quality.',
    technologies: ['Python', 'Flask', 'Docker', 'TensorFlow'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'code editor',
    githubLink: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 animate-fade-in" style={{ animationDelay: '0.2s' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative w-full h-48">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={project.imageHint}
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-foreground/80 mb-4">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-body">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-start space-x-2 pt-4">
                {project.liveLink && (
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Link>
                  </Button>
                )}
                {project.githubLink && (
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
