import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Skill } from '@/types';
import { Code2, Server, Palette, Database, GitBranch, Smartphone, Brain, Settings, Cloud } from 'lucide-react';

const skillsData: Skill[] = [
  { id: '1', name: 'JavaScript (ES6+)', icon: Code2, level: 'Expert' },
  { id: '2', name: 'TypeScript', icon: Code2, level: 'Expert' },
  { id: '3', name: 'React & Next.js', icon: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M14.31 8l5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="M7.38 12l5.74-9.94"></path><path d="M9.69 16L3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="M16.62 12l-5.74 9.94"></path></svg>, level: 'Expert' },
  { id: '4', name: 'Node.js & Express', icon: Server, level: 'Expert' },
  { id: '5', name: 'Python & Django/Flask', icon: Code2, level: 'Proficient' },
  { id: '6', name: 'HTML5 & CSS3', icon: Palette, level: 'Expert' },
  { id: '7', name: 'SQL & NoSQL Databases', icon: Database, level: 'Proficient' },
  { id: '8', name: 'Git & GitHub', icon: GitBranch, level: 'Expert' },
  { id: '9', name: 'Responsive Design', icon: Smartphone, level: 'Expert' },
  { id: '10', name: 'RESTful APIs & GraphQL', icon: Settings, level: 'Proficient' },
  { id: '11', name: 'Cloud Platforms (AWS/GCP)', icon: Cloud, level: 'Intermediate' },
  { id: '12', name: 'Agile Methodologies', icon: Brain, level: 'Expert' },
];

// A helper component to render icons
const SkillIcon = ({ icon: IconComponent, className }: { icon: Skill['icon'], className?: string }) => {
  if (typeof IconComponent === 'function') {
    // Check if it's a LucideIcon or a custom SVG component
    // Lucide icons typically have a displayName like "LucideIconName"
    if ('displayName' in IconComponent && (IconComponent as any).displayName?.startsWith('Lucide')) {
      return <IconComponent className={className} />;
    }
    // For custom SVG components passed as functions
    return <IconComponent className={className} />;
  }
  // Fallback or handle other types if necessary
  return <Code2 className={className} />; // Default icon
};


export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-secondary/30 animate-fade-in" style={{ animationDelay: '0.4s' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills & Technologies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skillsData.map((skill) => (
            <Card key={skill.id} className="text-center shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <CardHeader className="pb-2">
                <div className="mx-auto mb-3 text-primary">
                   <SkillIcon icon={skill.icon} className="w-10 h-10 mx-auto" />
                </div>
                <CardTitle className="font-body text-lg text-primary/90">{skill.name}</CardTitle>
              </CardHeader>
              {skill.level && (
                <CardContent className="pt-0">
                  <Badge variant="outline" className="font-body text-xs text-muted-foreground">{skill.level}</Badge>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
