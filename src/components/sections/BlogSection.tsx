import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { blogsData } from '@/lib/blogs-data';

export default function BlogSection() {
  return (
    <section id="blog" className="py-16 md:py-24 animate-section-slide-up" style={{ animationDelay: '0.6s' }}>
      <div className="container mx-auto px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">From My Blog</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {blogsData.map((blog) => (
            <Card key={blog.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.04] hover:-translate-y-2 transform transition-all duration-300 ease-out">
              <Link href={blog.url} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative w-full h-48">
                  <Image
                    src={blog.imageUrl}
                    alt={blog.title}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={blog.imageHint}
                  />
                </div>
              </Link>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{blog.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-foreground/80 mb-4 line-clamp-3">{blog.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-start items-center pt-4">
                <Button variant="outline" size="sm" asChild>
                  <Link href={blog.url} target="_blank" rel="noopener noreferrer">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
