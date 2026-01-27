'use client';

import { MainLayout } from '@/components/layouts/main-layout';
import { HeadingH1, HeadingH2 } from '@/components/shared/typography';
import { motion, Variants } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Code2,
  BookOpen,
  Music,
  Camera,
  Dumbbell,
  MapPin,
  Calendar,
} from 'lucide-react';
import Link from 'next/link';

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

const currentActivities = [
  {
    icon: Code2,
    title: 'Building',
    description:
      'Working on full-stack applications with Next.js, Django, and TypeScript. Exploring AI integrations and modern development workflows.',
    tags: ['Next.js 15', 'React 19', 'Django', 'TypeScript'],
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: BookOpen,
    title: 'Learning',
    description:
      'Deepening knowledge in system design, cloud architecture, and staying current with the rapidly evolving AI/ML landscape.',
    tags: ['System Design', 'AWS', 'AI/ML', 'Rust'],
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
  },
  {
    icon: Music,
    title: 'Creating Music',
    description:
      'Writing and producing new solo material. Experimenting with electronic and indie rock sounds. Getting back into the creative flow.',
    tags: ['Production', 'Guitar', 'Ableton', 'Songwriting'],
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    icon: Camera,
    title: 'Photography',
    description:
      'Capturing moments around NYC and during travels. Shooting with Sony A7 IV and exploring street photography.',
    tags: ['Sony A7 IV', 'Street', 'Portraits', 'Travel'],
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
  },
  {
    icon: Dumbbell,
    title: 'Fitness',
    description:
      'Following a consistent gym routine with a focus on strength training. Recently added kettlebell work to the mix.',
    tags: ['Strength', 'Kettlebells', 'Consistency'],
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
  },
];

const currentlyReading = [
  'Clean Architecture by Robert C. Martin',
  'Designing Data-Intensive Applications',
  'Various tech blogs and newsletters',
];

const currentlyListening = [
  'Bon Iver',
  'The National',
  'Phoebe Bridgers',
  'Japanese Breakfast',
  'Big Thief',
];

export function NowPageClient() {
  const lastUpdated = 'January 2025';

  return (
    <MainLayout>
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="container max-w-4xl py-12 mx-auto px-4"
      >
        <motion.div variants={fadeInUp} className="text-center space-y-4 mb-12">
          <HeadingH1>Now</HeadingH1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            What I&apos;m currently focused on and interested in. Inspired by{' '}
            <a
              href="https://nownownow.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              nownownow.com
            </a>
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              New York City
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              Updated {lastUpdated}
            </span>
          </div>
        </motion.div>

        {/* Current Activities */}
        <motion.div variants={fadeInUp} className="space-y-6 mb-12">
          {currentActivities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:border-primary/20 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className={`p-3 rounded-lg ${activity.bgColor} h-fit`}>
                      <activity.icon className={`w-6 h-6 ${activity.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">
                        {activity.title}
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        {activity.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {activity.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Reading & Listening */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div
            variants={fadeInUp}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="pt-6">
                <HeadingH2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-green-500" />
                  Currently Reading
                </HeadingH2>
                <ul className="space-y-2">
                  {currentlyReading.map((book) => (
                    <li
                      key={book}
                      className="text-muted-foreground text-sm flex items-start gap-2"
                    >
                      <span className="text-primary mt-1">•</span>
                      {book}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="pt-6">
                <HeadingH2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Music className="w-5 h-5 text-purple-500" />
                  Currently Listening
                </HeadingH2>
                <div className="flex flex-wrap gap-2">
                  {currentlyListening.map((artist) => (
                    <Badge key={artist} variant="outline">
                      {artist}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          className="text-center pt-8 border-t border-border"
        >
          <p className="text-muted-foreground mb-4">
            Want to collaborate or just chat?
          </p>
          <Link
            href="/contact"
            className="text-primary hover:underline font-medium"
          >
            Get in touch →
          </Link>
        </motion.div>
      </motion.div>
    </MainLayout>
  );
}
