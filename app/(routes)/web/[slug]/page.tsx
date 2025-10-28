import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { projects } from '@/data/projects';
import { ProjectDetailClient } from './project-detail-client';

interface Props {
  params: Promise<{ slug: string }>;
}

async function findProject(slug: string) {
  return projects.find((p) => p.id === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await findProject(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Matt Jaikaran`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article',
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await findProject(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
