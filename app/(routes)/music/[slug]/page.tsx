import { musicProjects } from '@/data/music';
import { notFound } from 'next/navigation';
import { MusicProjectClient } from './music-project-client';

export default async function MusicProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = musicProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <MusicProjectClient project={project} />;
}
