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
    title: 'Portpro Driver Mobile App',
    description: 'Spearheaded the development and enhancement of the Portpro Driver Mobile App, ensuring seamless user experience and high performance across multiple devices while building supporting backend services.',
    technologies: ['Flutter', 'Node.js', 'Microservices', 'API Design'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'logistics app',
    githubLink: 'https://github.com/KishanBusa8',
  },
  {
    id: '2',
    title: 'Technical Lead at InFicial Infotech',
    description: 'Led Flutter development teams, architected scalable solutions, and oversaw the implementation of robust database architectures and secure REST APIs using Node.js and Express.',
    technologies: ['Flutter', 'Dart', 'Node.js', 'Express.js', 'REST APIs'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'team collaboration',
    githubLink: 'https://github.com/KishanBusa8',
  },
  {
    id: '3',
    title: 'AI-Integrated Mobile Applications',
    description: 'Collaborated with the AI team to integrate capabilities like OCR, object detection, and face recognition into mobile apps using Flutter and Unity, leveraging OpenCV.',
    technologies: ['Flutter', 'Unity', 'OpenCV', 'AI/ML'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'AI vision',
    githubLink: 'https://github.com/KishanBusa8',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 animate-section-slide-up" style={{ animationDelay: '0.2s' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Experience</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.04] hover:-translate-y-2 transform transition-all duration-300 ease-out">
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
