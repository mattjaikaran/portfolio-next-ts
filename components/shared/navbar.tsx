import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '../ui/theme-toggle';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';

const navItems = [
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Music', href: '/music' },
  // { name: 'Photos', href: '/photos' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  // Update scroll state
  useEffect(() => {
    const unsubscribe = scrollY.onChange(latest => {
      setIsScrolled(latest > 10);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b'
          : 'bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo/Name */}
        <Link href="/">
          <motion.span
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Matt Jaikaran
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm transition-colors hover:text-primary',
                router.asPath === item.href
                  ? 'text-primary font-medium'
                  : 'text-muted-foreground'
              )}
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="relative z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="fixed inset-y-0 right-0 w-3/4 bg-background shadow-xl p-6 flex flex-col justify-center"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
            >
              <div className="flex flex-col space-y-6 text-center">
                {navItems.map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'text-lg transition-colors hover:text-primary',
                      router.asPath === item.href
                        ? 'text-primary font-medium'
                        : 'text-muted-foreground'
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
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
