'use client';

import { MainLayout } from '@/components/layouts/main-layout';
import { HeadingH1 } from '@/components/shared/typography';
import { motion, Variants } from 'framer-motion';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { Project } from '@/types/project';

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

interface WebPageClientProps {
  initialProjects: Project[];
}

export function WebPageClient({ initialProjects }: WebPageClientProps) {
  return (
    <MainLayout>
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="container max-w-5xl py-12 mx-auto px-4"
      >
        <motion.div variants={fadeInUp} className="text-center space-y-4">
          <HeadingH1>Web Projects</HeadingH1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of web applications I&apos;ve built using modern
            technologies.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {initialProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </motion.div>
    </MainLayout>
  );
}
