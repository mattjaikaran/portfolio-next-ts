import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '../ui/theme-toggle';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';

const navItems = [
  { name: 'Web', href: '/web' },
  { name: 'Music', href: '/music' },
  { name: 'Photos', href: '/photos' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  // { name: 'Health', href: '/health' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.onChange(latest => {
      setIsScrolled(latest > 10);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b shadow-sm'
          : 'bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo/Name */}
        <Link href="/" className="relative z-50">
          <motion.span
            className="text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Matt Jaikaran
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary relative group',
                router.asPath === item.href
                  ? 'text-primary'
                  : 'text-muted-foreground'
              )}
            >
              {item.name}
              <span
                className={cn(
                  'absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full',
                  router.asPath === item.href ? 'w-full' : 'w-0'
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
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-md md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="fixed inset-y-0 right-0 w-full bg-background shadow-xl p-6 flex flex-col justify-center items-center"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
            >
              <div className="flex flex-col space-y-8 text-center">
                {navItems.map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'text-2xl font-medium transition-colors hover:text-primary relative group',
                      router.asPath === item.href
                        ? 'text-primary'
                        : 'text-muted-foreground'
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                    <span
                      className={cn(
                        'absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full',
                        router.asPath === item.href ? 'w-full' : 'w-0'
                      )}
                    />
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
