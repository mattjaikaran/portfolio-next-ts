'use client';

import { MainLayout } from '@/components/layouts/main-layout';
import { HeadingH1, HeadingH2 } from '@/components/shared/typography';
import { motion, Variants } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Music } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

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

interface Release {
  id: number;
  title: string;
  year: number;
  url: string;
  image?: string;
}

interface MusicProject {
  id: string;
  slug: string;
  title: string;
  artist: string;
  description: string;
  longDescription?: string;
  coverArt?: string;
  image: string;
  tags: string[];
  date: string;
  year?: string;
  role?: string;
  streamingUrl: string;
  externalUrl?: string;
  credits?: Array<{ role: string; name: string }>;
  tracks?: Array<{ title: string; duration?: string }>;
  highlights?: Array<{ title: string; description: string }>;
  releases?: Release[];
}

interface MusicProjectClientProps {
  project: MusicProject;
}

export function MusicProjectClient({ project }: MusicProjectClientProps) {
  return (
    <MainLayout>
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="container max-w-5xl py-12 mx-auto px-4"
      >
        <motion.div variants={fadeInUp} className="mb-8">
          <Link
            href="/music"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Music Projects
          </Link>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <HeadingH1>{project.title}</HeadingH1>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-8 mb-12"
        >
          <div className="space-y-6">
            <div className="relative aspect-square overflow-hidden rounded-lg border">
              <img
                src={project.coverArt || project.image}
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg">{project.description}</p>
              {project.longDescription && (
                <div className="mt-6">
                  <p>{project.longDescription}</p>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <HeadingH2 className="text-xl mb-4">Project Details</HeadingH2>
              <dl className="space-y-4">
                {(project.year || project.date) && (
                  <div>
                    <dt className="font-medium text-muted-foreground">Year</dt>
                    <dd>
                      {project.year || new Date(project.date).getFullYear()}
                    </dd>
                  </div>
                )}
                {project.role && (
                  <div>
                    <dt className="font-medium text-muted-foreground">Role</dt>
                    <dd>{project.role}</dd>
                  </div>
                )}
                <div>
                  <dt className="font-medium text-muted-foreground">Artist</dt>
                  <dd>{project.artist}</dd>
                </div>
              </dl>
            </div>

            {project.credits && project.credits.length > 0 && (
              <div>
                <HeadingH2 className="text-xl mb-4">Credits</HeadingH2>
                <div className="space-y-2">
                  {project.credits.map((credit, index) => (
                    <div key={index}>
                      <span className="font-medium">{credit.role}:</span>{' '}
                      <span className="text-muted-foreground">
                        {credit.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!project.releases && project.streamingUrl && (
              <div className="flex flex-col gap-3">
                <Button asChild className="w-full">
                  <a
                    href={project.streamingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center"
                  >
                    <Music className="mr-2 h-4 w-4" />
                    Listen Now
                  </a>
                </Button>
                {project.externalUrl && (
                  <Button variant="outline" asChild className="w-full">
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Artist Page
                    </a>
                  </Button>
                )}
              </div>
            )}
          </div>
        </motion.div>

        {/* Releases Section */}
        {project.releases && project.releases.length > 0 && (
          <motion.div variants={fadeInUp} className="mb-12">
            <HeadingH2 className="mb-6">Releases</HeadingH2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.releases.map((release) => (
                <Card
                  key={release.id}
                  className="overflow-hidden group hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row">
                    {release.image && (
                      <div className="relative w-full sm:w-40 h-40 flex-shrink-0 overflow-hidden">
                        <img
                          src={release.image}
                          alt={release.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <CardContent className="flex flex-col justify-between p-4 flex-1">
                      <div>
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {release.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mt-1">
                          {release.year}
                        </p>
                      </div>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="mt-4 w-full sm:w-auto"
                      >
                        <a
                          href={release.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center"
                        >
                          <Music className="mr-2 h-4 w-4" />
                          Listen
                        </a>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        )}

        {project.tracks && project.tracks.length > 0 && (
          <motion.div variants={fadeInUp} className="mb-12">
            <HeadingH2 className="mb-6">Track List</HeadingH2>
            <ul className="space-y-4">
              {project.tracks.map((track, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 p-3 rounded-lg border hover:border-primary/20 transition-colors"
                >
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary font-medium">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-medium">{track.title}</h3>
                    {track.duration && (
                      <p className="text-sm text-muted-foreground">
                        {track.duration}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {project.highlights && project.highlights.length > 0 && (
          <motion.div variants={fadeInUp}>
            <HeadingH2 className="mb-6">Highlights</HeadingH2>
            <div className="space-y-6">
              {project.highlights.map((highlight, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="font-semibold text-lg">{highlight.title}</h3>
                  <p className="text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </MainLayout>
  );
}
