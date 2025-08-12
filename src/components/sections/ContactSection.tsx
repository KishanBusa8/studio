"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { SocialLink } from '@/types';
import { Github, Linkedin, Layers, Download, Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const socialLinks: SocialLink[] = [
  { id: '1', name: 'GitHub', url: 'https://github.com/KishanBusa8', icon: Github },
  { id: '2', name: 'LinkedIn', url: 'https://linkedin.com/in/kishanbusa', icon: Linkedin },
  { id: '3', name: 'Stack Overflow', url: 'https://stackoverflow.com/users/10936691/kishan-busa', icon: Layers },
];

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'kishanbusa08@gmail.com',
    link: 'mailto:kishanbusa08@gmail.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 7990907066',
    link: 'tel:+917990907066'
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Gujarat, India',
    link: '#'
  }
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Kishan Busa',
        reply_to: formData.email,
      };

      // Send email using EmailJS
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      if (response.status === 200) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError('Failed to send message. Please try again or contact me directly via email.');
      
      // Reset error after 5 seconds
      setTimeout(() => {
        setError('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-secondary/30 to-background animate-section-slide-up relative" style={{ animationDelay: '0.8s' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great. 
            Let's build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
                <Send className="w-6 h-6" />
                Send Message
              </CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">Message Sent Successfully!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I'll get back to you within 24 hours!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  )}
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className="border-border/50 focus:border-primary transition-colors duration-300"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="border-border/50 focus:border-primary transition-colors duration-300"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="border-border/50 focus:border-primary transition-colors duration-300"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or idea..."
                      rows={6}
                      className="border-border/50 focus:border-primary transition-colors duration-300 resize-none"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending Message...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-border/50 hover:border-primary/30 transition-colors duration-300 group">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{info.title}</h4>
                      <Link 
                        href={info.link} 
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        {info.value}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary">Quick Actions</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground group">
                  <Link href="mailto:kishanbusa08@gmail.com">
                    <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                    Email Me
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-accent text-accent hover:bg-accent hover:text-accent-foreground group">
                  <a href="/Kishan_Busa_Resume.pdf" download="Kishan_Busa_Resume.pdf">
                    <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <Button 
                    key={link.id} 
                    variant="ghost" 
                    size="icon" 
                    asChild 
                    className="w-12 h-12 rounded-full hover:bg-accent/10 transition-colors duration-300 group"
                  >
                    <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                      <link.icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300 group-hover:scale-110" />
                    </Link>
                  </Button>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <Card className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <h4 className="font-medium text-foreground">Available for new projects</h4>
                    <p className="text-sm text-muted-foreground">Response time: Within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
