import type { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  imageHint: string;
  liveLink?: string;
  githubLink?: string;
}

export interface Skill {
  id: string;
  name: string;
  icon: LucideIcon | React.ComponentType<{ className?: string }>; // Allow LucideIcon or custom SVG component
  level?: string; // e.g., "Expert", "Intermediate" (optional)
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: LucideIcon;
}
