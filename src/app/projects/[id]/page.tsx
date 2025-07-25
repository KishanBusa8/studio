import { notFound } from 'next/navigation';
import { projectsData } from '@/lib/projects-data';
import ProjectDetailsClient from './ProjectDetailsClient';

type ProjectPageProps = {
  params: {
    id: string;
  };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailsClient project={project} />;
}
