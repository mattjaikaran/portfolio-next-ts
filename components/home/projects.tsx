import { motion, Variants } from 'framer-motion';
import { Project } from '@/types/project';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Github, Globe, PlayCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

// Test data
const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description:
      'A modern e-commerce platform with real-time inventory management',
    longDescription:
      'Built with Next.js, TypeScript, and Stripe integration. Features include real-time inventory tracking, dynamic product filtering, and seamless checkout experience.',
    image: 'https://dummyimage.com/600x400/000/fff',
    tags: ['E-commerce', 'Web App', 'Full Stack'],
    links: {
      github: 'https://github.com/username/project',
      live: 'https://project.com',
      demo: 'https://demo.project.com',
    },
    featured: true,
    techStack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'PostgreSQL',
    ],
    company: 'Acme Inc',
    date: '2024',
  },
  {
    id: '2',
    title: 'AI Content Generator',
    description: 'AI-powered content generation tool for marketers',
    image: 'https://dummyimage.com/600x400/000/fff',
    tags: ['AI/ML', 'SaaS', 'Web App'],
    links: {
      github: 'https://github.com/username/project-2',
      live: 'https://project-2.com',
    },
    featured: true,
    techStack: ['React', 'Python', 'OpenAI', 'FastAPI', 'MongoDB'],
    date: '2023',
  },
  {
    id: '3',
    title: 'Real-time Analytics Dashboard',
    description: 'Interactive dashboard for business analytics',
    image: 'https://dummyimage.com/600x400/000/fff',
    tags: ['Analytics', 'Dashboard', 'Enterprise'],
    links: {
      live: 'https://project-3.com',
      demo: 'https://demo.project-3.com',
    },
    techStack: [
      'React',
      'TypeScript',
      'D3.js',
      'Node.js',
      'Socket.io',
      'Redis',
    ],
    company: 'Tech Corp',
    date: '2023',
  },
];

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

export function Projects() {
  return (
    <div className="py-24 px-4">
      <motion.div
        className="max-w-6xl mx-auto space-y-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {/* Section Header */}
        <motion.div className="text-center space-y-4" variants={fadeInUp}>
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-500">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects, showcasing my expertise in
            full-stack development, modern UI design, and scalable architecture.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {projects.map(project => (
            <motion.div
              key={project.id}
              className="group relative bg-card rounded-xl overflow-hidden border shadow-sm hover:shadow-lg transition-shadow"
              variants={fadeInUp}
            >
              {/* Project Image */}
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  {project.links.github && (
                    <Link
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="icon"
                        variant="ghost"
                        className="rounded-full"
                      >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </Link>
                  )}
                  {project.links.live && (
                    <Link
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="icon"
                        variant="ghost"
                        className="rounded-full"
                      >
                        <Globe className="h-5 w-5" />
                        <span className="sr-only">Live Site</span>
                      </Button>
                    </Link>
                  )}
                  {project.links.demo && (
                    <Link
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="icon"
                        variant="ghost"
                        className="rounded-full"
                      >
                        <PlayCircle className="h-5 w-5" />
                        <span className="sr-only">Demo</span>
                      </Button>
                    </Link>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="pt-4 border-t">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map(tech => (
                      <span
                        key={tech}
                        className="text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Company & Date */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  {project.company && <span>{project.company}</span>}
                  <span>{project.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div className="text-center" variants={fadeInUp}>
          <Link href="/portfolio">
            <Button variant="outline" className="group relative px-6">
              View All Projects
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
