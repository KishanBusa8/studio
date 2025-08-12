"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { SocialLink } from '@/types';
import { Github, Linkedin, Layers, Download, Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Shield, Lock } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
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
    value: 'India',
    link: '#'
  }
];

// Security configuration
const SECURITY_CONFIG = {
  MAX_SUBMISSIONS_PER_HOUR: 3,
  MAX_SUBMISSIONS_PER_DAY: 10,
  MIN_MESSAGE_LENGTH: 10,
  MAX_MESSAGE_LENGTH: 1000,
  SUSPICIOUS_KEYWORDS: ['viagra', 'casino', 'loan', 'credit', 'buy now', 'click here', 'free money'],
  ALLOWED_EMAIL_DOMAINS: ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com', 'protonmail.com'],
  RATE_LIMIT_WINDOW: 60 * 60 * 1000, // 1 hour in milliseconds
  DAILY_LIMIT_WINDOW: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
};

interface FormSubmission {
  timestamp: number;
  ip?: string;
  userAgent?: string;
}

export default function SecureContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '' // Hidden field to catch bots
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [submissionCount, setSubmissionCount] = useState(0);
  const [lastSubmissionTime, setLastSubmissionTime] = useState(0);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY');
    loadSubmissionHistory();
  }, []);

  // Load submission history from localStorage
  const loadSubmissionHistory = () => {
    try {
      const history = localStorage.getItem('contactFormHistory');
      if (history) {
        const submissions: FormSubmission[] = JSON.parse(history);
        const now = Date.now();
        const recentSubmissions = submissions.filter(
          sub => now - sub.timestamp < SECURITY_CONFIG.DAILY_LIMIT_WINDOW
        );
        setSubmissionCount(recentSubmissions.length);
        
        if (recentSubmissions.length > 0) {
          setLastSubmissionTime(recentSubmissions[recentSubmissions.length - 1].timestamp);
        }
      }
    } catch (error) {
      console.error('Error loading submission history:', error);
    }
  };

  // Save submission to localStorage
  const saveSubmission = () => {
    try {
      const history = localStorage.getItem('contactFormHistory');
      const submissions: FormSubmission[] = history ? JSON.parse(history) : [];
      const now = Date.now();
      
      // Add new submission
      submissions.push({
        timestamp: now,
        userAgent: navigator.userAgent,
      });
      
      // Keep only recent submissions (last 24 hours)
      const recentSubmissions = submissions.filter(
        sub => now - sub.timestamp < SECURITY_CONFIG.DAILY_LIMIT_WINDOW
      );
      
      localStorage.setItem('contactFormHistory', JSON.stringify(recentSubmissions));
      setSubmissionCount(recentSubmissions.length);
      setLastSubmissionTime(now);
    } catch (error) {
      console.error('Error saving submission:', error);
    }
  };

  // Rate limiting check
  const checkRateLimit = (): { allowed: boolean; message?: string } => {
    const now = Date.now();
    
    // Check hourly limit
    if (now - lastSubmissionTime < SECURITY_CONFIG.RATE_LIMIT_WINDOW) {
      const timeLeft = Math.ceil((SECURITY_CONFIG.RATE_LIMIT_WINDOW - (now - lastSubmissionTime)) / 60000);
      return {
        allowed: false,
        message: `Too many submissions. Please wait ${timeLeft} minutes before trying again.`
      };
    }
    
    // Check daily limit
    if (submissionCount >= SECURITY_CONFIG.MAX_SUBMISSIONS_PER_DAY) {
      return {
        allowed: false,
        message: 'Daily submission limit reached. Please try again tomorrow.'
      };
    }
    
    return { allowed: true };
  };

  // Input validation
  const validateInput = (): { valid: boolean; message?: string } => {
    // Check honeypot field
    if (formData.honeypot) {
      return { valid: false, message: 'Invalid submission detected.' };
    }
    
    // Check name
    if (formData.name.length < 2 || formData.name.length > 50) {
      return { valid: false, message: 'Name must be between 2 and 50 characters.' };
    }
    
    // Check email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return { valid: false, message: 'Please enter a valid email address.' };
    }
    
    // Check email domain
    // const domain = formData.email.split('@')[1];
    // if (!SECURITY_CONFIG.ALLOWED_EMAIL_DOMAINS.includes(domain)) {
    //   return { valid: false, message: 'Please use a valid email provider.' };
    // }
    
    // Check subject
    if (formData.subject.length < 5 || formData.subject.length > 100) {
      return { valid: false, message: 'Subject must be between 5 and 100 characters.' };
    }
    
    // Check message
    if (formData.message.length < SECURITY_CONFIG.MIN_MESSAGE_LENGTH || 
        formData.message.length > SECURITY_CONFIG.MAX_MESSAGE_LENGTH) {
      return { 
        valid: false, 
        message: `Message must be between ${SECURITY_CONFIG.MIN_MESSAGE_LENGTH} and ${SECURITY_CONFIG.MAX_MESSAGE_LENGTH} characters.` 
      };
    }
    
    // Check for suspicious content
    const suspiciousContent = SECURITY_CONFIG.SUSPICIOUS_KEYWORDS.some(keyword =>
      formData.message.toLowerCase().includes(keyword) || 
      formData.subject.toLowerCase().includes(keyword)
    );
    
    if (suspiciousContent) {
      return { valid: false, message: 'Message contains suspicious content.' };
    }
    
    return { valid: true };
  };

  // Handle reCAPTCHA change
  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Security checks
      const rateLimitCheck = checkRateLimit();
      if (!rateLimitCheck.allowed) {
        throw new Error(rateLimitCheck.message);
      }

      const validationCheck = validateInput();
      if (!validationCheck.valid) {
        throw new Error(validationCheck.message);
      }

      if (!captchaToken) {
        throw new Error('Please complete the reCAPTCHA verification.');
      }

      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      // Prepare template parameters with security info
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Kishan Busa',
        reply_to: formData.email,
        security_info: `Submission #${submissionCount + 1} | Time: ${new Date().toISOString()} | User-Agent: ${navigator.userAgent.substring(0, 100)}`,
      };

      // Send email using EmailJS
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      if (response.status === 200) {
        // Save submission for rate limiting
        saveSubmission();
        
        // Reset form
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
        setCaptchaToken(null);
        recaptchaRef.current?.reset();
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      console.error('Contact Form Error:', err);
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
      
      // Reset reCAPTCHA on error
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
      
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
          {/* Secure Contact Form */}
          <Card className="shadow-xl border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
                <Shield className="w-6 h-6" />
                Secure Contact Form
              </CardTitle>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Lock className="w-4 h-4" />
                <span>Protected with reCAPTCHA & rate limiting</span>
              </div>
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
                  
                  {/* Honeypot field - hidden from users */}
                  <div className="absolute -left-[9999px]">
                    <input
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleInputChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>
                  
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
                        maxLength={50}
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
                        maxLength={100}
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
                      maxLength={100}
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
                      maxLength={SECURITY_CONFIG.MAX_MESSAGE_LENGTH}
                    />
                    <div className="text-xs text-muted-foreground mt-1">
                      {formData.message.length}/{SECURITY_CONFIG.MAX_MESSAGE_LENGTH} characters
                    </div>
                  </div>
                  
                  {/* reCAPTCHA */}
                  <div className="flex justify-center">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || 'YOUR_RECAPTCHA_SITE_KEY'}
                      onChange={handleCaptchaChange}
                      theme="light"
                    />
                  </div>
                  
                  {/* Security Info */}
                  {/* <div className="text-xs text-muted-foreground text-center">
                    <p>Submissions today: {submissionCount}/{SECURITY_CONFIG.MAX_SUBMISSIONS_PER_DAY}</p>
                    <p>Rate limit: {SECURITY_CONFIG.MAX_SUBMISSIONS_PER_HOUR} per hour</p>
                  </div> */}
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
                    disabled={isSubmitting || !captchaToken}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending Message...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                        Send Secure Message
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