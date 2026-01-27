import { Metadata } from 'next';
import { StatsPageClient } from './stats-page-client';

export const metadata: Metadata = {
  title: 'Stats | Matt Jaikaran | Software Engineer',
  description:
    'Public analytics and statistics for mattjaikaran.com - page views, visitors, and more.',
  openGraph: {
    title: 'Stats | Matt Jaikaran',
    description: 'Public analytics for mattjaikaran.com',
  },
};

export default function StatsPage() {
  return <StatsPageClient />;
}
