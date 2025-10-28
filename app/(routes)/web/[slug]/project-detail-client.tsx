'use client';

import { MainLayout } from '@/components/layouts/main-layout';
import { HeadingH1, HeadingH2 } from '@/components/shared/typography';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Github, Maximize2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types/project';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useRef, useState } from 'react';
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
  const containerRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  return (
    <MainLayout>
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="w-full relative"
        ref={containerRef}
      >
        {/* Hero Section with Parallax */}
        <motion.div
          className="relative w-full h-[90vh] flex items-center"
          style={{ opacity, scale, y }}
        >
          <motion.div variants={fadeInUp} className="absolute inset-0">
            {project.images[0] && (
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-cover opacity-30"
                priority
                sizes="100vw"
                quality={100}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
          </motion.div>

          <div className="container mx-auto max-w-7xl relative z-10">
            <motion.div variants={fadeInUp} className="flex flex-col max-w-3xl">
              <Link
                href="/web"
                className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8 group"
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Projects
              </Link>
              <HeadingH1 className="mb-6 text-5xl md:text-7xl font-bold tracking-tighter">
                {project.title}
              </HeadingH1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-sm px-4 py-1.5"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="bg-background">
          <motion.div
            variants={fadeInUp}
            className="container mx-auto max-w-7xl py-24"
          >
            {/* Project Overview */}
            <div className="mb-32">
              <div className="max-w-3xl mb-16">
                <HeadingH2 className="text-4xl font-bold tracking-tight mb-8">
                  Project Overview
                </HeadingH2>
                {project.longDescription && (
                  <p className="text-xl leading-relaxed text-muted-foreground">
                    {project.longDescription}
                  </p>
                )}
              </div>

              {/* Initial Gallery Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                {project.images.slice(0, 3).map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className={cn(
                      'relative rounded-xl overflow-hidden group cursor-pointer',
                      index === 0 && 'md:col-span-2 md:row-span-2',
                    )}
                    onClick={() => setSelectedImage(image)}
                  >
                    <AspectRatio ratio={index === 0 ? 16 / 9 : 4 / 3}>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10 flex items-center justify-center">
                        <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <Image
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={90}
                      />
                    </AspectRatio>
                  </motion.div>
                ))}
              </div>

              {/* Full Width Image Section */}
              {project.images[3] && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="relative h-[60vh] mb-32 rounded-xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(project.images[3])}
                >
                  <Image
                    src={project.images[3]}
                    alt={`${project.title} full view`}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    quality={95}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/60" />
                </motion.div>
              )}

              {/* Challenges & Solutions with Images */}
              <div className="grid md:grid-cols-2 gap-24 mb-32">
                {/* Challenges Section */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <HeadingH2 className="text-4xl font-bold tracking-tight">
                    Challenges
                  </HeadingH2>
                  <div className="space-y-8">
                    {project.challenges.map((challenge, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="p-8 rounded-xl bg-card border transition-all hover:border-primary hover:bg-accent/5"
                      >
                        <h3 className="text-2xl font-semibold mb-4">
                          {challenge.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {challenge.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Solutions Section with Image */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  {project.images[4] && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="relative h-[300px] rounded-xl overflow-hidden mb-8 cursor-pointer"
                      onClick={() => setSelectedImage(project.images[4])}
                    >
                      <Image
                        src={project.images[4]}
                        alt={`${project.title} solution visualization`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={90}
                      />
                    </motion.div>
                  )}
                  <HeadingH2 className="text-4xl font-bold tracking-tight">
                    Solutions
                  </HeadingH2>
                  <div className="space-y-8">
                    {project.solutions.map((solution, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="p-8 rounded-xl bg-card border transition-all hover:border-primary hover:bg-accent/5"
                      >
                        <h3 className="text-2xl font-semibold mb-4">
                          {solution.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {solution.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Final Image Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32">
                {project.images.slice(5).map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative aspect-square rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => setSelectedImage(image)}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} detail ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
                      quality={85}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Project Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-4 justify-center"
              >
                {project.liveLink && (
                  <Button asChild size="lg">
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Live Site
                    </Link>
                  </Button>
                )}
                {project.githubLinks?.[0] && (
                  <Button variant="outline" asChild size="lg">
                    <Link
                      href={project.githubLinks[0].link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Source
                    </Link>
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
          <DialogContent className="max-w-7xl w-full p-0 bg-transparent border-none">
            <DialogTitle asChild>
              <VisuallyHidden>Project Image View</VisuallyHidden>
            </DialogTitle>
            <DialogDescription asChild>
              <VisuallyHidden>Detailed view of project image</VisuallyHidden>
            </DialogDescription>
            {selectedImage && (
              <div className="relative w-full aspect-video">
                <Image
                  src={selectedImage}
                  alt="Project detail"
                  fill
                  className="object-contain"
                  sizes="100vw"
                  quality={100}
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </motion.div>
    </MainLayout>
  );
}
