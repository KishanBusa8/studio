import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { educationData } from '@/lib/education-data';
import { GraduationCap, Calendar } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="py-16 md:py-24 bg-secondary/30 animate-section-slide-up" style={{ animationDelay: '0.8s' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Education</h2>
        <div className="max-w-2xl mx-auto">
          {educationData.map((edu) => (
            <Card key={edu.id} className="overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] transform transition-all duration-300 ease-out">
              <CardContent className="p-6 flex flex-col sm:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <Image
                    src={edu.logoUrl}
                    alt={edu.logoHint}
                    width={80}
                    height={80}
                    className="rounded-full object-contain border-2 border-border p-1"
                    data-ai-hint={edu.logoHint}
                  />
                </div>
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-xl font-bold font-headline text-primary">{edu.institution}</h3>
                  <p className="text-md text-foreground/80 flex items-center justify-center sm:justify-start gap-2 mt-1">
                    <GraduationCap className="w-5 h-5 text-accent" />
                    {edu.degree}
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center justify-center sm:justify-start gap-2 mt-2">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
