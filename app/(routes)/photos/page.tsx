import { Metadata } from 'next';
import { PhotosPageClient } from './photos-page-client';

export const metadata: Metadata = {
  title: 'Photography | Matt Jaikaran | Software Engineer',
  description:
    'Photography portfolio of Matt Jaikaran - A collection of photos taken with Sony A7 IV and CampSnap cameras.',
  openGraph: {
    title: 'Photography - Matt Jaikaran | Software Engineer',
    description:
      'Photography portfolio of Matt Jaikaran - A collection of photos taken with Sony A7 IV and CampSnap cameras.',
  },
};

export default function PhotosPage() {
  return <PhotosPageClient />;
}
