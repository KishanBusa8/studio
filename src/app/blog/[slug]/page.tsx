import { Metadata } from 'next';
import SEOHead from '@/components/ui/SEOHead';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

// This would typically come from a CMS or database
const blogPosts = {
  'flutter-vs-react-native': {
    title: 'Flutter vs React Native: My Experience as a Mobile Developer',
    description: 'A comprehensive comparison of Flutter and React Native based on my 6+ years of mobile development experience. Learn which framework to choose for your next project.',
    content: `
      <h1>Flutter vs React Native: My Experience as a Mobile Developer</h1>
      
      <p>After 6+ years of mobile development experience, I've worked extensively with both Flutter and React Native. Here's my detailed comparison based on real-world projects.</p>
      
      <h2>Performance Comparison</h2>
      <p>Flutter's compiled approach provides better performance for complex animations and heavy computations...</p>
      
      <h2>Development Experience</h2>
      <p>React Native's JavaScript ecosystem offers faster development cycles for web developers...</p>
      
      <h2>Community and Ecosystem</h2>
      <p>Both frameworks have strong communities, but React Native has been around longer...</p>
      
      <h2>My Recommendation</h2>
      <p>For new projects, I recommend Flutter for its performance and consistency...</p>
    `,
    publishedTime: '2024-01-15T10:00:00Z',
    modifiedTime: '2024-01-15T10:00:00Z',
    keywords: ['Flutter', 'React Native', 'Mobile Development', 'Cross-platform', 'Performance', 'Kishan Busa'],
  },
  'nodejs-api-design': {
    title: 'Building Scalable Node.js APIs: Best Practices from 6 Years of Experience',
    description: 'Learn how to build robust, scalable Node.js APIs using best practices I\'ve developed over 6 years of backend development experience.',
    content: `
      <h1>Building Scalable Node.js APIs: Best Practices</h1>
      
      <p>Over the past 6 years, I've built numerous Node.js APIs that handle millions of requests. Here are the key principles that ensure scalability and maintainability.</p>
      
      <h2>Architecture Patterns</h2>
      <p>Using MVC and MVVM patterns helps maintain clean separation of concerns...</p>
      
      <h2>Database Design</h2>
      <p>Proper indexing and query optimization are crucial for performance...</p>
      
      <h2>Authentication & Security</h2>
      <p>Implementing JWT and OAuth2 properly is essential for production apps...</p>
      
      <h2>Testing Strategy</h2>
      <p>Comprehensive unit testing with Jest and integration testing with Playwright...</p>
    `,
    publishedTime: '2024-01-20T10:00:00Z',
    modifiedTime: '2024-01-20T10:00:00Z',
    keywords: ['Node.js', 'API Design', 'Backend Development', 'Scalability', 'Best Practices', 'Kishan Busa'],
  },
};

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts];
  
  if (!post) {
    return {
      title: 'Blog Post Not Found - Kishan Busa',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} - Kishan Busa`,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedTime,
      modifiedTime: post.modifiedTime,
      authors: ['Kishan Busa'],
      images: ['/profile.jpeg'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: ['/profile.jpeg'],
    },
  };
}

export default function BlogPost({ params }: BlogPostProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
        <p>The requested blog post could not be found.</p>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-4 py-16 max-w-4xl">
      <SEOHead
        title={post.title}
        description={post.description}
        keywords={post.keywords}
        type="article"
        publishedTime={post.publishedTime}
        modifiedTime={post.modifiedTime}
        url={`/blog/${params.slug}`}
      />
      
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {post.title}
        </h1>
        <div className="flex items-center text-muted-foreground mb-4">
          <span>By Kishan Busa</span>
          <span className="mx-2">•</span>
          <time dateTime={post.publishedTime}>
            {new Date(post.publishedTime).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
        <p className="text-xl text-muted-foreground">{post.description}</p>
      </header>

      <div 
        className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground/80 prose-strong:text-primary prose-a:text-accent"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <footer className="mt-12 pt-8 border-t border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="/profile.jpeg"
              alt="Kishan Busa"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semibold">Kishan Busa</p>
              <p className="text-sm text-muted-foreground">FullStack Developer</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/KishanBusa8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/kishanbusa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </article>
  );
}
