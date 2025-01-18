import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/mattjaikaran',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/mattjaikaran',
    icon: Linkedin,
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: Mail,
  },
];

export function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),transparent)] dark:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.900),transparent)]" />

      <motion.div
        className="text-center space-y-8 max-w-3xl mx-auto"
        initial="initial"
        animate="animate"
        variants={{
          animate: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        <motion.h1
          className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-500"
          {...fadeIn}
        >
          Matt Jaikaran
        </motion.h1>

        <motion.h2
          className="text-xl sm:text-2xl text-muted-foreground"
          {...fadeIn}
        >
          Software Engineer
        </motion.h2>

        <motion.div className="flex gap-4 justify-center" {...fadeIn}>
          {socialLinks.map(link => {
            const Icon = link.icon;

            if (link.name === 'Contact') {
              return (
                <Link href={link.href}>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Contact</span>
                  </Button>
                </Link>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:scale-110 transition-transform"
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
                </Button>
              </Link>
            );
          })}
        </motion.div>

        <motion.div
          {...fadeIn}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <Button
            variant="ghost"
            size="icon"
            className="animate-bounce rounded-full"
            onClick={() => {
              const gallery = document.getElementById('gallery');
              gallery?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <ArrowDown className="h-5 w-5" />
            <span className="sr-only">Scroll down</span>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
