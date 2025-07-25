import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Skill } from '@/types';
import { Code2, Server, Palette, Database, GitBranch, Smartphone, Brain, Settings, Cloud, TestTube2, Workflow, Star, Compass } from 'lucide-react';

const skillsData: Skill[] = [
  { id: '1', name: 'JavaScript', icon: Code2, level: 'Advanced' },
  { id: '2', name: 'TypeScript', icon: Code2, level: 'Advanced' },
  { id: '3', name: 'Flutter / Dart', icon: Smartphone, level: 'Expert' },
  { id: '4', name: 'React Native', icon: Smartphone, level: 'Proficient' },
  { id: '5', name: 'React.js / Next.js', icon: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M14.31 8l5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="M7.38 12l5.74-9.94"></path><path d="M9.69 16L3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="M16.62 12l-5.74 9.94"></path></svg>, level: 'Advanced' },
  { id: '6', name: 'Node.js / Nest.js', icon: Server, level: 'Expert' },
  { id: '7', name: 'MongoDB', icon: Compass, level: 'Advanced' },
  { id: '8', name: 'PostgreSQL', icon: Database, level: 'Advanced' },
  { id: '9', name: 'Firebase Services', icon: Cloud, level: 'Expert' },
  { id: '10', name: 'Databases (SQL/NoSQL)', icon: Database, level: 'Proficient' },
  { id: '11', name: 'State Management', icon: Workflow, level: 'Expert' },
  { id: '12', name: 'Agile & Scrum', icon: Brain, level: 'Advanced' },
  { id: '13', name: 'Unit Testing', icon: TestTube2, level: 'Advanced' },
];


// A helper component to render icons
const SkillIcon = ({ icon: IconComponent, className }: { icon: Skill['icon'], className?: string }) => {
  return <IconComponent className={className} />; // Default icon
};


export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-secondary/30 animate-section-slide-up" style={{ animationDelay: '0.4s' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills & Technologies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skillsData.map((skill) => (
            <Card key={skill.id} className="text-center shadow-md hover:shadow-xl hover:scale-[1.04] hover:-translate-y-2 transform transition-all duration-300 ease-out">
              <CardHeader className="pb-2">
                <div className="mx-auto mb-3 text-primary">
                   <SkillIcon icon={skill.icon} className="w-10 h-10 mx-auto" />
                </div>
                <CardTitle className="font-body text-lg text-primary/90">{skill.name}</CardTitle>
              </CardHeader>
              {skill.level && (
                <CardContent className="pt-0">
                  <Badge variant="outline" className="font-body text-sm text-muted-foreground">{skill.level}</Badge>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
