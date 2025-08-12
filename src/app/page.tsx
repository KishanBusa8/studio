import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import GitHubProjectsSection from '@/components/sections/GitHubProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ContactSection from '@/components/sections/ContactSection';
import BlogSection from '@/components/sections/BlogSection';
import EducationSection from '@/components/sections/EducationSection';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <div className="container mx-auto px-4">
           <Separator className="my-12 md:my-16 bg-border/60" />
        </div>
        <ProjectsSection />
         <div className="container mx-auto px-4">
           <Separator className="my-12 md:my-16 bg-border/60" />
        </div>
        <GitHubProjectsSection />
         <div className="container mx-auto px-4">
           <Separator className="my-12 md:my-16 bg-border/60" />
        </div>
        <SkillsSection />
        <div className="container mx-auto px-4">
           <Separator className="my-12 md:my-16 bg-border/60" />
        </div>
        <BlogSection />
        <div className="container mx-auto px-4">
           <Separator className="my-12 md:my-16 bg-border/60" />
        </div>
        <EducationSection />
         <div className="container mx-auto px-4">
           <Separator className="my-12 md:my-16 bg-border/60" />
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
