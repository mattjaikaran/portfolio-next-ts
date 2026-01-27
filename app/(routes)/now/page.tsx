import { Metadata } from 'next';
import { NowPageClient } from './now-page-client';

export const metadata: Metadata = {
  title: 'Now | Matt Jaikaran | Software Engineer',
  description:
    'What Matt Jaikaran is currently focused on - projects, learning, and interests.',
  openGraph: {
    title: 'Now | Matt Jaikaran',
    description:
      'What Matt Jaikaran is currently focused on - projects, learning, and interests.',
  },
};

export default function NowPage() {
  return <NowPageClient />;
}
