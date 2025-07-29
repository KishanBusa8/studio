import { Button } from '@/components/ui/button';
import type { SocialLink } from '@/types';
import { Github, Linkedin, Layers, Download, Mail } from 'lucide-react';
import Link from 'next/link';

const socialLinks: SocialLink[] = [
  { id: '1', name: 'GitHub', url: 'https://github.com/KishanBusa8', icon: Github },
  { id: '2', name: 'LinkedIn', url: 'https://linkedin.com/in/kishanbusa', icon: Linkedin },
  { id: '3', name: 'Stack Overflow', url: 'https://stackoverflow.com/users/10936691/kishan-busa', icon: Layers },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/30 animate-section-slide-up" style={{ animationDelay: '0.8s' }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="mailto:kishanbusa08@gmail.com">
              <Mail className="mr-2 h-5 w-5" /> Email Me
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            <a href="/resume.pdf" download="Kishan_Busa_Resume.pdf">
              <Download className="mr-2 h-5 w-5" /> Download Resume
            </a>
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          {socialLinks.map((link) => (
            <Button key={link.id} variant="ghost" size="icon" asChild className="w-12 h-12 rounded-full hover:bg-accent/10 transition-colors duration-300 group">
              <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                <link.icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
