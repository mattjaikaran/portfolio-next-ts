'use client';

import { MainLayout } from '@/components/layouts/main-layout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Home, ArrowRight, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

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
];

export function ThankYouClient() {
  return (
    <MainLayout>
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-lg"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Thank You!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground text-lg mb-8"
          >
            Your message has been sent successfully. I&apos;ll get back to you
            as soon as possible, usually within 24-48 hours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/web">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-sm text-muted-foreground mb-4">
              In the meantime, feel free to connect with me:
            </p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card className="hover:border-primary/30 hover:shadow-md transition-all">
                    <CardContent className="p-4 flex items-center gap-2">
                      <link.icon className="w-5 h-5" />
                      <span className="text-sm">{link.name}</span>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </MainLayout>
  );
}
