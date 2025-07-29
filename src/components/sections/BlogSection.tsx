'use client';

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { blogsData } from '@/lib/blogs-data';
import { motion } from 'framer-motion';

export default function BlogSection() {
  return (
    <div className="text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent spatial-depth-3"
      >
        From My Blog
      </motion.h2>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {blogsData.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              transition: { duration: 0.3 }
            }}
            className="spatial-depth-2"
          >
            <Card className="flex flex-col overflow-hidden shadow-2xl hover:shadow-primary/20 bg-background/80 backdrop-blur-sm border-primary/20 h-full">
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
          </motion.div>
        ))}
      </div>
    </div>
  );
} 