
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="profile" className="py-16 md:py-24 text-center animate-section-slide-up" style={{ animationDelay: '0.1s' }}>
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-8 h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden shadow-lg border-4 border-primary animate-profile-ping group">
          <Image
            src="/profile.jpeg"
            alt="Profile Picture"
            width={200}
            height={200}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300 ease-out"
            data-ai-hint="professional portrait Kishan Busa"
          />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Kishan Busa
        </h1>
        <p className="text-xl md:text-2xl text-primary/80 mb-6 font-headline">
          FULLSTACK MOBILE APP DEVELOPER
        </p>
        <div className="max-w-4xl mx-auto text-lg text-left text-foreground/80 mb-10 space-y-6">
           <p>
            I am a highly skilled and results-driven FullStack Developer with over 6 years of experience in mobile application development using Flutter and React Native, and 2 years of expertise in backend and frontend development with Node.js, Nest.js, and React.js. My passion lies in creating robust, scalable solutions and ensuring seamless user experiences across mobile and web platforms.
          </p>
          <p>
            With a deep understanding of the entire application lifecycle, I specialize in Use Case Analysis, Functional Specifications, Knowledge Transfer, and Business Analysis. My expertise in MVC and MVVM architecture and state management techniques like Flutter recommends MVVM, Stacked, BLoC, GetX, and Provider patterns, ensuring the development of responsive, high-performance applications.
          </p>
          <p>
            In addition to my mobile development expertise, I possess significant experience in backend development, particularly with Node.js and Nest.js. I have designed and implemented scalable, high-performance APIs and microservices, working with databases such as MongoDB, PostgreSQL, and MySQL. My strong understanding of RESTful services, GraphQL, and WebSocket protocols allows me to build robust and efficient backend solutions that integrate seamlessly with frontend and mobile platforms. I am well-versed in modern authentication and authorization techniques, including JWT, OAuth2, and Passport.js, ensuring secure and reliable user management.
          </p>
          <p>
            On the frontend, I have worked extensively with React.js and Next.js, creating dynamic, responsive, and SEO-optimized web applications. My experience includes integrating third-party APIs, state management libraries like Redux and React Context, and leveraging Next.js for server-side rendering and static site generation. I focus on delivering a seamless user experience by optimizing performance, ensuring accessibility, and applying best practices in code quality and maintainability.
          </p>
          <p>
            I also have extensive experience in writing unit test cases to ensure the reliability and maintainability of code across all layers of the application. Whether for frontend components in React, backend APIs in Node.js, or mobile applications in Flutter, I prioritize writing comprehensive and effective tests. Utilizing testing frameworks like Jest, Mocha, Mockito, and Playwright, I strive to deliver high-quality, bug-free solutions that meet the highest standards of performance and stability.
          </p>
        </div>
        <Button variant="outline" size="lg" asChild className="border-accent text-accent hover:bg-accent hover:text-neutral-900 group">
          <Link href="#projects">
            View My Work <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform duration-200" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
