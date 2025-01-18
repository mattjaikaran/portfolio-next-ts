'use client';
import { MainLayout } from '@/layouts/MainLayout';
import { HeadingH1 } from '@/components/shared/typography';
import { motion, Variants } from 'framer-motion';
import { Github, Linkedin, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ContactForm from '@/components/forms/ContactForm';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/mattjaikaran',
    icon: Github,
    description: 'Check out my open source projects and contributions',
    color: 'hover:text-[#2DBA4E]',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/mattjaikaran',
    icon: Linkedin,
    description: 'Connect with me professionally and view my work experience',
    color: 'hover:text-[#0077B5]',
  },
];

export default function ContactPage() {
  return (
    <MainLayout>
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="container max-w-5xl py-12"
      >
        <motion.div variants={fadeInUp} className="text-center space-y-4">
          <HeadingH1>Let's Connect</HeadingH1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Fill out the form
            below or connect with me on social media.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[2fr,1fr] gap-12 mt-12">
          <motion.div variants={fadeInUp}>
            <ContactForm />
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-6">
            {socialLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="h-full transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/5">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div
                        className={`p-4 rounded-full bg-primary/5 ${link.color} transition-colors duration-300`}
                      >
                        <link.icon className="w-8 h-8" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-xl flex items-center justify-center gap-2 group-hover:text-primary transition-colors">
                          {link.name}
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {link.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </MainLayout>
  );
}
