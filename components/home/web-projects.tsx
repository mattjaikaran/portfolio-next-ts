'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolio';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function WebProjects() {
  // Take only the first 3 projects for the homepage
  const featuredProjects = portfolioData.slice(0, 3);

  return (
    <section id="webprojects" className="py-24 px-4">
      <motion.div
        className="max-w-6xl mx-auto space-y-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {/* Section Header */}
        <motion.div className="text-center space-y-4" variants={fadeInUp}>
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            Featured Projects
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Here are some of my recent projects, showcasing my expertise in
            full-stack development, modern UI design, and scalable architecture.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className="group relative bg-card rounded-xl overflow-hidden border shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                {project.images?.[0] ? (
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 dark:from-purple-900/30 dark:to-blue-900/30" />
                )}

                {/* Links Overlay */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.githubLinks?.[0] && (
                    <a
                      href={project.githubLinks[0].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground/80 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech?.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-secondary/50 text-foreground/90"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* View Details Link */}
                <Link
                  href={`/web/${project.id}`}
                  className="inline-flex items-center text-sm text-foreground/80 hover:text-primary transition-colors"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div variants={fadeInUp} className="flex justify-center">
          <Link href="/web">
            <Button variant="outline" size="lg" className="group">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
