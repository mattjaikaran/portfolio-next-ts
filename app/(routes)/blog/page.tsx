import { Metadata } from 'next';
import { getAllPublishedPosts } from '@/lib/services/blog';
import { BlogPageClient } from './blog-page-client';

export const metadata: Metadata = {
  title: 'Blog | Matt Jaikaran | Software Engineer',
  description:
    'Thoughts on software engineering, technology, and building products.',
  openGraph: {
    title: 'Blog | Matt Jaikaran',
    description:
      'Thoughts on software engineering, technology, and building products.',
  },
};

export default async function BlogPage() {
  const posts = await getAllPublishedPosts();
  return <BlogPageClient posts={posts} />;
}
