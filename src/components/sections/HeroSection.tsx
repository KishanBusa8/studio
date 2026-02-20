"use client";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Mail, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'FullStack Mobile App Developer',
    'Flutter Expert',
    'Node.js Backend Developer',
    'React.js/Next.js Developer',
    'React Native Developer',
    'UI/UX Enthusiast',
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentRole = roles[currentIndex];

      if (!isDeleting) {
        if (currentText.length < currentRole.length) {
          setCurrentText(currentRole.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentRole.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, roles]);

  return (
    <section id="profile" className="relative py-16 md:py-24 text-center animate-section-slide-up overflow-hidden" style={{ animationDelay: '0.1s' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary/5 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-accent/5 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Profile Image with Enhanced Effects */}
        <div className="relative mx-auto mb-8">
          <div className="relative h-32 w-32 md:h-40 md:w-40 mx-auto">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-xl animate-pulse"></div>

            {/* Main image container */}
            <div className="relative h-full w-full rounded-full overflow-hidden shadow-2xl border-4 border-primary/20 animate-profile-ping group">
              <Image
                src="/profile.jpg"
                alt="Profile Picture"
                width={200}
                height={200}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 ease-out"
                data-ai-hint="professional portrait Kishan Busa"
              />
            </div>

            {/* Floating badges */}
            <div className="absolute -top-2 -right-2 bg-chart-2 text-white rounded-full p-2 shadow-lg animate-bounce">
              <span className="text-xs font-bold">7+</span>
            </div>
            <div className="absolute -bottom-2 -left-2 bg-primary text-white rounded-full p-2 shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
              <span className="text-xs font-bold">25+</span>
            </div>
          </div>
        </div>

        {/* Enhanced Title with Typing Effect */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Kishan Busa
        </h1>

        {/* Animated Role Display */}
        <div className="h-8 md:h-10 mb-6 flex justify-center items-center">
          <p className="text-xl md:text-2xl text-primary/80 font-headline">
            {currentText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        {/* Enhanced Description */}
        <div className="max-w-4xl mx-auto text-lg text-left text-foreground/80 mb-10 space-y-6">
          <p className="leading-relaxed">
            I am a highly skilled and results-driven <span className="text-primary font-semibold">FullStack Developer</span> with over <span className="text-accent font-bold">7 years</span> of experience in mobile application development using Flutter and React Native, and <span className="text-accent font-bold">2 years</span> of expertise in backend and frontend development with Node.js, Nest.js, and React.js.
          </p>
          <p className="leading-relaxed">
            My passion lies in creating <span className="text-primary font-semibold">robust, scalable solutions</span> and ensuring seamless user experiences across mobile and web platforms. Specializing in <span className="text-accent font-semibold">MVC and MVVM architecture</span> and state management techniques.
          </p>
          <p className="leading-relaxed">
            Beyond mobile development, I excel in <span className="text-primary font-semibold">backend engineering</span>, designing high-performance APIs and microservices with Node.js, Nest.js, and databases including <span className="text-accent font-semibold">MongoDB, PostgreSQL, and MySQL</span>. My expertise encompasses RESTful services, GraphQL, WebSocket protocols, and modern authentication systems including JWT and OAuth2.
          </p>
          <p className="leading-relaxed">
            On the frontend, I specialize in <span className="text-accent font-semibold">React.js and Next.js</span>, creating dynamic, responsive, and SEO-optimized web applications. I integrate third-party APIs, implement state management with Redux and React Context, and leverage Next.js for server-side rendering and static site generation.
          </p>
          <p className="leading-relaxed">
            I maintain high code quality through comprehensive <span className="text-primary font-semibold">unit testing</span> across all application layers using Jest, Mocha, Mockito, and Playwright. This ensures reliable, maintainable, and bug-free solutions that meet the highest standards of performance and stability.
          </p>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button variant="outline" size="lg" asChild className="border-accent text-accent hover:bg-accent hover:text-neutral-900 group relative overflow-hidden">
            <Link href="#projects">
              <span className="relative z-10 flex items-center">
                View My Work <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform duration-200" />
              </span>
              <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          </Button>

          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground group">
            <Link href="mailto:kishanbusa08@gmail.com">
              <Mail className="mr-2 h-5 w-5" /> Get In Touch
            </Link>
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-md mx-auto mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">7+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">25+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">10+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4">
          <Button variant="ghost" size="icon" asChild className="w-10 h-10 rounded-full hover:bg-accent/10 transition-colors duration-300 group">
            <Link href="https://github.com/KishanBusa8" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 text-primary group-hover:text-accent transition-colors duration-300" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="w-10 h-10 rounded-full hover:bg-accent/10 transition-colors duration-300 group">
            <Link href="https://linkedin.com/in/kishanbusa" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-primary group-hover:text-accent transition-colors duration-300" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
