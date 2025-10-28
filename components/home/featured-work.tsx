'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const featuredProjects = [
  {
    title: 'Rewyre',
    subtitle: 'Fintech Platform',
    description: 'Architected a modern fintech solution',
    image: 'https://dummyimage.com/600x400',
    link: '/web/rewyre',
    align: 'right',
  },
  {
    title: 'Chapels',
    subtitle: 'Electronic Music',
    description: 'Production & Creative Direction',
    image: 'https://dummyimage.com/600x400',
    link: '/music/chapels',
    align: 'left',
  },
  {
    title: 'NYC Streets',
    subtitle: 'Photography',
    description: 'Urban Photography Series',
    image: 'https://dummyimage.com/600x400',
    link: '/photos',
    align: 'right',
  },
];

function FeaturedProject({
  project,
  index: _index,
}: {
  project: (typeof featuredProjects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      className={cn(
        'relative min-h-[70vh] flex items-center',
        project.align === 'right' ? 'justify-end' : 'justify-start',
      )}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        style={{ y, opacity }}
        className={cn(
          'w-full md:w-2/3 relative z-10 p-8',
          project.align === 'right' ? 'md:text-right' : 'md:text-left',
        )}
      >
        <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-8">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <Link href={project.link}>
          <h3 className="font-sora text-5xl md:text-7xl font-light tracking-tight mb-4 hover:text-primary transition-colors">
            {project.title}
          </h3>
        </Link>
        <p className="text-2xl md:text-3xl text-muted-foreground font-light mb-2">
          {project.subtitle}
        </p>
        <p className="text-lg text-muted-foreground/80">
          {project.description}
        </p>
      </motion.div>
    </motion.div>
  );
}

export function FeaturedWork() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.primary.100),transparent_70%)] dark:bg-[radial-gradient(circle_at_top_right,theme(colors.primary.900),transparent_70%)] opacity-40" />

      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
          Selected Works
        </h2>
        <div className="space-y-40">
          {featuredProjects.map((project, index) => (
            <FeaturedProject
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
