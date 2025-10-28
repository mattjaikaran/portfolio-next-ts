'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/lib/config/site';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/shared/theme-toggle';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.onChange(latest => {
      setIsScrolled(latest > 10);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <div
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b'
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          {/* Logo/Name */}
          <Link href="/" className="relative z-50">
            <span className="text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {siteConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary relative group',
                  pathname === item.href
                    ? 'text-primary'
                    : 'text-muted-foreground'
                )}
              >
                {item.title}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full',
                    pathname === item.href ? 'w-full' : 'w-0'
                  )}
                />
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="relative z-50 hover:bg-transparent"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="fixed inset-0 top-0 left-0 right-0 bottom-0 z-40 min-h-screen bg-background md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{ paddingTop: '4rem' }}
          >
            <nav className="h-[calc(100vh-4rem)] flex flex-col justify-center items-center space-y-8 overflow-y-auto">
              {siteConfig.mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-2xl font-medium transition-colors hover:text-primary relative group',
                    pathname === item.href
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                  <span
                    className={cn(
                      'absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full',
                      pathname === item.href ? 'w-full' : 'w-0'
                    )}
                  />
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </nav>
    </div>
  );
} 