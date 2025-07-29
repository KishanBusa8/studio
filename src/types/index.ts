import type { LucideIcon } from 'lucide-react';

export interface ProjectImage {
  url: string;
  hint: string;
}

export interface ProjectLink {
  id: string;
  name: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl: string;
  imageHint: string;
  gallery?: ProjectImage[];
  links?: ProjectLink[];
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

export interface Blog {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  url: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  logoUrl: string;
  logoHint: string;
}
