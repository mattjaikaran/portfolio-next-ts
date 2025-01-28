import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

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

const roles = [
  'Software Engineer',
  'Technical Lead',
  'Startup Consultant',
  'Music Producer',
  'Musician',
];

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex(prev => (prev + 1) % roles.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

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

        <div className="h-[2.5rem] sm:h-[3rem]">
          <motion.h2
            key={roles[currentRoleIndex]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-xl sm:text-2xl text-muted-foreground"
          >
            {roles[currentRoleIndex]}
          </motion.h2>
        </div>

        <motion.div className="flex gap-4 justify-center" {...fadeIn}>
          {socialLinks.map((link, index) => {
            const Icon = link.icon;

            if (link.name === 'Contact') {
              return (
                <Link key={index} href={link.href}>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Contact</span>
                  </Button>
                </Link>
              );
            }

            return (
              <Link
                key={index}
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

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div {...fadeIn}>
            <Button
              variant="ghost"
              size="icon"
              className="animate-bounce rounded-full hover:bg-transparent"
              onClick={() => {
                const webprojects = document.getElementById('webprojects');
                webprojects?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <ArrowDown className="h-5 w-5" />
              <span className="sr-only">Scroll down</span>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
