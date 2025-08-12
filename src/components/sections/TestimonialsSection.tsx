"use client";
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  project: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Areeb Khan',
    role: 'Product Manager',
    company: 'Designora Solutions',
    avatar: 'AK',
    content: 'Kishan is really fast and professional. Resolved the issue in the given time. Fully recommended!',
    rating: 5,
    project: 'Eclean',
    date: 'August 2025'
  },
  {
    id: '2',
    name: 'Chetan Amin',
    role: 'CEO',
    company: 'Receipts And Returns',
    avatar: 'CA',
    content: 'Working with Kishan was a game-changer for our startup. His full-stack development skills and understanding of modern architecture helped us build a scalable platform. Highly recommended for any mobile or web project.',
    rating: 5,
    project: 'Receipts And Returns',
    date: 'January 2024'
  },
  {
    id: '3',
    name: 'Areeb Khan',
    role: 'Product Manager',
    company: 'Designora Solutions',
    avatar: 'AK',
    content: 'Kishan delivered an exceptional mobile app that exceeded our expectations. His expertise in Flutter and attention to detail resulted in a smooth, high-performance application. The project was completed on time and within budget.',
    rating: 5,
    project: 'Meetup',
    date: 'August 2025'
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-br from-background to-secondary/20 animate-section-slide-up relative" style={{ animationDelay: '0.7s' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            What Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about working with me.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <Card className="relative overflow-hidden shadow-2xl border-0 bg-card/50 backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <CardContent className="p-8 md:p-12 relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <Avatar className="w-16 h-16 border-4 border-primary/20">
                  <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} />
                  <AvatarFallback className="bg-primary/10 text-primary font-bold text-lg">
                    {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-1">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </p>
                  <Badge variant="outline" className="mt-2 text-xs">
                    {testimonials[currentIndex].project}
                  </Badge>
                </div>
                <Quote className="w-8 h-8 text-primary/30 flex-shrink-0" />
              </div>
              
              <blockquote className="text-lg text-foreground/90 leading-relaxed italic">
                "{testimonials[currentIndex].content}"
              </blockquote>
              
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-border/50">
                <span className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].date}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full hover:bg-primary/10 transition-colors duration-300 group"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                  >
                    <svg className="w-4 h-4 text-primary group-hover:text-accent transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full hover:bg-primary/10 transition-colors duration-300 group"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                  >
                    <svg className="w-4 h-4 text-primary group-hover:text-accent transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                onMouseEnter={() => setIsAutoPlaying(false)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary scale-125'
                    : 'bg-border hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 