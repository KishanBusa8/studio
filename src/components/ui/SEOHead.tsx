import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export default function SEOHead({
  title = 'Kishan Busa - FullStack Developer | Flutter Expert | React.js Developer',
  description = 'Kishan Busa is a FullStack Developer with 6+ years of experience in Flutter, React.js, Node.js, and mobile app development. Expert in creating robust, scalable solutions and seamless user experiences.',
  keywords = [
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
  image = 'https://kishanbusa.com/profile.jpeg',
  url = 'https://kishanbusa.com',
  type = 'website',
  author = 'Kishan Busa',
  publishedTime,
  modifiedTime,
}: SEOHeadProps) {
  const fullUrl = url.startsWith('http') ? url : `https://kishanbusa.com${url}`;
  const fullImage = image.startsWith('http') ? image : `https://kishanbusa.com${image}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Kishan Busa - Professional Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:creator" content="@kishanbusa" />

      {/* Article Specific Meta Tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && (
        <meta property="article:author" content={author} />
      )}

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      {/* Viewport and Mobile Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#3b82f6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Kishan Busa" />

      {/* Favicon and App Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/profile.jpeg" />
      <link rel="manifest" href="/manifest.json" />

      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
    </Head>
  );
}
