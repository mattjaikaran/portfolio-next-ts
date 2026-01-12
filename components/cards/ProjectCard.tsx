'use client';

import { Project } from '@/types/project';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="group h-full flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300">
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
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

        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <p className="text-muted-foreground">{project.description}</p>
        </CardHeader>

        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-secondary/50">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter>
          <Link href={`/web/${project.id}`} className="w-full">
            <Button
              variant="ghost"
              className="w-full justify-between group/btn hover:bg-primary hover:text-primary-foreground"
            >
              View Details
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
