import { Metadata } from 'next';
import { MusicPageClient } from './music-page-client';

export const metadata: Metadata = {
  title: 'Music | Matt Jaikaran | Software Engineer',
  description:
    'Music portfolio of Matt Jaikaran - A collection of songs produced, mixed and mastered.',
  openGraph: {
    title: 'Music - Matt Jaikaran',
    description:
      'Music portfolio of Matt Jaikaran - A collection of songs produced, mixed and mastered.',
  },
};

export default function MusicPage() {
  return <MusicPageClient />;
}
