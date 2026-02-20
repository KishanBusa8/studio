import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Menu, CodeXml } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { href: '#profile', label: 'Profile' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#blog', label: 'Blog' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-fade-in" style={{ animationDelay: '0.1s' }}>
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <CodeXml className="h-7 w-7 text-primary group-hover:text-accent transition-colors duration-300" />
          <span className="font-headline text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300">KB</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {navItems.map((item) => (
            <Button key={item.href} variant="link" asChild className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 pt-6">
                  {navItems.map((item) => (
                    <SheetClose key={item.href} asChild>
                       <Button variant="ghost" asChild className="justify-start text-lg">
                        <Link href={item.href}>{item.label}</Link>
                      </Button>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
