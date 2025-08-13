import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Kishan Busa - FullStack Developer | Flutter Expert | React.js Developer',
  description: 'Kishan Busa is a FullStack Developer with 6+ years of experience in Flutter, React.js, Node.js, and mobile app development. Expert in creating robust, scalable solutions and seamless user experiences.',
  keywords: [
    'Kishan Busa',
    'FullStack Developer',
    'Flutter Developer',
    'React.js Developer',
    'Node.js Developer',
    'Mobile App Developer',
    'React Native Developer',
    'Next.js Developer',
    'Backend Developer',
    'Frontend Developer',
    'Software Engineer',
    'Web Developer',
    'Mobile Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'MongoDB',
    'PostgreSQL',
    'MySQL',
    'RESTful API',
    'GraphQL',
    'JWT',
    'OAuth2',
    'Redux',
    'React Context',
    'Jest',
    'Mocha',
    'Playwright',
    'Unit Testing',
    'MVC Architecture',
    'MVVM Architecture',
    'Microservices',
    'WebSocket',
    'Server-side Rendering',
    'Static Site Generation',
    'SEO Optimization',
    'UI/UX Design',
    'Responsive Design',
    'Cross-platform Development',
    'API Integration',
    'State Management',
    'Code Quality',
    'Performance Optimization',
    'Scalable Solutions',
    'User Experience',
    'Professional Portfolio',
    'Software Development',
    'Application Development',
    'Database Design',
    'Authentication Systems',
    'Third-party APIs',
    'Modern Web Technologies'
  ],
  authors: [{ name: 'Kishan Busa' }],
  creator: 'Kishan Busa',
  publisher: 'Kishan Busa',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kishanbusa.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kishanbusa.com',
    siteName: 'Kishan Busa - Professional Portfolio',
    title: 'Kishan Busa - FullStack Developer | Flutter Expert | React.js Developer',
    description: 'Kishan Busa is a FullStack Developer with 6+ years of experience in Flutter, React.js, Node.js, and mobile app development. Expert in creating robust, scalable solutions and seamless user experiences.',
    images: [
      {
        url: '/profile.jpeg',
        width: 1200,
        height: 630,
        alt: 'Kishan Busa - FullStack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kishan Busa - FullStack Developer | Flutter Expert | React.js Developer',
    description: 'Kishan Busa is a FullStack Developer with 6+ years of experience in Flutter, React.js, Node.js, and mobile app development.',
    images: ['/profile.jpeg'],
    creator: '@kishanbusa',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning={true}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Belleza&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet" />
        
        {/* Structured Data for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Kishan Busa",
              "jobTitle": "FullStack Developer",
              "description": "FullStack Developer with 6+ years of experience in Flutter, React.js, Node.js, and mobile app development",
              "url": "https://kishanbusa.com",
              "image": "https://kishanbusa.com/profile.jpeg",
              "email": "kishanbusa08@gmail.com",
              "sameAs": [
                "https://github.com/KishanBusa8",
                "https://linkedin.com/in/kishanbusa"
              ],
              "knowsAbout": [
                "Flutter",
                "React.js",
                "Next.js",
                "Node.js",
                "React Native",
                "MongoDB",
                "PostgreSQL",
                "MySQL",
                "JavaScript",
                "TypeScript",
                "Mobile App Development",
                "Web Development",
                "Backend Development",
                "Frontend Development",
                "API Development",
                "Database Design",
                "State Management",
                "Unit Testing",
                "UI/UX Design"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance Developer"
              },
              "alumniOf": {
                "@type": "Organization",
                "name": "Software Development"
              }
            })
          }}
        />
        
        {/* Structured Data for WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Kishan Busa - Professional Portfolio",
              "url": "https://kishanbusa.com",
              "description": "Professional portfolio showcasing Kishan Busa's work as a FullStack Developer",
              "author": {
                "@type": "Person",
                "name": "Kishan Busa"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://kishanbusa.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        
        {/* Structured Data for CreativeWork */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              "name": "Kishan Busa Portfolio",
              "author": {
                "@type": "Person",
                "name": "Kishan Busa"
              },
              "description": "Portfolio showcasing mobile apps, web applications, and software development projects",
              "url": "https://kishanbusa.com",
              "genre": "Technology",
              "keywords": "FullStack Developer, Flutter, React.js, Node.js, Mobile Development, Web Development"
            })
          }}
        />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning={true}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
