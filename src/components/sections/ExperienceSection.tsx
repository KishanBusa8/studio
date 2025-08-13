"use client";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Building2, Award, Users, TrendingUp, Code2, Smartphone, Server } from 'lucide-react';
import { useState } from 'react';

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  technologies: string[];
  achievements: string[];
  type: 'full-time' | 'freelance' | 'contract';
  icon: any;
}

const experiences: Experience[] = [
  {
    id: '1',
    title: 'Senior FullStack Mobile Developer',
    company: 'Freelance & Contract',
    location: 'Remote',
    duration: '2022 - Present',
    description: 'Leading development of mobile applications using Flutter and React Native, with full-stack capabilities including Node.js backend development.',
    technologies: ['Flutter', 'React Native', 'Node.js', 'Nest.js', 'MongoDB', 'PostgreSQL', 'Firebase'],
    achievements: [
      'Developed 15+ production mobile apps',
      'Achieved 4.8+ average app store rating',
      'Reduced development time by 40% through reusable components',
      'Mentored 5+ junior developers'
    ],
    type: 'freelance',
    icon: Smartphone
  },
  {
    id: '2',
    title: 'Lead Mobile App Developer',
    company: 'Various Companies',
    location: 'India',
    duration: '2020 - 2025',
    description: 'Specialized in Flutter development, creating high-performance mobile applications with modern architecture patterns.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'State Management'],
    achievements: [
      'Built 10+ successful mobile applications',
      'Implemented MVVM architecture patterns',
      'Integrated payment gateways and third-party services',
      'Optimized app performance and user experience'
    ],
    type: 'full-time',
    icon: Code2
  },
  {
    id: '3',
    title: 'FullStack Developer',
    company: 'Startup & Enterprise',
    location: 'India',
    duration: '2023 - 2025',
    description: 'Full-stack development focusing on web applications and backend services using modern JavaScript frameworks.',
    technologies: ['Flutter', 'Next.js', 'React.js', 'Node.js', 'MongoDB', 'PostgreSQL',],
    achievements: [
      'Developed scalable web applications',
      'Implemented CI/CD pipelines',
      'Database design and optimization',
      'API development and documentation'
    ],
    type: 'full-time',
    icon: Server
  }
];

const typeColors = {
  'full-time': 'bg-green-500',
  'freelance': 'bg-blue-500',
  'contract': 'bg-purple-500'
};

const typeLabels = {
  'full-time': 'Full Time',
  'freelance': 'Freelance',
  'contract': 'Contract'
};

export default function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] = useState<string | null>(null);

  return (
    <section id="experience" className="py-16 md:py-24 bg-gradient-to-br from-background to-secondary/20 animate-section-slide-up relative" style={{ animationDelay: '0.6s' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey in software development, showcasing growth from junior developer to senior full-stack mobile expert.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-accent/50 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => {
              const isSelected = selectedExperience === experience.id;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={experience.id}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-1/2 z-10"></div>
                  
                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <Card 
                      className={`group hover:shadow-xl transform transition-all duration-300 ease-out cursor-pointer ${
                        isSelected ? 'scale-105 shadow-2xl border-primary/50' : 'hover:scale-102'
                      }`}
                      onClick={() => setSelectedExperience(isSelected ? null : experience.id)}
                    >
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                              <experience.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="font-headline text-lg text-primary/90 group-hover:text-primary transition-colors duration-300">
                                {experience.title}
                              </CardTitle>
                              <div className="flex items-center gap-2 mt-1">
                                <Building2 className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">{experience.company}</span>
                              </div>
                            </div>
                          </div>
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${typeColors[experience.type]} text-white border-0`}
                          >
                            {typeLabels[experience.type]}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{experience.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="pt-0">
                        <p className="text-foreground/80 mb-4 leading-relaxed">
                          {experience.description}
                        </p>
                        
                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {experience.technologies.map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="secondary" 
                              className="text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        {/* Achievements - Show on selection */}
                        {isSelected && (
                          <div className="space-y-3 pt-4 border-t border-border/50">
                            <div className="flex items-center gap-2 text-sm font-medium text-primary">
                              <Award className="w-4 h-4" />
                              Key Achievements
                            </div>
                            <ul className="space-y-2">
                              {experience.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Expand/Collapse Button */}
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="mt-4 text-primary hover:text-primary/80"
                        >
                          {isSelected ? 'Show Less' : 'Show More'}
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
} 