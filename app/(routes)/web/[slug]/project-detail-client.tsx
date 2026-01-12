'use client';

import { MainLayout } from '@/components/layouts/main-layout';
import { HeadingH1, HeadingH2 } from '@/components/shared/typography';
import { motion, Variants } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Github, Maximize2 } from 'lucide-react';
import Link from 'next/link';
import { Project } from '@/types/project';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

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

interface ProjectDetailClientProps {
  project: Project;
}

export function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <MainLayout>
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="w-full relative"
      >
        {/* Hero Section */}
        <div className="relative w-full min-h-[70vh] flex items-center">
          <div className="absolute inset-0">
            {project.images?.[0] && (
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover opacity-20"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          </div>

          <div className="container mx-auto max-w-7xl relative z-10 px-4 py-12">
            <motion.div variants={fadeInUp} className="flex flex-col max-w-3xl">
              <Link
                href="/web"
                className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8 group"
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Projects
              </Link>
              <HeadingH1 className="mb-6 text-4xl md:text-6xl font-bold tracking-tight">
                {project.title}
              </HeadingH1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech?.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-sm px-3 py-1"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="bg-background">
          <motion.div
            variants={fadeInUp}
            className="container mx-auto max-w-7xl py-16 px-4"
          >
            {/* Project Overview */}
            <div className="mb-16">
              <div className="max-w-3xl mb-12">
                <HeadingH2 className="text-3xl font-bold tracking-tight mb-6">
                  Project Overview
                </HeadingH2>
                {project.longDescription && (
                  <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
                    {project.longDescription}
                  </p>
                )}
              </div>

              {/* Gallery Grid */}
              {project.images && project.images.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                  {project.images.slice(0, 6).map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={cn(
                        'relative rounded-xl overflow-hidden group cursor-pointer border',
                        index === 0 && 'md:col-span-2 md:row-span-2',
                      )}
                      onClick={() => setSelectedImage(image)}
                    >
                      <AspectRatio ratio={index === 0 ? 16 / 9 : 4 / 3}>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10 flex items-center justify-center">
                          <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <img
                          src={image}
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </AspectRatio>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Challenges & Solutions */}
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                {/* Challenges Section */}
                {project.challenges && project.challenges.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    <HeadingH2 className="text-2xl font-bold tracking-tight">
                      Challenges
                    </HeadingH2>
                    <div className="space-y-4">
                      {project.challenges.map((challenge, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="p-6 rounded-xl bg-card border hover:border-primary/20 transition-colors"
                        >
                          <h3 className="text-lg font-semibold mb-2">
                            {challenge.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {challenge.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Solutions Section */}
                {project.solutions && project.solutions.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    <HeadingH2 className="text-2xl font-bold tracking-tight">
                      Solutions
                    </HeadingH2>
                    <div className="space-y-4">
                      {project.solutions.map((solution, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="p-6 rounded-xl bg-card border hover:border-primary/20 transition-colors"
                        >
                          <h3 className="text-lg font-semibold mb-2">
                            {solution.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {solution.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Outcomes */}
              {project.outcomes && project.outcomes.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-16"
                >
                  <HeadingH2 className="text-2xl font-bold tracking-tight mb-6">
                    Outcomes
                  </HeadingH2>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {project.outcomes.map((outcome, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 p-4 rounded-lg bg-card border"
                      >
                        <span className="text-primary font-bold">+</span>
                        <span className="text-muted-foreground">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Project Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-4 justify-center"
              >
                {project.liveLink && (
                  <Button asChild size="lg">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Live Site
                    </a>
                  </Button>
                )}
                {project.githubLinks?.[0] && (
                  <Button variant="outline" asChild size="lg">
                    <a
                      href={project.githubLinks[0].link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Source
                    </a>
                  </Button>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Image Modal */}
        <Dialog
          open={!!selectedImage}
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogContent className="max-w-5xl w-full p-0 bg-transparent border-none">
            <DialogTitle asChild>
              <VisuallyHidden>Project Image View</VisuallyHidden>
            </DialogTitle>
            <DialogDescription asChild>
              <VisuallyHidden>Detailed view of project image</VisuallyHidden>
            </DialogDescription>
            {selectedImage && (
              <div className="relative w-full">
                <img
                  src={selectedImage}
                  alt="Project detail"
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </motion.div>
    </MainLayout>
  );
}
