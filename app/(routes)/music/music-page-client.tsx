'use client';

import { MainLayout } from '@/components/layouts/main-layout';
import { HeadingH1 } from '@/components/shared/typography';
import { motion, Variants } from 'framer-motion';
import { musicProjects } from '@/data/music';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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

export function MusicPageClient() {
  return (
    <MainLayout>
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="container max-w-5xl py-12 mx-auto px-4"
      >
        <motion.div variants={fadeInUp} className="text-center space-y-4">
          <HeadingH1>Music Production</HeadingH1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of music I&apos;ve produced, engineered, and written over the
            years.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {musicProjects.map((project) => (
            <Link
              key={project.id}
              href={`/music/${project.slug}`}
              className="group relative overflow-hidden rounded-xl border bg-card/80 backdrop-blur-sm transition-all hover:border-primary/20 hover:shadow-xl"
            >
              {project.image && (
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </MainLayout>
  );
}
