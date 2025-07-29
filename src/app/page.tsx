import Footer from '@/components/ui/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ContactSection from '@/components/sections/ContactSection';
import BlogSection from '@/components/sections/BlogSection';
import EducationSection from '@/components/sections/EducationSection';
import { SpatialSection } from '@/components/ui/SpatialContainer';
import ImmersiveBackground, { SpatialOverlay } from '@/components/ui/ImmersiveBackground';
import FloatingNavigation from '@/components/ui/FloatingNavigation';
import SmoothScroll from '@/components/ui/SmoothScroll';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden perspective-2000">
      <SmoothScroll />
      <ImmersiveBackground />
      <SpatialOverlay />
      <FloatingNavigation />
      
      <main className="relative z-20">
        <SpatialSection depth={0} delay={0}>
          <HeroSection />
        </SpatialSection>
        
        <SpatialSection depth={1} delay={1}>
          <ProjectsSection />
        </SpatialSection>
        
        <SpatialSection depth={2} delay={2}>
          <SkillsSection />
        </SpatialSection>
        
        <SpatialSection depth={3} delay={3}>
          <BlogSection />
        </SpatialSection>
        
        <SpatialSection depth={4} delay={4}>
          <EducationSection />
        </SpatialSection>
        
        <SpatialSection depth={5} delay={5}>
          <ContactSection />
        </SpatialSection>
      </main>
      
      <div className="relative z-30">
        <Footer />
      </div>
    </div>
  );
}
