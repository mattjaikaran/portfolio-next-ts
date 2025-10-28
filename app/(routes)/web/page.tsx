import { Metadata } from 'next';
import { WebPageClient } from './web-page-client';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Web Projects | Matt Jaikaran | Software Engineer',
  description:
    'Web development projects by Matt Jaikaran - Full Stack Software Engineer based in NYC.',
  openGraph: {
    title: 'Web Projects | Matt Jaikaran',
    description:
      'Web development projects by Matt Jaikaran - Full Stack Software Engineer based in NYC.',
    type: 'website',
  },
};

export default function WebPage() {
  return <WebPageClient initialProjects={projects} />;
}
