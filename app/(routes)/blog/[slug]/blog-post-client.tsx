'use client';

import { MainLayout } from '@/components/layouts/main-layout';
import { HeadingH1 } from '@/components/shared/typography';
import { motion, Variants } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { BlogPost } from '@/lib/types/blog';
import { calculateReadingTime } from '@/data/blog';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { ArticleJsonLd } from '@/components/seo/json-ld';

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

interface BlogPostClientProps {
  post: BlogPost;
}

export function BlogPostClient({ post }: BlogPostClientProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch {
        // User cancelled or error
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <MainLayout>
      <ArticleJsonLd
        title={post.title}
        description={post.excerpt}
        url={`https://mattjaikaran.com/blog/${post.slug}`}
        datePublished={post.date}
        author={post.author}
        image={post.coverImage}
      />
      <motion.article
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="container max-w-3xl py-12 mx-auto px-4"
      >
        <motion.div variants={fadeInUp} className="mb-8">
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="gap-2 mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Button>
          </Link>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <HeadingH1 className="mb-4">{post.title}</HeadingH1>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {calculateReadingTime(post.content)} min read
              </span>
            </div>

            <Button variant="outline" size="sm" onClick={handleShare}>
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="prose prose-lg dark:prose-invert max-w-none
            prose-headings:font-semibold prose-headings:tracking-tight
            prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
            prose-pre:bg-muted prose-pre:border prose-pre:border-border
            prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground
            prose-li:text-muted-foreground
            prose-strong:text-foreground"
        >
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-12 pt-8 border-t border-border"
        >
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Written by{' '}
              <span className="font-medium text-foreground">{post.author}</span>
            </div>
            <Link href="/blog">
              <Button variant="outline" size="sm">
                More articles
              </Button>
            </Link>
          </div>
        </motion.div>
      </motion.article>
    </MainLayout>
  );
}
