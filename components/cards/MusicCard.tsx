'use client';

import { MusicProject } from '@/data/music';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Music } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface MusicCardProps {
  project: MusicProject;
}

export function MusicCard({ project }: MusicCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-square w-full">
        <Image
          src={project.coverArt || project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2 mb-2">
            {project.tags.slice(0, 3).map(tag => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-muted-foreground">{project.artist}</p>
          </div>
          <p className="text-muted-foreground line-clamp-2">
            {project.description}
          </p>
          <div className="flex gap-2 mt-4">
            {project.streamingUrl && (
              <Button variant="default" size="sm" className="flex-1" asChild>
                <a
                  href={project.streamingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <Music className="mr-2 h-4 w-4" />
                  Listen
                </a>
              </Button>
            )}
            <Button variant="outline" size="sm" className="flex-1" asChild>
              <Link
                href={`/music/${project.slug}`}
                className="flex items-center justify-center"
              >
                Details
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 