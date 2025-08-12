"use client";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import type { Skill } from '@/types';
import { Code2, Server, Palette, Database, GitBranch, Smartphone, Brain, Settings, Cloud, TestTube2, Workflow, Star, Compass, Zap, Target, Rocket } from 'lucide-react';
import { useState, useEffect } from 'react';

interface EnhancedSkill extends Skill {
  category: 'frontend' | 'backend' | 'mobile' | 'database' | 'tools' | 'soft-skills';
  progress: number;
  experience: string;
  projects: number;
}

const skillsData: EnhancedSkill[] = [
  // Mobile Development
  { id: '1', name: 'Flutter / Dart', icon: Smartphone, level: 'Expert', category: 'mobile', progress: 95, experience: '6+ years', projects: 25 },
  { id: '2', name: 'React Native', icon: Smartphone, level: 'Proficient', category: 'mobile', progress: 80, experience: '2+ years', projects: 3 },
  
  // Frontend Development
  { id: '3', name: 'React.js / Next.js', icon: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M14.31 8l5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="M7.38 12l5.74-9.94"></path><path d="M9.69 16L3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="M16.62 12l-5.74 9.94"></path></svg>, level: 'Advanced', category: 'frontend', progress: 80, experience: '1.5 years', projects: 3 },
  { id: '4', name: 'JavaScript', icon: Code2, level: 'Advanced', category: 'frontend', progress: 88, experience: '5+ years', projects: 15 },
  { id: '5', name: 'TypeScript', icon: Code2, level: 'Advanced', category: 'frontend', progress: 85, experience: '3+ years', projects: 5 },
  
  // Backend Development
  { id: '6', name: 'Node.js / Nest.js', icon: Server, level: 'Expert', category: 'backend', progress: 92, experience: '2.5+ years', projects: 7 },
  
  // Database & Cloud
  { id: '7', name: 'MongoDB', icon: Compass, level: 'Advanced', category: 'database', progress: 85, experience: '2.5+ years', projects: 7 },
  { id: '8', name: 'PostgreSQL', icon: Database, level: 'Proficient', category: 'database', progress: 75, experience: '1+ years', projects: 7 },
  { id: '9', name: 'Firebase Services', icon: Cloud, level: 'Expert', category: 'database', progress: 90, experience: '5+ years', projects: 15 },
  
  // Tools & Testing
  { id: '10', name: 'State Management', icon: Workflow, level: 'Expert', category: 'tools', progress: 95, experience: '6+ years', projects: 25 },
  { id: '11', name: 'Unit Testing', icon: TestTube2, level: 'Advanced', category: 'tools', progress: 85, experience: '2+ years', projects: 15 },
  { id: '12', name: 'Agile & Scrum', icon: Brain, level: 'Advanced', category: 'soft-skills', progress: 88, experience: '5+ years', projects: 25 },
];

const categoryIcons = {
  frontend: Palette,
  backend: Server,
  mobile: Smartphone,
  database: Database,
  tools: Settings,
  'soft-skills': Brain
};

const categoryColors = {
  frontend: 'from-blue-500 to-cyan-500',
  backend: 'from-green-500 to-emerald-500',
  mobile: 'from-purple-500 to-pink-500',
  database: 'from-orange-500 to-red-500',
  tools: 'from-indigo-500 to-purple-500',
  'soft-skills': 'from-teal-500 to-blue-500'
};

// A helper component to render icons
const SkillIcon = ({ icon: IconComponent, className }: { icon: Skill['icon'], className?: string }) => {
  return <IconComponent className={className} />;
};

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [animatedProgress, setAnimatedProgress] = useState<{[key: string]: number}>({});

  useEffect(() => {
    const timer = setTimeout(() => {
      const progressData: {[key: string]: number} = {};
      skillsData.forEach(skill => {
        progressData[skill.id] = skill.progress;
      });
      setAnimatedProgress(progressData);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const filteredSkills = selectedCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === selectedCategory);

  const categories = [
    { id: 'all', name: 'All Skills', count: skillsData.length },
    { id: 'mobile', name: 'Mobile', count: skillsData.filter(s => s.category === 'mobile').length },
    { id: 'frontend', name: 'Frontend', count: skillsData.filter(s => s.category === 'frontend').length },
    { id: 'backend', name: 'Backend', count: skillsData.filter(s => s.category === 'backend').length },
    { id: 'database', name: 'Database', count: skillsData.filter(s => s.category === 'database').length },
    { id: 'tools', name: 'Tools', count: skillsData.filter(s => s.category === 'tools').length },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-gradient-to-br from-secondary/30 to-background animate-section-slide-up relative" style={{ animationDelay: '0.4s' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise, organized by category and proficiency level.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border'
              }`}
            >
              {category.name}
              <Badge variant="secondary" className="ml-2 text-xs">
                {category.count}
              </Badge>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            const CategoryIcon = categoryIcons[skill.category];
            const categoryGradient = categoryColors[skill.category];
            
            return (
              <Card 
                key={skill.id} 
                className="group hover:shadow-xl hover:scale-[1.02] transform transition-all duration-300 ease-out relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category Indicator */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${categoryGradient}`}></div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <SkillIcon icon={skill.icon} className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="font-headline text-lg text-primary/90 group-hover:text-primary transition-colors duration-300">
                          {skill.name}
                        </CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {skill.level}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {skill.experience}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{skill.progress}%</div>
                      <div className="text-xs text-muted-foreground">{skill.projects} projects</div>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Proficiency</span>
                      <span>{animatedProgress[skill.id] || 0}%</span>
                    </div>
                    <Progress 
                      value={animatedProgress[skill.id] || 0} 
                      className="h-2 bg-secondary"
                    />
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Skill Highlights */}
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Target className="w-3 h-3" />
                      <span>Expert Level</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Rocket className="w-3 h-3" />
                      <span>Production Ready</span>
                    </div>
                  </div>
                </CardContent>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </Card>
            );
          })}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-2">6+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <div className="text-3xl font-bold text-accent mb-2">25+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <div className="text-3xl font-bold text-accent mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
