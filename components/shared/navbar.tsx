'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/lib/config/site';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/shared/theme-toggle';
import { MenuIcon } from '@/components/shared/menu-icon';

const menuItemVariants = {
  closed: { opacity: 0, x: -20 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    x: 20,
    transition: {
      delay: i * 0.05,
      duration: 0.2,
    },
  }),
};

const menuBackgroundVariants = {
  closed: {
    clipPath: 'circle(0% at calc(100% - 40px) 32px)',
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  open: {
    clipPath: 'circle(150% at calc(100% - 40px) 32px)',
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsScrolled(latest > 10);
    });
    return () => unsubscribe();
  }, [scrollY]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
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
        <nav
          className={cn(
            'container mx-auto px-4 transition-all duration-300',
            isScrolled ? 'h-14' : 'h-16'
          )}
        >
          <div className="flex items-center justify-between h-full">
            {/* Logo/Name */}
            <Link href="/" className="relative z-50">
              <motion.span
                className="text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {siteConfig.name}
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {siteConfig.mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary relative group py-1',
                    pathname === item.href
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  )}
                >
                  {item.title}
                  <span
                    className={cn(
                      'absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300',
                      pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                    )}
                  />
                </Link>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <MenuIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Background */}
            <motion.div
              className="absolute inset-0 bg-background"
              variants={menuBackgroundVariants}
            />

            {/* Menu Content */}
            <motion.nav
              className="relative h-full flex flex-col justify-center items-center"
              initial="closed"
              animate="open"
              exit="exit"
            >
              <ul className="flex flex-col items-center gap-8">
                {siteConfig.mainNav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    custom={i}
                    variants={menuItemVariants}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'text-3xl font-medium transition-colors hover:text-primary relative',
                        pathname === item.href
                          ? 'text-primary'
                          : 'text-foreground'
                      )}
                    >
                      <span className="relative">
                        {item.title}
                        {pathname === item.href && (
                          <motion.span
                            className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"
                            layoutId="mobile-underline"
                          />
                        )}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Social Links or Additional Info */}
              <motion.div
                className="absolute bottom-12 text-center text-muted-foreground text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.4 } }}
                exit={{ opacity: 0 }}
              >
                <p>Software Engineer & Creative</p>
                <p className="mt-1">Based in NYC</p>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
